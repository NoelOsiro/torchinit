import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer';

// Handles POST requests to /api
const username = process.env.NEXT_PUBLIC_EMAIL_USERNAME;
const password = process.env.NEXT_EMAIL_PASSWORD;
const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;

export async function POST(request: Request) {

    //get body of request
    const formData = await request.json();
    const { name, email, message } = formData;


    // create transporter object
    const transporter = nodemailer.createTransport({
        host: "5.135.108.190",
        port: 465,
        tls: { rejectUnauthorized: false },
        auth: {
            user: username,
            pass: password
        }
    } as nodemailer.TransportOptions);

    try {

        const mail = await transporter.sendMail({
            from: email,
            to: myEmail,
            replyTo: email,
            subject: `Website activity from ${email}`,
            html: `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body {font-family: Arial, Helvetica, sans-serif;}
                    .container {padding: 20px;}
                    .header {background-color: #f8f8f8; padding: 10px; text-align: center;}
                    .content {margin-top: 20px;}
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h2>Website Activity</h2>
                    </div>
                    <div class="content">
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Message:</strong> ${message}</p>
                    </div>
                </div>
            </body>
            </html>
            `,
        })

        return NextResponse.json({ message: "Success: email was sent" })

    } catch (error) {
        console.log(error)
        NextResponse.json({ message: "COULD NOT SEND MESSAGE" }, { status: 500 })
    }


}