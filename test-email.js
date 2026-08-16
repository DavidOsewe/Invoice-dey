import 'dotenv/config';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendTest() {
  const { data, error } = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'osewe.davidson@gmail.com', // Replace with your Resend email
    subject: 'Hello World',
    html: '<p>Testing Resend via onboarding address!</p>',
  });

  if (error) {
    console.error(error);
  } else {
    console.log('Success:', data);
  }
}

sendTest();