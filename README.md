# AB-730 / AB-731 Exam Simulator

A private practice environment for the **AB-730 — AI Business Professional** and
**AB-731 — AI Transformation Leader** certifications (Microsoft 365 Copilot
content). Built with Next.js (App Router) + TypeScript + Tailwind.

This is a v2 rebuild of the original simulator with the following changes:

| # | Request | What changed |
|---|---------|--------------|
| 1 | **Per-exam isolation** | Each exam has its own page (`/exam/ab730`, `/exam/ab731`) with its own data, metrics and "Start a new sitting" card. The card only ever offers the exam you are on — you change exam with **Switch to …** in the top bar. No more shared picker. |
| 2 | **Option order** | Answer options are always sorted **A → B → C → D** (the source pool stored them shuffled). |
| 3 | **AB-731 length** | AB-731 went from **47 → 50** questions (3 new authored questions added). |
| 4 | **Error review** | After every sitting, the **Review** section lists each question, your answer vs. the correct answer, and a detailed **explanation of why** — defaulting to a "Mistakes only" filter. |
| 5 | **Charts** | New animated, interactive SVG charts: score gauge, domain bars (with pass marker), hoverable score-trend line, and a blueprint donut. |
| 6 | **Visual refresh** | New design system, per-exam accent theming (indigo for AB-730, teal for AB-731), light/dark mode, refined cards/typography/motion. |

## Running locally

```bash
npm install
AUTH_PASSWORD="your-password" npm run dev      # http://localhost:3000
```

## Production / deploy (same as before — it's still Next.js)

```bash
npm install
npm run build
AUTH_PASSWORD="your-password" npm run start    # serves on $PORT (default 3000)
```

Deploy the folder to the same host you used before (any Node host, or a
container). **Set `AUTH_PASSWORD` in the environment** — if you don't, the gate
falls back to the placeholder `ab730-demo`. The password is never stored in the
repo.

## How it works

- **Auth** — `POST /api/auth/login` checks the password and sets an opaque,
  HTTP-only cookie; `middleware.ts` guards every route. Single user, no DB.
- **Questions & answers** — the full bank lives in `lib/exams/bank.ts` and is
  imported **server-side only** (`import "server-only"`). The answer key and
  explanations are *never* sent to the browser. `POST /api/exam` assembles a
  sitting (questions without answers); `POST /api/exam/grade` grades it and
  returns the review. This is the same model the original used.
- **History** — your sittings are stored in the browser's `localStorage`
  (per exam), which powers the dashboard metrics, trend and weak-area weighting.
  Clear it any time in **Settings**.

## Editing the question bank

All questions, correct answers and explanations live in **`lib/exams/bank.ts`**
— a plain typed array. Edit it directly to add, remove or fix a question. Each
entry looks like:

```ts
{
  id: "GEN-118", exam: "ab731", domain: "generative-ai-fundamentals",
  subtopic: "rag-grounding", format: "scenario", difficulty: "medium",
  stem: "…",
  options: [ { key: "A", text: "…" }, … ],   // keep sorted A → B → C → D
  correct: ["B"],                             // for yes/no use `answers: { "1": true }`
  explanation: "Why B is right and the others are not.",
}
```

The file is imported server-side only, so answers are never sent to the browser.
