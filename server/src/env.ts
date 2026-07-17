import "dotenv/config";

function required(name: string, fallback?: string): string {
  const value = process.env[name] ?? fallback;
  if (!value) {
    throw new Error(`Missing env: ${name}`);
  }
  return value;
}

export const env = {
  PORT: Number(process.env.PORT ?? 5000),
  CLIENT_ORIGIN: required("CLIENT_ORIGIN", "http://localhost:5173"),
  CONTACT_TO: required("CONTACT_TO", "devbyland@gmail.com"),
  CONTACT_FROM: required("CONTACT_FROM", "DevByLand <noreply@devbyland.com>"),
  SMTP_HOST: process.env.SMTP_HOST ?? "",
  SMTP_PORT: Number(process.env.SMTP_PORT ?? 587),
  SMTP_SECURE: (process.env.SMTP_SECURE ?? "false") === "true",
  SMTP_USER: process.env.SMTP_USER ?? "",
  SMTP_PASS: process.env.SMTP_PASS ?? "",
  isProd: process.env.NODE_ENV === "production",
};

export function smtpConfigured(): boolean {
  return Boolean(env.SMTP_HOST && env.SMTP_USER && env.SMTP_PASS);
}
