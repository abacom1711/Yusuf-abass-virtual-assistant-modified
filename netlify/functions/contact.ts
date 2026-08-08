import type { Handler } from '@netlify/functions'
import nodemailer from 'nodemailer'

const RECIPIENT = 'abacom171@gmail.com'

const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  try {
    const { name, email, company, service, message } = JSON.parse(event.body ?? '{}')

    if (!name || !email || !service || !message) {
      return { statusCode: 400, body: 'Missing required fields' }
    }

    const gmailUser = process.env.GMAIL_USER
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD

    if (!gmailUser || !gmailAppPassword) {
      console.error('Missing GMAIL_USER or GMAIL_APP_PASSWORD environment variables')
      return { statusCode: 500, body: 'Email service is not configured' }
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    })

    await transporter.sendMail({
      from: gmailUser,
      to: RECIPIENT,
      replyTo: email,
      subject: `New website enquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || 'Not provided'}`,
        `Service needed: ${service}`,
        '',
        'Message:',
        message,
      ].join('\n'),
      html: `
        <h2>New website enquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Company:</strong> ${escapeHtml(company || 'Not provided')}</p>
        <p><strong>Service needed:</strong> ${escapeHtml(service)}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>
      `,
    })

    return { statusCode: 200, body: JSON.stringify({ success: true }) }
  } catch (error) {
    console.error('Contact email error:', error)
    return { statusCode: 500, body: 'Unable to send message' }
  }
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    }
    return entities[character]
  })
}

export { handler }
