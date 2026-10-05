// Sends contact-form messages through Web3Forms (https://web3forms.com), which
// emails them to the address the access key was registered with.

const ENDPOINT = 'https://api.web3forms.com/submit'
const TIMEOUT_MS = 15_000

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
const SUBJECT = import.meta.env.VITE_CONTACT_SUBJECT || 'New Contact Form Submission'
const FROM_NAME = import.meta.env.VITE_CONTACT_FROM_NAME || 'Deepu Kunjumon | Personal Portfolio'

if (!ACCESS_KEY && import.meta.env.DEV) {
  console.warn('[contact] VITE_WEB3FORMS_ACCESS_KEY is not set - copy .env.example to .env and add your key.')
}

// An error whose message is safe to show to the visitor.
export class ContactError extends Error {}

const GENERIC_ERROR = 'Your message could not be sent. Please try again in a moment.'

export async function sendContactMessage({ name, email, message }) {
  if (!ACCESS_KEY) {
    throw new ContactError('The contact form isn’t available right now.')
  }

  let response
  try {
    response = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: ACCESS_KEY,
        subject: SUBJECT,
        from_name: FROM_NAME,
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
      }),
      signal: AbortSignal.timeout(TIMEOUT_MS),
    })
  } catch (error) {
    throw new ContactError(
      error.name === 'TimeoutError'
        ? 'Sending took too long. Please try again.'
        : 'Couldn’t reach the mail service. Check your connection and try again.',
    )
  }

  const data = await response.json().catch(() => null)

  if (response.status === 429) {
    throw new ContactError('Too many messages in a short time. Please try again later.')
  }
  if (!response.ok || !data?.success) {
    // The provider's own message is for the developer, not the visitor.
    if (import.meta.env.DEV) console.error('[contact] Web3Forms rejected the message:', response.status, data)
    throw new ContactError(GENERIC_ERROR)
  }
}
