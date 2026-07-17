import { Router } from "express";
import rateLimit from "express-rate-limit";
import { z } from "zod";
import { sendContactEmail } from "../mail.js";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(200),
  subject: z.string().trim().max(200).optional().or(z.literal("")),
  service: z.string().trim().min(1).max(100),
  message: z.string().trim().min(10).max(5000),
  terms: z.literal(true),
});

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 8,
  standardHeaders: true,
  legacyHeaders: false,
  message: { ok: false, error: "Shumë kërkesa. Provo përsëri më vonë." },
});

const router = Router();

router.post("/", contactLimiter, async (req, res) => {
  const parsed = contactSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({
      ok: false,
      error: "Të dhënat e formularit nuk janë valide.",
      details: parsed.error.flatten().fieldErrors,
    });
  }

  try {
    const { terms: _terms, ...payload } = parsed.data;
    await sendContactEmail({
      ...payload,
      subject: payload.subject || undefined,
    });
    return res.json({ ok: true, message: "Mesazhi u dërgua me sukses." });
  } catch (err) {
    console.error("Contact email failed:", err);
    return res.status(500).json({
      ok: false,
      error: "Dërgimi dështoi. Provo përsëri ose na shkruaj në email.",
    });
  }
});

export default router;
