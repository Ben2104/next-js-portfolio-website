import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactRequestBody {
    name: string;
    email: string;
    message: string;
}

export async function POST(request: Request) {
    try {
        const body = await request.json() as ContactRequestBody;
        
        // Validate form data
        if (!body.name || !body.email || !body.message) {
            return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
        }
        
        // Create email transporter
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_APP_PASSWORD,
            },
        });
        
        // Email content
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: "dohoangkhoi341@gmail.com",
            replyTo: body.email,
            subject: `New Contact from ${body.name} - Portfolio Website`,
            html: `
                <h2>You have a new contact form submission</h2>
                <p><strong>Name:</strong> ${body.name}</p>
                <p><strong>Email:</strong> ${body.email}</p>
                <p><strong>Message:</strong></p>
                <p>${body.message.replace(/\n/g, '<br>')}</p>
            `,
        };
        
        // Send email
        await transporter.sendMail(mailOptions);
        
        return NextResponse.json({ message: "Message sent successfully!" }, {
            status: 200
        });
    } catch (error) {
        console.error("Email error:", error);
        const errorMessage = error instanceof Error ? error.message : 'Failed to send message';
        return NextResponse.json({
            message: errorMessage
        }, {
            status: 500
        });
    }
}