import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Force Node.js runtime (required for nodemailer)
export const runtime = "nodejs"

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Admin email template
function getAdminEmailTemplate(data: {
  name: string
  email: string
  phone: string
  message: string
  timestamp: string
}) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 20px;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <!-- Header -->
                <tr>
                  <td style="background-color: #1e293b; padding: 30px; text-align: center;">
                    <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: bold;">New Contact Form Submission</h1>
                  </td>
                </tr>
                
                <!-- Content -->
                <tr>
                  <td style="padding: 40px 30px;">
                    <p style="margin: 0 0 20px 0; color: #334155; font-size: 16px;">You have received a new inquiry from your website:</p>
                    
                    <table width="100%" cellpadding="0" cellspacing="0" style="border: 1px solid #e2e8f0; border-radius: 6px; overflow: hidden;">
                      <tr>
                        <td style="padding: 12px 16px; background-color: #f8fafc; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569; width: 30%;">Name</td>
                        <td style="padding: 12px 16px; background-color: #ffffff; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${data.name}</td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 16px; background-color: #f8fafc; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Email</td>
                        <td style="padding: 12px 16px; background-color: #ffffff; border-bottom: 1px solid #e2e8f0; color: #1e293b;"><a href="mailto:${data.email}" style="color: #923d8f; text-decoration: none;">${data.email}</a></td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 16px; background-color: #f8fafc; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Phone</td>
                        <td style="padding: 12px 16px; background-color: #ffffff; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${data.phone || "Not provided"}</td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 16px; background-color: #f8fafc; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Date</td>
                        <td style="padding: 12px 16px; background-color: #ffffff; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${data.timestamp}</td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 16px; background-color: #f8fafc; font-weight: bold; color: #475569; vertical-align: top;">Message</td>
                        <td style="padding: 12px 16px; background-color: #ffffff; color: #1e293b; white-space: pre-wrap;">${data.message}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <!-- Footer -->
                <tr>
                  <td style="background-color: #f8fafc; padding: 20px 30px; text-align: center; border-top: 1px solid #e2e8f0;">
                    <p style="margin: 0; color: #64748b; font-size: 14px;">This email was sent from your website contact form</p>
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

