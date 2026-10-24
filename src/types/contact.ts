// The specification of which data is collected in the contact form
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  newsletterOptIn?: boolean; // ? optional
}