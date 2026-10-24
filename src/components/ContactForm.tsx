import { useState } from 'react';
import type { ContactFormData } from '../types/contact';

export function ContactForm() {
  // Controlled local state for each form field
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [newsletterOptIn, setNewsletterOptIn] = useState<boolean>(false);
  // user status messages
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);

  // Typed onChange handler for text/email inputs
  const handleTextChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setter(e.target.value);
    };

  // Typed onChange handler for textarea
  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  // Typed onChange handler for checkbox
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewsletterOptIn(e.target.checked);
  };

  // Typed onSubmit handler for the form
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccessMessage(null);
    setValidationError(null);

    // Validate required fields are not empty
    if (!name.trim() || !email.trim() || !message.trim()) {
      setValidationError('Please fill in all required fields.');
      return;
    }

    // Basic email format validation
    if (!email.includes('@')) {
      setValidationError('Please use @ valid email');
      return;
    }

    // Construct the typed form data object
    const formData: ContactFormData = {
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      newsletterOptIn,
    };

    console.log('Form submitted:', formData);
    setSuccessMessage('Thank you for your submission!');

    // Reset form after successful submission
    setName('');
    setEmail('');
    setMessage('');
    setNewsletterOptIn(false);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: '480px',
          margin: '32px auto',
          fontFamily: 'sans-serif',
        }}>
        <h2>Contact Us</h2>

        {/* Success message */}
        {successMessage && (
          <p
            style={{
              color: 'green',
              background: '#e6ffe6',
              padding: '8px',
              borderRadius: '4px',
            }}>
            {successMessage}
          </p>
        )}

        {/* Validation error */}
        {validationError && (
          <p
            style={{
              color: 'red',
              background: '#ffe6e6',
              padding: '8px',
              borderRadius: '4px',
            }}>
            {validationError}
          </p>
        )}

        {/* Name field */}
        <div style={{ marginBottom: '16px' }}>
          <label htmlFor='name'>Name *</label>
          <br />
          <input
            id='name'
            type='text'
            value={name}
            onChange={handleTextChange(setName)}
            style={{ width: '100%', padding: '8px', marginTop: '4px' }}
          />
        </div>

        {/* Email field */}
        <div style={{ marginBottom: '16px' }}>
          <label htmlFor='email'>E-post *</label>
          <br />
          <input
            id='email'
            type='email'
            value={email}
            onChange={handleTextChange(setEmail)}
            style={{ width: '100%', padding: '8px', marginTop: '4px' }}
          />
        </div>

        {/* Message field */}
        <div style={{ marginBottom: '16px' }}>
          <label htmlFor='message'>Melding *</label>
          <br />
          <textarea
            id='message'
            value={message}
            onChange={handleTextAreaChange}
            rows={4}
            style={{ width: '100%', padding: '8px', marginTop: '4px' }}
          />
        </div>

        {/* Newsletter opt-in checkbox */}
        <div style={{ marginBottom: '16px' }}>
          <label>
            <input
              type='checkbox'
              checked={newsletterOptIn}
              onChange={handleCheckboxChange}
              style={{ marginRight: '8px' }}
            />
            Sign up for Newsletter
          </label>
        </div>

        <button
          type='submit'
          style={{ padding: '10px 24px', cursor: 'pointer' }}>
          Send
        </button>
      </form>
    </>
  );
}
