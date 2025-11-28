// app/api/contact/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Create transporter (configure with your email service)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Use App Password for Gmail
      },
    });

    // Email to you
    const mailOptionsToYou = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0f1824; color: #e2e8f0; padding: 20px; border-radius: 12px; border: 1px solid #1a2332;">
          <h2 style="color: #4a9eff; margin-bottom: 20px;">New Contact Form Submission</h2>
          <div style="background: #0a0f1a; padding: 20px; border-radius: 8px; border: 1px solid #1a2332;">
            <p><strong style="color: #4a9eff;">Name:</strong> ${name}</p>
            <p><strong style="color: #4a9eff;">Email:</strong> ${email}</p>
            <p><strong style="color: #4a9eff;">Subject:</strong> ${subject}</p>
            <p><strong style="color: #4a9eff;">Message:</strong></p>
            <div style="background: #0f1824; padding: 15px; border-radius: 4px; margin-top: 10px; border: 1px solid #1a2332;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #64748b; margin-top: 20px; font-size: 12px;">
            This message was sent from your portfolio contact form.
          </p>
        </div>
      `,
    };

    // Auto-reply
    const autoReplyOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thanks for reaching out! - Khushi Pal',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0f1824; color: #e2e8f0; padding: 20px; border-radius: 12px; border: 1px solid #1a2332;">
          <h2 style="color: #4a9eff; margin-bottom: 20px;">Thank You for Contacting Me!</h2>
          <p>Hi ${name},</p>
          <p>I've received your message and will get back to you as soon as possible.</p>
          <p>Here's a copy of your message for your records:</p>
          <div style="background: #0a0f1a; padding: 15px; border-radius: 4px; margin: 15px 0; border: 1px solid #1a2332;">
            <p><strong style="color: #4a9eff;">Subject:</strong> ${subject}</p>
            <p><strong style="color: #4a9eff;">Message:</strong></p>
            <div style="background: #0f1824; padding: 10px; border-radius: 4px; margin-top: 10px; border: 1px solid #1a2332;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #64748b; margin-top: 20px;">
            Best regards,<br>
            <strong style="color: #4a9eff;">Khushi Pal</strong><br>
            Full Stack Developer
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptionsToYou);
    await transporter.sendMail(autoReplyOptions);

    return NextResponse.json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { message: 'Error sending message' },
      { status: 500 }
    );
  }
}