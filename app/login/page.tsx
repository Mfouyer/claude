"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        router.replace("/exam/ab730");
        router.refresh();
      } else {
        const d = await res.json().catch(() => ({}));
        setError((d as { error?: string }).error ?? "Login failed.");
      }
    } catch {
      setError("Network error.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="grid min-h-screen place-items-center p-5">
      <div className="w-full max-w-sm">
        <div className="card overflow-hidden">
          <div className="relative p-7">
            <div className="pointer-events-none absolute inset-0 opacity-10" style={{ backgroundImage: "var(--exam-grad)" }} />
            <div className="relative">
              <div className="mb-4 flex gap-2">
                <span className="chip-grad">AB-730</span>
                <span className="chip">AB-731</span>
              </div>
              <h1 className="text-xl font-extrabold tracking-tight">Exam Simulator</h1>
              <p className="mt-1 text-sm text-muted">AI Business Professional &amp; AI Transformation Leader · private access</p>

              <form onSubmit={onSubmit} className="mt-6 space-y-3">
                <label className="block text-sm font-medium" htmlFor="pw">
                  Password
                </label>
                <input
                  id="pw"
                  type="password"
                  autoFocus
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input"
                  placeholder="••••••••"
                />
                {error && <p className="text-sm text-bad">{error}</p>}
                <button type="submit" className="btn-primary w-full py-3" disabled={busy || !password}>
                  {busy ? "Checking…" : "Enter"}
                </button>
              </form>
            </div>
          </div>
        </div>
        <p className="mt-4 text-center text-xs text-muted">Set the AUTH_PASSWORD environment variable to change this.</p>
      </div>
    </main>
  );
}
