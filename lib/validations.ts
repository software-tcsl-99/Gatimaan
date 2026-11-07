export type DeletionRequestType =
  | "delete_account_and_data"
  | "deactivate_account"
  | "request_stored_data_info";

export interface DeletionRequestPayload {
  fullName: string;
  email: string;
  employeeId: string;
  companyName: string;
  reason?: string;
  requestType: DeletionRequestType;
  confirmed: boolean;
}

export interface ValidationErrors<T> {
  [key: string]: string | undefined;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateDeletionRequest(
  data: Partial<DeletionRequestPayload>
): { valid: boolean; errors: ValidationErrors<DeletionRequestPayload> } {
  const errors: ValidationErrors<DeletionRequestPayload> = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = "Please enter your full name (at least 2 characters).";
  }

  if (!data.email || !EMAIL_REGEX.test(data.email.trim())) {
    errors.email = "Please enter a valid registered email address.";
  }

  if (!data.employeeId || data.employeeId.trim().length < 2) {
    errors.employeeId = "Please enter your registered Employee ID.";
  }

  if (!data.companyName || data.companyName.trim().length < 2) {
    errors.companyName = "Please enter your organization / company name.";
  }

  const validTypes: DeletionRequestType[] = [
    "delete_account_and_data",
    "deactivate_account",
    "request_stored_data_info",
  ];
  if (!data.requestType || !validTypes.includes(data.requestType)) {
    errors.requestType = "Please select a valid request type.";
  }

  if (data.confirmed !== true) {
    errors.confirmed =
      "You must acknowledge and confirm this request before submitting.";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export type ContactEnquiryType =
  | "general_business"
  | "technical_support"
  | "privacy_data_deletion";

export interface ContactFormPayload {
  fullName: string;
  email: string;
  companyName: string;
  enquiryType: ContactEnquiryType;
  subject: string;
  message: string;
}

export function validateContactForm(
  data: Partial<ContactFormPayload>
): { valid: boolean; errors: ValidationErrors<ContactFormPayload> } {
  const errors: ValidationErrors<ContactFormPayload> = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = "Please enter your full name.";
  }

  if (!data.email || !EMAIL_REGEX.test(data.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!data.companyName || data.companyName.trim().length < 2) {
    errors.companyName = "Please enter your company or organization name.";
  }

  const validEnquiries: ContactEnquiryType[] = [
    "general_business",
    "technical_support",
    "privacy_data_deletion",
  ];
  if (!data.enquiryType || !validEnquiries.includes(data.enquiryType)) {
    errors.enquiryType = "Please select an enquiry category.";
  }

  if (!data.subject || data.subject.trim().length < 3) {
    errors.subject = "Please provide a clear subject line.";
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = "Please enter a message of at least 10 characters.";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export function runValidationSelfCheck(): void {
  const invalidDeletion = validateDeletionRequest({
    fullName: "A",
    confirmed: false,
  });
  if (
    invalidDeletion.valid ||
    !invalidDeletion.errors.email ||
    !invalidDeletion.errors.confirmed
  ) {
    throw new Error(
      "Self-check failed: invalid deletion request should fail validation."
    );
  }

  const validDeletion = validateDeletionRequest({
    fullName: "Adesh Bhongale",
    email: "adesh@company.com",
    employeeId: "EMP-001",
    companyName: "Gatimaan Enterprise",
    requestType: "delete_account_and_data",
    confirmed: true,
  });
  if (!validDeletion.valid) {
    throw new Error(
      "Self-check failed: valid deletion request should pass validation."
    );
  }
}
