import { NextResponse } from "next/server";
import {
  validateDeletionRequest,
  type DeletionRequestPayload,
} from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<DeletionRequestPayload>;
    const validation = validateDeletionRequest(body);

    if (!validation.valid) {
      return NextResponse.json(
        {
          ok: false,
          code: "VALIDATION_ERROR",
          message: "Please correct the highlighted fields before submitting.",
          errors: validation.errors,
        },
        { status: 400 }
      );
    }

    const backendEndpoint = process.env.DELETION_BACKEND_API_URL?.trim() || "";
    const backendApiKey = process.env.DELETION_BACKEND_API_KEY?.trim() || "";
    const configuredSupportEmail =
      process.env.NEXT_PUBLIC_PRIVACY_EMAIL?.trim() ||
      process.env.NEXT_PUBLIC_SUPPORT_EMAIL?.trim() ||
      process.env.NEXT_PUBLIC_COMPANY_EMAIL?.trim() ||
      "trucodecodingsystemlimited09@gmail.com";

    // If a live backend ERP deletion endpoint is not configured yet, return an honest status
    // instructing the client to use the official support email / administrator channel.
    if (!backendEndpoint) {
      return NextResponse.json(
        {
          ok: false,
          code: "BACKEND_NOT_CONFIGURED",
          message:
            "Automated backend deletion routing is not yet connected in this environment. Please submit your verified request directly via the official support email channel or your Company Administrator.",
          alternativeChannel: {
            supportEmail: configuredSupportEmail,
            isEmailConfigured: Boolean(configuredSupportEmail),
          },
        },
        { status: 503 }
      );
    }

    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };
    if (backendApiKey) {
      headers["Authorization"] = `Bearer ${backendApiKey}`;
    }

    const upstreamResponse = await fetch(backendEndpoint, {
      method: "POST",
      headers,
      body: JSON.stringify({
        fullName: body.fullName?.trim(),
        email: body.email?.trim(),
        employeeId: body.employeeId?.trim(),
        companyName: body.companyName?.trim(),
        reason: body.reason?.trim() || "",
        requestType: body.requestType,
        confirmed: body.confirmed,
        submittedAt: new Date().toISOString(),
        source: "gatimaan-web-deletion-portal",
      }),
    });

    if (!upstreamResponse.ok) {
      return NextResponse.json(
        {
          ok: false,
          code: "UPSTREAM_ERROR",
          message:
            "The backend service could not process the deletion request at this time. Please use the official support email channel or contact your Company Administrator.",
          alternativeChannel: {
            supportEmail: configuredSupportEmail,
            isEmailConfigured: Boolean(configuredSupportEmail),
          },
        },
        { status: 502 }
      );
    }

    const data = await upstreamResponse.json().catch(() => ({}));

    return NextResponse.json({
      ok: true,
      code: "REQUEST_SUBMITTED",
      message:
        "Your deletion request has been transmitted to the backend verification queue.",
      referenceId: data.referenceId || null,
    });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        code: "INVALID_REQUEST",
        message: "Unable to parse or process the request payload.",
      },
      { status: 400 }
    );
  }
}
