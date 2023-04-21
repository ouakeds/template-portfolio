import type { NextApiRequest, NextApiResponse } from "next";
import { sendEmail } from "../../lib/email";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message } = req.body;
  
  try {
    const response = await sendEmail({
      to: process.env.SMTP_FROM_EMAIL ?? '',
      subject: "Site Vitrine - Nouveau Message",
      html: `<div><h1>Message reçu</h1><h2>Name:<br/> ${name}</h2><h2>Email:<br/> ${email}</h2><h2>Message:<br/> ${message}</h2></div>`
    });
  } catch (error) {
    return res.status(400).json({ message: "Error during mail submit." });
  }

  return res.status(200).json({
    message: "Email sent successfully"
  });
}