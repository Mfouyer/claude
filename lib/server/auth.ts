/**
 * Lightweight single-user auth gate (matches the original app's cookie model).
 * Set AUTH_PASSWORD in the environment for production. The cookie stores an
 * opaque token derived from the password, so no server-side session store is
 * needed. Safe to import from both the Node runtime and Edge middleware.
 */
export const AUTH_COOKIE = "ab730_auth";

export function getPassword(): string {
  return process.env.AUTH_PASSWORD || "ab730-demo";
}

export async function sha256Hex(input: string): Promise<string> {
  const data = new TextEncoder().encode(input);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function expectedToken(): Promise<string> {
  return sha256Hex("ab730::" + getPassword());
}

export async function isValidToken(token: string | undefined): Promise<boolean> {
  if (!token) return false;
  return token === (await expectedToken());
}
