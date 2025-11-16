export const runtime = "nodejs";

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  console.log("API CONTACT ROUTE EXECUTED");

  try {
    const { name, email_phone, qualification, course, message } =
      await request.json();

    // Basic validation
    if (!name || !email_phone || !qualification || !course || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    const email = process.env.CONTACT_EMAIL;
    const pass = process.env.CONTACT_EMAIL_PASS;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user: email, pass },
    });

    await transporter.sendMail({
      from: email,
      to: email,
      subject: "New Contact Form Submission",
      text: `
Name: ${name}
Phone/Email: ${email_phone}
Qualification: ${qualification}
Course: ${course}

Message:
${message}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("MAIL ERROR:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
