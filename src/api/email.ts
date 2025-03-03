'use server';

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.NEXT_PUBLIC_GMAIL_USER,
    pass: process.env.NEXT_PUBLIC_GMAIL_APP_KEY,
  },
});

export const sendEmail = async (email: string) => {
  try {
    await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_GMAIL_USER,
      to: email,
      subject: 'TEST',
      html: `<p>테스트입니다.</p>`,
    });

    return { message: '이메일 전송 성공' };
  } catch (error) {
    console.error(error.message);
  }
};
