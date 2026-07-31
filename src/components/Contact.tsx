"use client";

import { useState } from "react";

const YOUR_EMAIL = "keanlouisedavid@gmail.com";
const WEB3FORMS_ACCESS_KEY = "9f43ed4e-d913-4377-87c4-09dc7be106f9";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Data Analyst");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Portfolio Inquiry: ${role} — from ${name}`,
          from_name: name,
          name,
          email,
          role,
          message,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
        setRole("Data Analyst");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-mono-accent text-accent-cyan uppercase tracking-widest mb-3">
          Contact
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Let&apos;s Talk About How I Can Help Your Team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-[0.4fr_0.6fr] gap-12">
          <div>
            <p className="text-text-muted mb-8 leading-relaxed">
              Whether you need clean data, a working model, or someone who
              can just get the operational details right — I&apos;m
              available and ready to start.
            </p>

            <div className="space-y-3 text-sm">
              <p className="text-text-muted">
                📧{" "}
                <a
                  href={`mailto:${YOUR_EMAIL}`}
                  className="text-accent-cyan hover:underline"
                >
                  {YOUR_EMAIL}
                </a>
              </p>
              <p className="text-text-muted">
                💼{" "}
                <a
                  href="https://www.linkedin.com/in/kean-david"
                  className="text-accent-cyan hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/kean-david
                </a>
              </p>
              <p className="text-text-muted">
                💻{" "}
                <a
                  href="https://github.com/KeanDavid"
                  className="text-accent-cyan hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/KeanDavid
                </a>
              </p>
              <p className="text-text-muted">📍 Davao City, Philippines (GMT+8)</p>
              <p className="flex items-center gap-2 text-text-muted">
                <span className="w-2 h-2 rounded-full bg-accent-success animate-pulse" />
                Available for remote work
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="contact-name"
                className="block text-sm text-text-muted mb-1.5"
              >
                Name
              </label>
              <input
                id="contact-name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg bg-background-secondary border border-border-subtle px-4 py-2.5 text-text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan focus:border-accent-cyan transition"
              />
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="block text-sm text-text-muted mb-1.5"
              >
                Email
              </label>
              <input
                id="contact-email"
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg bg-background-secondary border border-border-subtle px-4 py-2.5 text-text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan focus:border-accent-cyan transition"
              />
            </div>

            <div>
              <label
                htmlFor="contact-role"
                className="block text-sm text-text-muted mb-1.5"
              >
                Role you&apos;re hiring for
              </label>
              <select
                id="contact-role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full rounded-lg bg-background-secondary border border-border-subtle px-4 py-2.5 text-text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan focus:border-accent-cyan transition"
              >
                <option>Data Analyst</option>
                <option>Data Scientist</option>
                <option>Virtual Assistant</option>
                <option>Data Entry Specialist</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="block text-sm text-text-muted mb-1.5"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-lg bg-background-secondary border border-border-subtle px-4 py-2.5 text-text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan focus:border-accent-cyan transition resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="px-6 py-3 rounded-lg bg-accent-cyan text-background font-semibold hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-accent-success text-sm">
                Message sent. I will get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-400">
                Something went wrong. Please email me directly at{" "}
                <a href={`mailto:${YOUR_EMAIL}`} className="underline">
                  {YOUR_EMAIL}
                </a>
                .
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
