export interface SiteConfig {
  brand: {
    name: string;
    tagline: string;
    positioning: string;
    logoPath: string;
  };
  siteUrl: string;
  app: {
    playStoreUrl: string;
    isPlayStoreAvailable: boolean;
    iosAvailable: boolean;
    iosAppStoreUrl: string;
    version: string;
    platformsLabel: string;
  };
  contact: {
    email: string;
    supportEmail: string;
    privacyEmail: string;
    phone: string;
    isConfigured: {
      email: boolean;
      phone: boolean;
    };
  };
  api: {
    deletionRequestRoute: string;
    contactRoute: string;
  };
  legal: {
    privacyEffectiveDate: string;
    privacyLastUpdated: string;
    retentionDurationPlaceholder: string;
    deletionProcessingWindowPlaceholder: string;
    approvedTermsUrl: string;
  };
}

const envPlayStoreUrl = process.env.NEXT_PUBLIC_PLAY_STORE_URL?.trim() || "";
const envIosAppStoreUrl = process.env.NEXT_PUBLIC_IOS_APP_STORE_URL?.trim() || "";
const envCompanyEmail = process.env.NEXT_PUBLIC_COMPANY_EMAIL?.trim() || "sales@trucode.in";
const envSupportEmail =
  process.env.NEXT_PUBLIC_SUPPORT_EMAIL?.trim() ||
  "trucodecodingsystemlimited09@gmail.com";
const envPrivacyEmail = process.env.NEXT_PUBLIC_PRIVACY_EMAIL?.trim() || envSupportEmail;
const envCompanyPhone = process.env.NEXT_PUBLIC_COMPANY_PHONE?.trim() || "9665749595";
const envTermsUrl = process.env.NEXT_PUBLIC_APPROVED_TERMS_URL?.trim() || "";

export const siteConfig: SiteConfig = {
  brand: {
    name: "Gatimaan",
    tagline: "Driven by code, managed with precision",
    positioning:
      "An intelligent enterprise platform that connects workforce management, field operations, attendance, GPS tracking, expense management, inventory movement, customer visits, and workforce analytics into one unified ecosystem.",
    logoPath: "/logo/gatimaan-logo.png",
  },
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://gatimaan.io",
  app: {
    playStoreUrl: envPlayStoreUrl,
    isPlayStoreAvailable: Boolean(envPlayStoreUrl),
    iosAvailable: Boolean(envIosAppStoreUrl),
    iosAppStoreUrl: envIosAppStoreUrl,
    version: process.env.NEXT_PUBLIC_APP_VERSION?.trim() || "v1.0 (Enterprise Release)",
    platformsLabel: "Android & iOS (React Native / Expo)",
  },
  contact: {
    email: envCompanyEmail,
    supportEmail: envSupportEmail,
    privacyEmail: envPrivacyEmail,
    phone: envCompanyPhone,
    isConfigured: {
      email: Boolean(envCompanyEmail),
      phone: Boolean(envCompanyPhone),
    },
  },
  api: {
    deletionRequestRoute: "/api/deletion-request",
    contactRoute: "/api/contact",
  },
  legal: {
    privacyEffectiveDate:
      process.env.NEXT_PUBLIC_PRIVACY_EFFECTIVE_DATE?.trim() || "November 9, 2026",
    privacyLastUpdated:
      process.env.NEXT_PUBLIC_PRIVACY_LAST_UPDATED?.trim() || "November 9, 2026",
    retentionDurationPlaceholder:
      process.env.NEXT_PUBLIC_RETENTION_POLICY_TEXT?.trim() ||
      "for the duration of active employment or service engagement and in accordance with the employing organization's configured retention schedule and applicable statutory requirements",
    deletionProcessingWindowPlaceholder:
      process.env.NEXT_PUBLIC_DELETION_TIMEFRAME_TEXT?.trim() ||
      "within the standard administrative verification and retention review window established by your employing organization and applicable data protection regulations",
    approvedTermsUrl: envTermsUrl,
  },
};
