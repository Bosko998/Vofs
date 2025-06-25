import { Resend } from 'resend'

export interface ContactFormData {
  name: string
  email: string
  service: string
  message: string
}

const resend = new Resend(process.env.RESEND_API_KEY)

export default defineEventHandler(async (event) => {
  const formData = await readBody<ContactFormData>(event)

  if (!formData) {
    throw createError({ statusCode: 400, statusMessage: 'No data received' })
  }

  const toEmails = 'vofs@vofs.com'
  const subject = 'Website Contact Form Submission'
  const htmlContent = `
    <p>You have received a new contact form submission.</p><br>
    <p>Name: <b>${formData.name}</b></p>
    <p>Email: <b>${formData.email}</b></p>
    <p>Service: <b>${formData.service}</b></p>
    <p><b>Message:</b></p>
    <p>${formData.message}</p>
    <hr>
    <p>Cheers, your Vofs webserver!</p>
  `

  const options = {
    from: 'careers@vofs.com',
    to: toEmails,
    subject,
    html: htmlContent,
  }

  const response = await resend.emails.send(options) as any

  if (response.name === 'validation_error') {
    throw createError({
      statusCode: 500,
      statusMessage: response.message,
    })
  }

  return { message: 'Email sent' }
})
