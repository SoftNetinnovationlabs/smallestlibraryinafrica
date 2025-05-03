import { Resend } from 'resend';
import dotenv from 'dotenv';
dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (to, subject, html) => {
  return await resend.emails.send({
    from: 'Smallest Library in Africa <noreply@smallestlibraryinafrica.org>',
    to,
    subject,
    html,
  });
};
