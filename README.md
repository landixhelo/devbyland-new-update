# DevByLand Full-Stack

React + Express website for DevByLand agency. Backend handles the contact form (email via SMTP).

## Stack
- **Frontend:** React + Vite + TypeScript + React Router
- **Backend:** Express + Zod + Helmet + rate limiting
- **Email:** Nodemailer (SMTP)

## Quick start

### 1) Install
```bash
npm install
cd server && npm install && cd ..
cd client && npm install && cd ..
```

### 2) Server env
```bash
cd server
cp .env.example .env
```

Fill SMTP credentials in `server/.env` for real email delivery. Without SMTP, in development the API logs the contact payload and still returns success.

### 3) Run
From root:
```bash
npm run dev
```

- App: http://localhost:5173
- API: http://localhost:5000
- Health: http://localhost:5000/api/health

## Contact API
`POST /api/contact`

```json
{
  "name": "Landi",
  "email": "you@example.com",
  "subject": "Website i ri",
  "service": "Web Development",
  "message": "Dua një website për biznesin tim.",
  "terms": true
}
```

## Legacy
Static HTML pages remain in the repo root as reference (`index.html`, `projects.html`, etc.).
