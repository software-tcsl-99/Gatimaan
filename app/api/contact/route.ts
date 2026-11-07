import { NextResponse } from "next/server";
import {
  validateContactForm,
  type ContactFormPayload,
} from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ContactFormPayload>;
    const validation = validateContactForm(body);

    if (!validation.valid) {
      return NextResponse.json(
        {
          ok: false,
          code: "VALIDATION_ERROR",
          message: "Please review and complete all required fields.",
          errors: validation.errors,
        },
        { status: 400 }
      );
    }

    const contactBackendUrl = process.env.CONTACT_BACKEND_API_URL?.trim() || "";
    const contactBackendKey = process.env.CONTACT_BACKEND_API_KEY?.trim() || "";
    const configuredEmail =
      process.env.NEXT_PUBLIC_COMPANY_EMAIL?.trim() ||
      process.env.NEXT_PUBLIC_SUPPORT_EMAIL?.trim() ||
      "sales@trucode.in";

    if (!contactBackendUrl) {
      return NextResponse.json(
        {
          ok: false,
          code: "BACKEND_NOT_CONFIGURED",
          message:
            "Direct API enquiry forwarding is not yet configured in this environment. Please send your enquiry via our official contact email channel.",
          alternativeChannel: {
            email: configuredEmail,
            isEmailConfigured: Boolean(configuredEmail),
          },
        },
        { status: 503 }
      );
    }

    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };
    if (contactBackendKey) {
      headers["Authorization"] = `Bearer ${contactBackendKey}`;
    }

    const upstream = await fetch(contactBackendUrl, {
      method: "POST",
      headers,
      body: JSON.stringify({
        fullName: body.fullName?.trim(),
        email: body.email?.trim(),
        companyName: body.companyName?.trim(),
        enquiryType: body.enquiryType,
        subject: body.subject?.trim(),
        message: body.message?.trim(),
        submittedAt: new Date().toISOString(),
      }),
    });

    if (!upstream.ok) {
      return NextResponse.json(
        {
          ok: false,
          code: "UPSTREAM_ERROR",
          message:
            "The enquiry service is temporarily unavailable. Please reach out via the official contact email.",
          alternativeChannel: {
            email: configuredEmail,
            isEmailConfigured: Boolean(configuredEmail),
          },
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      ok: true,
      code: "ENQUIRY_SUBMITTED",
      message: "Your enquiry has been received by the Gatimaan team.",
    });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        code: "INVALID_REQUEST",
        message: "Unable to process the enquiry payload.",
      },
      { status: 400 }
    );
  }
}

