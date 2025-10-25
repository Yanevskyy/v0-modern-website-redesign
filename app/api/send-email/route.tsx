import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Force Node.js runtime (required for nodemailer)
export const runtime = "nodejs"

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json()
    const { name, email, phone, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, and message are required" },
        { status: 400 },
      )
    }

    // Validate email format
    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Check environment variables
    const mailFrom = process.env.MAIL_FROM
    const smtpPass = process.env.SMTP_PASS
    const adminEmail = process.env.ADMIN_EMAIL

    if (!mailFrom || !smtpPass || !adminEmail) {
      console.error("Missing environment variables:", {
        MAIL_FROM: !!mailFrom,
        SMTP_PASS: !!smtpPass,
        ADMIN_EMAIL: !!adminEmail,
      })
      return NextResponse.json(
        { error: "Email service is not configured. Please contact the administrator." },
        { status: 503 },
      )
    }

    // Create nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: "smtppro.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: mailFrom,
        pass: smtpPass,
      },
    })

    // Client email template (confirmation)
    const clientEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f5f5f5; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
            .header { background-color: #923d8f; padding: 30px 20px; text-align: center; }
            .header h1 { color: #ffffff; margin: 0; font-size: 24px; }
            .content { padding: 30px 20px; }
            .content p { margin: 0 0 15px 0; color: #555; }
            .footer { background-color: #f8f8f8; padding: 20px; text-align: center; border-top: 1px solid #e0e0e0; }
            .footer p { margin: 5px 0; font-size: 14px; color: #777; }
            .logo { width: 120px; height: auto; margin-bottom: 10px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Thank You for Your Enquiry!</h1>
            </div>
            <div class="content">
              <p>Dear ${name},</p>
              <p>Thank you for contacting Kieran Kelly Dance. We have received your enquiry and will get back to you as soon as possible.</p>
              <p>We appreciate your interest in our dance classes and look forward to speaking with you soon.</p>
              <p>Best regards,<br><strong>Kieran Kelly Dance Team</strong></p>
            </div>
            <div class="footer">
              <p><strong>Kieran Kelly Dance</strong></p>
              <p>Phone: +353 87 741 4968</p>
              <p>Email: kierankellydance@gmail.com</p>
              <p>Website: kierankellydance.com</p>
            </div>
          </div>
        </body>
      </html>
    `

    // Admin email template (notification)
    const adminEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f5f5f5; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
            .header { background-color: #923d8f; padding: 20px; text-align: center; }
            .header h1 { color: #ffffff; margin: 0; font-size: 22px; }
            .content { padding: 20px; }
            table { width: 100%; border-collapse: collapse; margin: 20px 0; }
            th { background-color: #f0f0f0; padding: 12px; text-align: left; border: 1px solid #ddd; font-weight: bold; }
            td { padding: 12px; border: 1px solid #ddd; }
            .footer { background-color: #f8f8f8; padding: 15px; text-align: center; border-top: 1px solid #e0e0e0; font-size: 12px; color: #777; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Contact Form Submission</h1>
            </div>
            <div class="content">
              <p>You have received a new enquiry from your website:</p>
              <table>
                <tr>
                  <th>Field</th>
                  <th>Value</th>
                </tr>
                <tr>
                  <td><strong>Name</strong></td>
                  <td>${name}</td>
                </tr>
                <tr>
                  <td><strong>Email</strong></td>
                  <td><a href="mailto:${email}">${email}</a></td>
                </tr>
                <tr>
                  <td><strong>Phone</strong></td>
                  <td>${phone || "Not provided"}</td>
                </tr>
                <tr>
                  <td><strong>Message</strong></td>
                  <td>${message}</td>
                </tr>
                <tr>
                  <td><strong>Date & Time</strong></td>
                  <td>${new Date().toLocaleString("en-IE", { timeZone: "Europe/Dublin" })}</td>
                </tr>
              </table>
            </div>
            <div class="footer">
              <p>This email was sent from Kieran Kelly Dance website contact form</p>
            </div>
          </div>
        </body>
      </html>
    `

    // Send email to client (confirmation)
    await transporter.sendMail({
      from: `"Kieran Kelly Dance" <${mailFrom}>`,
      to: email,
      subject: "Thank You for Your Enquiry - Kieran Kelly Dance",
      html: clientEmailHtml,
    })

    // Send email to admin (notification)
    await transporter.sendMail({
      from: `"Website Contact Form" <${mailFrom}>`,
      to: adminEmail,
      subject: `New Contact Form Submission from ${name}`,
      html: adminEmailHtml,
      replyTo: email,
    })

    return NextResponse.json({ message: "Email sent successfully" })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email. Please try again later." }, { status: 500 })
  }
}
