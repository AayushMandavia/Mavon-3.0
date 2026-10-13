import { ContactSubmission, ContactResponse } from "../../types/contact";
import { validateContactSubmission } from "../validators/contact.validator";

export class ContactService {
  async handleContact(
    submission: Partial<ContactSubmission>,
  ): Promise<ContactResponse> {
    const validation = validateContactSubmission(submission);

    if (!validation.isValid) {
      const errorMsg = Object.values(validation.errors).join(" ");
      return {
        success: false,
        message: errorMsg,
      };
    }

    // In a production app, here you would persist to database or dispatch to SendGrid/Resend
    const referenceId = `ENQ-${Date.now().toString(36).toUpperCase()}`;

    return {
      success: true,
      message:
        "Thank you for your enquiry. The MAVON team will be in touch shortly.",
      id: referenceId,
    };
  }
}

export const contactService = new ContactService();
