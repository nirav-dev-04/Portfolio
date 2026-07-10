# Portfolio — Nirav Mathukiya

Personal portfolio website built to showcase my projects, skills, and experience as a Java Backend Developer with AI integration capabilities.

🔗 **Live Site:** [nirav-mathukiya.vercel.app](https://nirav-mathukiya.vercel.app/)

---

## 🧑‍💻 About

I'm a final-year Computer Engineering student (LDRP-ITR, GTU) focused on backend development with Java & Spring Boot, with hands-on experience integrating AI/LLM capabilities into production systems. This portfolio is built with a "Systems Blueprint" design language — dark navy and amber tones reflecting an engineering, architecture-first mindset.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** Space Grotesk (headings), Inter (body)
- **Deployment:** Vercel
- **Version Control:** Git & GitHub

---

## ✨ Features

- Dark navy/amber themed UI with a distinct engineering aesthetic
- Dedicated case-study pages for each major project (`/work`)
- Downloadable resume (PDF)
- Certificates section (NPTEL, Internship)
- Fully responsive across devices
- Clean, minimal navigation focused on project depth over breadth

---

## 📁 Project Structure

```
Portfolio/
├── public/
│   ├── resume.pdf
│   ├── profile.png
│   ├── internship-certificate.pdf
│   ├── nptel-python-certificate.pdf
│   └── profile-ascii.txt
├── src/
│   ├── app/
│   │   ├── page.tsx          # Home page
│   │   ├── layout.tsx        # Root layout
│   │   ├── globals.css       # Global styles
│   │   └── work/              # Case study pages for each project
│   └── components/            # Reusable UI components
├── package.json
└── README.md
```

---

## 🚀 Featured Projects

### 1. Coursify — Full-Stack EdTech SaaS Platform
Next.js 14 + Spring Boot 3 + PostgreSQL + Redis (cache-aside) + AWS (S3, Lambda, MediaConvert, CloudFront) video pipeline, Razorpay payments with idempotency & pessimistic locking, JWT/httpOnly auth, Bucket4j rate limiting, Playwright E2E tests.
🔗 [Live](https://coursify-learn.vercel.app)

### 2. ExamShield — Real-Time Secure Exam Platform
Spring Boot 3 + React/Vite, WebSocket/STOMP for real-time proctoring, Bucket4j rate limiting, Flyway migrations.
🔗 [GitHub](https://github.com/nirav-dev-04/ExamShield)

### 3. Smart Hostel Management System
Spring Boot + Spring Security + JWT + Docker + Cloudinary, separate frontend/backend architecture.
🔗 [Live](https://hostel-managment-frontend.vercel.app)

### 4. Employee Handbook RAG Bot
Spring Boot + pgvector + Gemini + HuggingFace embeddings — a retrieval-augmented generation chatbot for internal document Q&A.

---

## 🏃 Running Locally

```bash
git clone https://github.com/nirav-dev-04/Portfolio.git
cd Portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📄 Resume

Download my latest resume [here](./public/resume.pdf).

---

## 📬 Contact

- **LinkedIn:** [linkedin.com/in/nirav-mathukiya-47b1752b3](https://www.linkedin.com/in/nirav-mathukiya-47b1752b3/)
- **GitHub:** [github.com/nirav-dev-04](https://github.com/nirav-dev-04)
- **Email:** [niravmathukiya8@gmail.com]

---

## 📝 License

This project is open source and available for reference. Feel free to explore the code, but please don't copy the content/design directly for your own portfolio.