// Customer auto-reply template
function getCustomerEmailTemplate(name: string) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You for Your Inquiry</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 20px;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <!-- Header -->
                <tr>
                  <td style="background-color: #923d8f; padding: 30px; text-align: center;">
                    <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: bold;">Thank You for Your Inquiry!</h1>
                  </td>
                </tr>
                
                <!-- Content -->
                <tr>
                  <td style="padding: 40px 30px;">
                    <p style="margin: 0 0 20px 0; color: #1e293b; font-size: 16px;">Dear ${name},</p>
                    
                    <p style="margin: 0 0 20px 0; color: #334155; font-size: 16px; line-height: 1.6;">
                      Thank you for contacting Kieran Kelly Dance! We have received your message and appreciate your interest in our dance classes and events.
                    </p>
                    
                    <p style="margin: 0 0 20px 0; color: #334155; font-size: 16px; line-height: 1.6;">
                      Our team will review your inquiry and get back to you as soon as possible, typically within 24-48 hours.
                    </p>
                    
                    <p style="margin: 0 0 30px 0; color: #334155; font-size: 16px; line-height: 1.6;">
                      In the meantime, feel free to explore our website to learn more about our dance styles, upcoming events, and class schedules.
                    </p>
                    
                    <div style="background-color: #f8fafc; border-left: 4px solid #923d8f; padding: 20px; margin: 30px 0;">
                      <p style="margin: 0 0 10px 0; color: #1e293b; font-size: 14px; font-weight: bold;">Contact Information:</p>
                      <p style="margin: 0 0 5px 0; color: #475569; font-size: 14px;">Phone: <a href="tel:+353877414968" style="color: #923d8f; text-decoration: none;">+353 87 741 4968</a></p>
                      <p style="margin: 0 0 5px 0; color: #475569; font-size: 14px;">Email: <a href="mailto:kierankellydance@gmail.com" style="color: #923d8f; text-decoration: none;">kierankellydance@gmail.com</a></p>
                      <p style="margin: 0; color: #475569; font-size: 14px;">Website: <a href="https://kierankellydance.ie" style="color: #923d8f; text-decoration: none;">kierankellydance.ie</a></p>
                    </div>
                    
                    <p style="margin: 0; color: #334155; font-size: 16px;">
                      Best regards,<br>
                      <strong style="color: #1e293b;">Kieran Kelly Dance Team</strong>
                    </p>
                  </td>
                </tr>
                
                <!-- Footer -->
                <tr>
                  <td style="background-color: #f8fafc; padding: 20px 30px; text-align: center; border-top: 1px solid #e2e8f0;">
                    <p style="margin: 0 0 10px 0; color: #64748b; font-size: 14px;">Follow us on social media</p>
                    <p style="margin: 0; color: #64748b; font-size: 12px;">This is an automated confirmation email. Please do not reply directly to this message.</p>
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

    console.log("[v0] Received contact form submission:", { name, email, phone: phone ? "provided" : "not provided" })

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
    const smtpHost = process.env.SMTP_HOST
    const smtpPort = process.env.SMTP_PORT
    const smtpPassword = process.env.SMTP_PASSWORD
    const adminEmail = process.env.ADMIN_EMAIL
    const mailFrom = process.env.MAIL_FROM

    console.log("[v0] Environment variables check:", {
      smtpHost: smtpHost ? "set" : "MISSING",
      smtpPort: smtpPort ? "set" : "MISSING",
      smtpPassword: smtpPassword ? "set" : "MISSING",
      adminEmail: adminEmail ? "set" : "MISSING",
      mailFrom: mailFrom ? "set" : "MISSING",
    })

    if (!smtpHost || !smtpPort || !smtpPassword || !adminEmail || !mailFrom) {
      console.error("[v0] Missing email configuration environment variables")
      return NextResponse.json(
        {
          error:
            "Email service is not configured. Please set up the required environment variables: SMTP_HOST, SMTP_PORT, SMTP_PASSWORD, ADMIN_EMAIL, MAIL_FROM",
        },
        { status: 503 },
      )
    }

    const transportConfig = {
      host: smtpHost,
      port: Number.parseInt(smtpPort, 10),
      secure: true,
      auth: {
        user: mailFrom,
        pass: smtpPassword,
      },
    }

    console.log("[v0] Creating transporter with config:", {
      host: transportConfig.host,
      port: transportConfig.port,
      secure: transportConfig.secure,
      user: transportConfig.auth.user,
    })

    let transporter
    try {
      transporter = nodemailer.createTransport(transportConfig)
      console.log("[v0] Transporter created successfully")
    } catch (error) {
      console.error("[v0] Failed to create transporter:", error)
      return NextResponse.json({ error: "Failed to initialize email service" }, { status: 500 })
    }

    // Prepare email data
    const timestamp = new Date().toLocaleString("en-IE", {
      timeZone: "Europe/Dublin",
      dateStyle: "full",
      timeStyle: "short",
    })

    const emailData = {
      name,
      email,
      phone: phone || "",
      message,
      timestamp,
    }

    // Send admin notification email
    console.log("[v0] Sending admin notification email...")
    try {
      await transporter.sendMail({
        from: `"Kieran Kelly Dance Website" <${mailFrom}>`,
        to: adminEmail,
        subject: `New Contact Form Submission from ${name}`,
        html: getAdminEmailTemplate(emailData),
      })
      console.log("[v0] Admin email sent successfully")
    } catch (error) {
      console.error("[v0] Failed to send admin email:", error)
      throw new Error("Failed to send admin notification email")
    }

    // Send customer auto-reply
    console.log("[v0] Sending customer auto-reply email...")
    try {
      await transporter.sendMail({
        from: `"Kieran Kelly Dance" <${mailFrom}>`,
        to: email,
        subject: "Thank You for Your Inquiry - Kieran Kelly Dance",
        html: getCustomerEmailTemplate(name),
      })
      console.log("[v0] Customer email sent successfully")
    } catch (error) {
      console.error("[v0] Failed to send customer email:", error)
      throw new Error("Failed to send customer confirmation email")
    }

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("[v0] Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email. Please try again later." }, { status: 500 })
  }
}
