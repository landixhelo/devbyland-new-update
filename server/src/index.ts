import express from "express";
import cors from "cors";
import helmet from "helmet";
import hpp from "hpp";
import rateLimit from "express-rate-limit";
import { env } from "./env.js";
import contactRoutes from "./routes/contact.js";

const app = express();

app.set("trust proxy", 1);

app.use(
  helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" },
  })
);
app.use(hpp());
app.use(
  cors({
    origin: env.CLIENT_ORIGIN,
    credentials: true,
  })
);
app.use(express.json({ limit: "50kb" }));
app.use(express.urlencoded({ extended: false, limit: "50kb" }));

app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: env.isProd ? 400 : 2000,
    standardHeaders: true,
    legacyHeaders: false,
  })
);

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, service: "devbyland-api" });
});

app.use("/api/contact", contactRoutes);

app.use((_req, res) => {
  res.status(404).json({ ok: false, error: "Not found" });
});

app.listen(env.PORT, () => {
  console.log(`DevByLand API on http://localhost:${env.PORT}`);
});
