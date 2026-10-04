export interface ContactSubmission {
  name: string;
  email: string;
  message: string;
  company?: string;
  budget?: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  id?: string;
}
