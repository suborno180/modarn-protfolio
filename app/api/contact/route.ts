import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, location, budget, subject, message } = await request.json();

    // Basic validation
    if (!name || !email || !location || !budget || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Get environment variables
    const businessEmail = process.env.BUSINESS_EMAIL || 'amiliya177@gmail.com';
    const adminEmail = process.env.ADMIN_EMAIL || 'subornon100@gmail.com';
    const businessName = process.env.BUSINESS_NAME || 'Dinesh Fernando';
    const businessTitle = process.env.BUSINESS_TITLE || 'Industrial Engineering Specialist';

    // Use admin email for testing, business email for production
    const recipientEmail = process.env.NODE_ENV === 'production' ? businessEmail : adminEmail;

    // Send notification to business
    const { data, error } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: [recipientEmail],
      subject: `New Project: ${subject}`,
      replyTo: email,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              * { margin: 0; padding: 0; box-sizing: border-box; }
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; background: #f8fafc; padding: 10px; }
              .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
              .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 24px 20px; text-align: center; }
              .header h1 { font-size: 20px; font-weight: 600; margin-bottom: 4px; }
              .header p { font-size: 14px; opacity: 0.9; }
              .content { padding: 24px 20px; }
              .field { margin-bottom: 16px; padding-bottom: 16px; border-bottom: 1px solid #e2e8f0; }
              .field:last-child { border-bottom: none; margin-bottom: 0; }
              .label { font-size: 12px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
              .value { font-size: 14px; color: #1e293b; font-weight: 500; }
              .message { background: #f1f5f9; padding: 16px; border-radius: 8px; margin: 16px 0; }
              .footer { background: #f8fafc; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0; }
              .footer p { font-size: 12px; color: #64748b; margin-bottom: 4px; }
              .badge { display: inline-block; padding: 4px 8px; background: #10b981; color: white; border-radius: 6px; font-size: 10px; font-weight: 600; margin-left: 8px; }
              @media (max-width: 480px) {
                .content { padding: 20px 16px; }
                .header { padding: 20px 16px; }
                .header h1 { font-size: 18px; }
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>📋 New Project Inquiry</h1>
                <p>${businessName} - ${businessTitle}</p>
              </div>
              
              <div class="content">
                <div class="field">
                  <div class="label">Client Information</div>
                  <div class="value">${name} • ${email}</div>
                </div>
                
                <div class="field">
                  <div class="label">Project Details</div>
                  <div class="value">${subject} • ${budget}</div>
                </div>
                
                <div class="field">
                  <div class="label">Location</div>
                  <div class="value">${location}</div>
                </div>
                
                <div class="message">
                  <div class="label">Project Requirements</div>
                  <div class="value" style="white-space: pre-wrap; margin-top: 8px;">${message}</div>
                </div>
                
                <div class="field">
                  <div class="label">Status</div>
                  <div class="value">
                    New Inquiry
                    ${process.env.NODE_ENV !== 'production' ? '<span class="badge">TEST</span>' : ''}
                  </div>
                </div>
              </div>
              
              <div class="footer">
                <p>🕒 Received: ${new Date().toLocaleString()}</p>
                <p>📍 Sent from portfolio contact form</p>
                <p>💬 Reply to: ${email}</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    // Send confirmation to client
    await resend.emails.send({
      from: `${businessName} <onboarding@resend.dev>`,
      to: [email],
      subject: 'Thank you for your inquiry',
      replyTo: businessEmail,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              * { margin: 0; padding: 0; box-sizing: border-box; }
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; background: #f8fafc; padding: 10px; }
              .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
              .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 24px 20px; text-align: center; }
              .header h1 { font-size: 20px; font-weight: 600; margin-bottom: 8px; }
              .content { padding: 24px 20px; }
              .greeting { font-size: 16px; color: #1e293b; margin-bottom: 16px; }
              .message { background: #f1f5f9; padding: 16px; border-radius: 8px; margin: 16px 0; }
              .steps { margin: 20px 0; }
              .step { display: flex; align-items: flex-start; margin-bottom: 12px; }
              .step-number { background: #667eea; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 600; margin-right: 12px; flex-shrink: 0; }
              .step-text { font-size: 14px; color: #475569; }
              .contact { background: #f0f9ff; padding: 16px; border-radius: 8px; margin: 16px 0; border-left: 4px solid #0ea5e9; }
              .footer { background: #f8fafc; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0; }
              .footer p { font-size: 12px; color: #64748b; margin-bottom: 4px; }
              @media (max-width: 480px) {
                .content { padding: 20px 16px; }
                .header { padding: 20px 16px; }
                .header h1 { font-size: 18px; }
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Thank You, ${name}!</h1>
                <p>${businessName} • ${businessTitle}</p>
              </div>
              
              <div class="content">
                <div class="greeting">
                  Thank you for your interest in my industrial engineering services. I've received your project details and will review them carefully.
                </div>
                
                <div class="message">
                  <strong>Project:</strong> ${subject}<br>
                  <strong>Budget:</strong> ${budget}<br>
                  <strong>Location:</strong> ${location}
                </div>
                
                <div class="steps">
                  <div class="step">
                    <div class="step-number">1</div>
                    <div class="step-text">I'll review your requirements within 2-4 hours</div>
                  </div>
                  <div class="step">
                    <div class="step-number">2</div>
                    <div class="step-text">Initial assessment and feasibility analysis</div>
                  </div>
                  <div class="step">
                    <div class="step-number">3</div>
                    <div class="step-text">Detailed proposal with timeline and costs</div>
                  </div>
                </div>
                
                <div class="contact">
                  <strong>📞 Direct Contact</strong><br>
                  Email: ${businessEmail}<br>
                  Phone: +94 76 315 5822<br>
                  Response: 2-4 hours (Business days)
                </div>
              </div>
              
              <div class="footer">
                <p>Best regards,</p>
                <p><strong>${businessName}</strong></p>
                <p>${businessTitle}</p>
                <p style="margin-top: 12px;">📍 Negombo, Sri Lanka • 🌍 Available Globally</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Email sent successfully',
        testMode: process.env.NODE_ENV !== 'production'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}