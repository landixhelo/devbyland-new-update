import nodemailer from "nodemailer";
import { env, smtpConfigured } from "./env.js";

export type ContactPayload = {
  name: string;
  email: string;
  subject?: string;
  service: string;
  message: string;
};

export async function sendContactEmail(payload: ContactPayload): Promise<void> {
  if (!smtpConfigured()) {
    if (!env.isProd) {
      console.log("[dev] SMTP not configured — contact payload:", payload);
      return;
    }
    throw new Error("SMTP is not configured");
  }

  const transporter = nodemailer.createTransport({
    host: env.SMTP_HOST,
    port: env.SMTP_PORT,
    secure: env.SMTP_SECURE,
    auth: {
      user: env.SMTP_USER,
      pass: env.SMTP_PASS,
    },
  });

  const subjectLine =
    payload.subject?.trim() ||
    `Kontakt i ri: ${payload.service} — ${payload.name}`;

  await transporter.sendMail({
    from: env.CONTACT_FROM,
    to: env.CONTACT_TO,
    replyTo: payload.email,
    subject: subjectLine,
    text: [
      `Emri: ${payload.name}`,
      `Email: ${payload.email}`,
      `Shërbimi: ${payload.service}`,
      `Subjekti: ${payload.subject || "-"}`,
      "",
      "Mesazhi:",
      payload.message,
    ].join("\n"),
    html: `
      <h2>Mesazh i ri nga faqja</h2>
      <p><strong>Emri:</strong> ${escapeHtml(payload.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
      <p><strong>Shërbimi:</strong> ${escapeHtml(payload.service)}</p>
      <p><strong>Subjekti:</strong> ${escapeHtml(payload.subject || "-")}</p>
      <p><strong>Mesazhi:</strong></p>
      <p>${escapeHtml(payload.message).replace(/\n/g, "<br>")}</p>
    `,
  });
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
