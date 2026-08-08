import type { Handler } from '@netlify/functions'
import { connect } from 'node:tls'

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

    const gmailUser = process.env.GMAIL_USER || RECIPIENT
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD

    if (!gmailAppPassword) {
      console.error('Missing GMAIL_APP_PASSWORD environment variable')
      return { statusCode: 500, body: 'Email service is not configured' }
    }

    const subject = `New website enquiry from ${name}`
    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company || 'Not provided'}`,
      `Service needed: ${service}`,
      '',
      'Message:',
      message,
    ].join('\n')

    await sendGmail({
      user: gmailUser,
      password: gmailAppPassword,
      to: RECIPIENT,
      replyTo: email,
      subject,
      text,
    })

    return { statusCode: 200, body: JSON.stringify({ success: true }) }
  } catch (error) {
    console.error('Contact email error:', error)
    return { statusCode: 500, body: 'Unable to send message' }
  }
}

type GmailMessage = {
  user: string
  password: string
  to: string
  replyTo: string
  subject: string
  text: string
}

function sendGmail({ user, password, to, replyTo, subject, text }: GmailMessage) {
  return new Promise<void>((resolve, reject) => {
    const socket = connect({ host: 'smtp.gmail.com', port: 465, servername: 'smtp.gmail.com' })
    let buffer = ''
    let step = 0
    let settled = false

    const finish = (error?: Error) => {
      if (settled) return
      settled = true
      socket.end()
      error ? reject(error) : resolve()
    }

    const command = (value: string) => socket.write(`${value}\r\n`)

    socket.setEncoding('utf8')
    socket.setTimeout(15000, () => finish(new Error('Gmail SMTP connection timed out')))
    socket.on('error', (error) => finish(error))
    socket.on('data', (chunk: string) => {
      buffer += chunk

      while (buffer.includes('\r\n')) {
        const newline = buffer.indexOf('\r\n')
        const line = buffer.slice(0, newline)
        buffer = buffer.slice(newline + 2)

        if (!line || (line.length >= 4 && line[3] === '-')) continue

        const code = Number(line.slice(0, 3))
        if (code >= 400) {
          finish(new Error(`Gmail SMTP error ${code}: ${line.slice(4)}`))
          return
        }

        if (step === 0 && code === 220) {
          command('EHLO portfolio-site')
          step = 1
        } else if (step === 1 && code === 250) {
          command('AUTH LOGIN')
          step = 2
        } else if (step === 2 && code === 334) {
          command(Buffer.from(user).toString('base64'))
          step = 3
        } else if (step === 3 && code === 334) {
          command(Buffer.from(password).toString('base64'))
          step = 4
        } else if (step === 4 && code === 235) {
          command(`MAIL FROM:<${user}>`)
          step = 5
        } else if (step === 5 && code === 250) {
          command(`RCPT TO:<${to}>`)
          step = 6
        } else if (step === 6 && code === 250) {
          command('DATA')
          step = 7
        } else if (step === 7 && code === 354) {
          const headers = [
            `From: Website Contact <${user}>`,
            `To: ${to}`,
            `Reply-To: ${replyTo}`,
            `Subject: ${subject}`,
            'MIME-Version: 1.0',
            'Content-Type: text/plain; charset=UTF-8',
            '',
          ].join('\r\n')
          const body = text.replace(/^\./gm, '..')
          socket.write(`${headers}${body}\r\n.\r\n`)
          step = 8
        } else if (step === 8 && code === 250) {
          command('QUIT')
          step = 9
        } else if (step === 9 && code === 221) {
          finish()
        }
      }
    })
  })
}

export { handler }
