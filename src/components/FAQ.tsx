"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Do you have professional work experience?",
    a: "I have internship experience in research operations and systems design at OVPRDE, plus multiple hands-on projects covering the full data lifecycle — from a mobile ML app to dashboards and system design. I'm equipped to contribute from day one, and I learn new tools and processes quickly.",
  },
  {
    q: "What hours or timezone are you available?",
    a: "I'm based in Davao City, Philippines (GMT+8) and can flexibly align with US, EU, AU, or Asia-Pacific business hours depending on the role's needs.",
  },
  {
    q: "What tools are you comfortable working in?",
    a: "Python, SQL, Excel, Tableau, Power BI, Figma, Google Workspace, Microsoft Office, and more — full list in the Skills section above.",
  },
  {
    q: "Can you handle both administrative and technical tasks?",
    a: "Yes — that's intentional. I built my skill set to cover both operational support (scheduling, documentation, data entry) and technical analysis (SQL, Python, dashboards, ML), so I can flex depending on what your team needs most.",
  },
  {
    q: "What's your availability to start?",
    a: "Immediately, full-time or part-time depending on the opportunity.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs font-mono-accent text-accent-cyan uppercase tracking-widest mb-3">
          FAQ
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Common Questions
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={faq.q}
              className="rounded-xl border border-border-subtle bg-background-secondary overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left px-6 py-4 flex items-center justify-between gap-4"
              >
                <span className="font-medium">{faq.q}</span>
                <span className="text-accent-cyan text-xl leading-none flex-shrink-0">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>
              {openIndex === i && (
                <p className="px-6 pb-4 text-text-muted text-sm leading-relaxed">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
