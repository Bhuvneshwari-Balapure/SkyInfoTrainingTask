import nodemailer from "nodemailer";
import asyncHandler from "express-async-handler";

const sendEmail = asyncHandler(async (data) => {
  try {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAIL_ID,
        pass: process.env.MAIL_PASS,
      },
    });

    let info = await transporter.sendMail({
      from: "Hey <abc@.com>",
      to: data.to,
      subject: data.subject,
      text: data.text,
      html: data.html,
    });
    console.log("Email sent: " + info.response);
  } catch (error) {
    console.error("Error sending email", error);
    throw new Error(error);
  }
});

export default sendEmail;
