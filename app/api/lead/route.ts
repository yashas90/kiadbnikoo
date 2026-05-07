import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Body = {
  name?: string;
  phone?: string;
  email?: string;
  configuration?: string;
  consent?: boolean;
  source?: string;
  page?: string;
};

export async function POST(req: Request) {
  let body: Body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { name, phone, email, configuration, consent } = body;
  if (!name || !phone || !email || !configuration) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }
  if (!consent) {
    return NextResponse.json({ error: "Consent required" }, { status: 400 });
  }

  const webhook = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (webhook) {
    try {
      const secret = process.env.GOOGLE_SHEETS_WEBHOOK_SECRET;
      const payload: Record<string, unknown> = {
        timestamp: new Date().toISOString(),
        ...body,
      };
      if (secret) {
        payload._webhookSecret = secret;
      }

      const up = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const raw = await up.text();
      let parsed: { ok?: boolean; error?: string } = {};
      try {
        parsed = JSON.parse(raw) as typeof parsed;
      } catch {
        /* Google may return HTML on script errors */
      }

      if (!up.ok || parsed.ok !== true) {
        return NextResponse.json(
          {
            error:
              typeof parsed.error === "string"
                ? parsed.error
                : "Upstream save failed",
          },
          { status: 502 }
        );
      }
    } catch {
      return NextResponse.json(
        { error: "Upstream save failed" },
        { status: 502 }
      );
    }
  }

  return NextResponse.json({ ok: true });
}
