// Force Node.js runtime for nodemailer compatibility
export const runtime = "nodejs"

import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Client email template
function getClientEmailTemplate(name: string, email: string, phone: string, message: string): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Thank you for your message</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
      <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f5f5f5;">
        <tr>
          <td style="padding: 40px 20px;">
            <table role="presentation" style="width: 600px; max-width: 100%; margin: 0 auto; background-color: #ffffff; border-collapse: collapse; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
              <!-- Header -->
              <tr>
                <td style="padding: 40px 40px 30px; text-align: center; background-color: #923d8f;">
                  <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 600;">Thank you for your message</h1>
                </td>
              </tr>
              
              <!-- Content -->
              <tr>
                <td style="padding: 40px;">
                  <p style="margin: 0 0 20px; color: #333333; font-size: 16px; line-height: 1.6;">
                    Dear ${name},
                  </p>
                  <p style="margin: 0 0 30px; color: #333333; font-size: 16px; line-height: 1.6;">
                    Thank you for contacting Kieran Kelly Dance. We have received your message and will get back to you as soon as possible.
                  </p>
                  
                  <!-- Data Table -->
                  <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
                    <tr>
                      <td colspan="2" style="padding: 15px; background-color: #f8f8f8; border: 1px solid #e0e0e0;">
                        <strong style="color: #333333; font-size: 16px;">Your Message Details</strong>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 12px 15px; border: 1px solid #e0e0e0; background-color: #fafafa; width: 30%; color: #666666; font-size: 14px;">
                        <strong>Name:</strong>
                      </td>
                      <td style="padding: 12px 15px; border: 1px solid #e0e0e0; background-color: #ffffff; color: #333333; font-size: 14px;">
                        ${name}
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 12px 15px; border: 1px solid #e0e0e0; background-color: #fafafa; color: #666666; font-size: 14px;">
                        <strong>Email:</strong>
                      </td>
                      <td style="padding: 12px 15px; border: 1px solid #e0e0e0; background-color: #ffffff; color: #333333; font-size: 14px;">
                        ${email}
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 12px 15px; border: 1px solid #e0e0e0; background-color: #fafafa; color: #666666; font-size: 14px;">
                        <strong>Phone:</strong>
                      </td>
                      <td style="padding: 12px 15px; border: 1px solid #e0e0e0; background-color: #ffffff; color: #333333; font-size: 14px;">
                        ${phone}
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 12px 15px; border: 1px solid #e0e0e0; background-color: #fafafa; color: #666666; font-size: 14px; vertical-align: top;">
                        <strong>Message:</strong>
                      </td>
                      <td style="padding: 12px 15px; border: 1px solid #e0e0e0; background-color: #ffffff; color: #333333; font-size: 14px;">
                        ${message}
                      </td>
                    </tr>
                  </table>
                  
                  <p style="margin: 0; color: #666666; font-size: 14px; line-height: 1.6;">
                    Best regards,<br>
                    <strong style="color: #923d8f;">Kieran Kelly Dance</strong>
                  </p>
                </td>
              </tr>
              
              <!-- Footer -->
              <tr>
                <td style="padding: 30px 40px; background-color: #1a1a1a; text-align: center;">
                  <div style="margin-bottom: 15px;">
                    <img src="https://kierankellydance.com/logo.png" alt="Kieran Kelly Dance" style="height: 40px; width: auto;" />
                  </div>
                  <p style="margin: 0 0 10px; color: #ffffff; font-size: 14px;">
                    <strong>Kieran Kelly Dance</strong>
                  </p>
                  <p style="margin: 0 0 5px; color: #cccccc; font-size: 13px;">
                    Phone: <a href="tel:+353877414968" style="color: #923d8f; text-decoration: none;">+353 87 741 4968</a>
                  </p>
                  <p style="margin: 0 0 5px; color: #cccccc; font-size: 13px;">
                    Email: <a href="mailto:kierankellydance@gmail.com" style="color: #923d8f; text-decoration: none;">kierankellydance@gmail.com</a>
                  </p>
                  <p style="margin: 0; color: #cccccc; font-size: 13px;">
                    Website: <a href="https://kierankellydance.com" style="color: #923d8f; text-decoration: none;">kierankellydance.com</a>
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `
}

// Admin email template
function getAdminEmailTemplate(name: string, email: string, phone: string, message: string): string {
  const currentDate = new Date().toLocaleString("en-IE", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Europe/Dublin",
  })

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New message from website form</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
      <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f5f5f5;">
        <tr>
          <td style="padding: 40px 20px;">
            <table role="presentation" style="width: 600px; max-width: 100%; margin: 0 auto; background-color: #ffffff; border-collapse: collapse; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
              <!-- Header -->
              <tr>
                <td style="padding: 40px 40px 30px; text-align: center; background-color: #1a1a1a;">
                  <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 600;">New Message from Website Form</h1>
                </td>
              </tr>
              
              <!-- Content -->
              <tr>
                <td style="padding: 40px;">
                  <p style="margin: 0 0 30px; color: #333333; font-size: 16px; line-height: 1.6;">
                    You have received a new message from the Kieran Kelly Dance website contact form.
                  </p>
                  
                  <!-- Data Table -->
                  <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
                    <tr>
                      <td colspan="2" style="padding: 15px; background-color: #923d8f; border: 1px solid #923d8f;">
                        <strong style="color: #ffffff; font-size: 16px;">Contact Details</strong>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 12px 15px; border: 1px solid #e0e0e0; background-color: #fafafa; width: 30%; color: #666666; font-size: 14px;">
                        <strong>Name:</strong>
                      </td>
                      <td style="padding: 12px 15px; border: 1px solid #e0e0e0; background-color: #ffffff; color: #333333; font-size: 14px;">
                        ${name}
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 12px 15px; border: 1px solid #e0e0e0; background-color: #fafafa; color: #666666; font-size: 14px;">
                        <strong>Email:</strong>
                      </td>
                      <td style="padding: 12px 15px; border: 1px solid #e0e0e0; background-color: #ffffff; color: #333333; font-size: 14px;">
                        <a href="mailto:${email}" style="color: #923d8f; text-decoration: none;">${email}</a>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 12px 15px; border: 1px solid #e0e0e0; background-color: #fafafa; color: #666666; font-size: 14px;">
                        <strong>Phone:</strong>
                      </td>
                      <td style="padding: 12px 15px; border: 1px solid #e0e0e0; background-color: #ffffff; color: #333333; font-size: 14px;">
                        <a href="tel:${phone.replace(/\s/g, "")}" style="color: #923d8f; text-decoration: none;">${phone}</a>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 12px 15px; border: 1px solid #e0e0e0; background-color: #fafafa; color: #666666; font-size: 14px; vertical-align: top;">
                        <strong>Message:</strong>
                      </td>
                      <td style="padding: 12px 15px; border: 1px solid #e0e0e0; background-color: #ffffff; color: #333333; font-size: 14px; white-space: pre-wrap;">
                        ${message}
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 12px 15px; border: 1px solid #e0e0e0; background-color: #fafafa; color: #666666; font-size: 14px;">
                        <strong>Date:</strong>
                      </td>
                      <td style="padding: 12px 15px; border: 1px solid #e0e0e0; background-color: #ffffff; color: #333333; font-size: 14px;">
                        ${currentDate}
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              
              <!-- Footer -->
              <tr>
                <td style="padding: 30px 40px; background-color: #f8f8f8; text-align: center; border-top: 3px solid #923d8f;">
                  <p style="margin: 0 0 5px; color: #333333; font-size: 14px;">
                    <strong>Kieran Kelly Dance</strong>
                  </p>
                  <p style="margin: 0; color: #666666; font-size: 13px;">
                    <a href="https://kierankellydance.com" style="color: #923d8f; text-decoration: none;">kierankellydance.com</a>
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `
}

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json()
    const { name, email, phone, message } = body

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Validate email format
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Check environment variables
    const mailFrom = process.env.MAIL_FROM
    const smtpPass = process.env.SMTP_PASS
    const adminEmail = process.env.ADMIN_EMAIL

    if (!mailFrom || !smtpPass || !adminEmail) {
      console.error("Missing environment variables:", {
        mailFrom: !!mailFrom,
        smtpPass: !!smtpPass,
        adminEmail: !!adminEmail,
      })
      return NextResponse.json(
        { error: "Email service is not configured. Please contact the administrator." },
        { status: 503 },
      )
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: "smtppro.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: mailFrom,
        pass: smtpPass,
      },
    })

    // Send email to client
    await transporter.sendMail({
      from: `"Kieran Kelly Dance" <${mailFrom}>`,
      to: email,
      subject: "Thank you for your message - Kieran Kelly Dance",
      html: getClientEmailTemplate(name, email, phone, message),
    })

    // Send email to admin
    await transporter.sendMail({
      from: `"Kieran Kelly Dance Website" <${mailFrom}>`,
      to: adminEmail,
      subject: `New Contact Form Message from ${name}`,
      html: getAdminEmailTemplate(name, email, phone, message),
      replyTo: email,
    })

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email. Please try again later." }, { status: 500 })
  }
}
