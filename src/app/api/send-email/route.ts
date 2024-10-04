import nodemailer from 'nodemailer'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { name, email, phone, website, message } = await req.json()

  if (!name || !email || !phone || !website || !message) {
    return NextResponse.json({ error: 'Missing required fields' })
  }

  const mailOptions = {
    from: `Mason Boost Website Inquiry <${process.env.SMTP_USERNAME}>`,
    to: 'edwardlomat1503@gmail.com',
    replyTo: email,
    subject: `New inquiry from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nWebsite: ${website}\nMessage: ${message}`,
    html: `
        <html>
            <body style="font-family: Arial, sans-serif; line-height: 1.6;">
                <h2>New Inquiry from ${name}</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Website:</strong> ${website}</p>
                <h3>Message:</h3>
                <p style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;">${message}</p>
            </body>
        </html>
    `,
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false, // This can help with self-signed certificates, remove if not needed
    },
  })

  try {
    const info = await transporter.sendMail(mailOptions)
    return NextResponse.json(
      {
        success: `Message delivered to ${info.accepted}`,
      },
      { status: 200 },
    )
  } catch (err) {
    const errorMessage = (err as Error).message || 'Unknown error occurred'
    return NextResponse.json(
      {
        error: `Error sending email: ${errorMessage}`,
      },
      { status: 500 },
    )
  }
}
