import Image from "next/image";

const facts = [
  "Davao, Philippines (GMT+8)",
  "BS Computer Science, USeP",
  "Open to remote work",
  "English (Professional), Filipino (Native)",
];

export default function About() {
  return (
    <section id="about" className="px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-mono-accent text-accent-cyan uppercase tracking-widest mb-3">
          About
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          The Person Behind the Data
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-[0.35fr_0.65fr] gap-10 items-start">
          <div className="relative w-full aspect-[4/5] max-w-xs rounded-2xl overflow-hidden border border-border-subtle">
            <Image
              src="/about_photo.png"
              alt="Kean Louise B. David"
              fill
              sizes="(max-width: 768px) 100vw, 320px"
              className="object-cover"
            />
          </div>

          <div>
            <div className="space-y-5 text-text-muted text-base md:text-lg leading-relaxed">
              <p>
                I&apos;m Kean Louise B. David, a Computer Science graduate
                from the University of Southeastern Philippines with a
                simple belief: data is only valuable once someone turns it
                into a decision.
              </p>
              <p>
                During my internship at the Office of the Vice President for
                Research, Development, and Extension (OVPRDE), I spent
                months mapping undocumented research workflows into clear
                systems — designing databases, building ERDs and flowcharts,
                and creating the documentation that helped an entire office
                run smoother. That experience taught me the discipline side
                of data work: structure, accuracy, and communicating
                findings to people who aren&apos;t technical.
              </p>
              <p>
                On the technical side, I built SalCoN, a lightweight
                CNN-based mobile app that detects poultry disease from
                fecal images — from raw dataset to a working Android app.
                It forced me to learn the full lifecycle of a data product:
                cleaning messy real-world data, training and validating a
                model, and shipping something a non-technical user could
                actually use.
              </p>
              <p>
                I&apos;m now looking for a remote Junior Data Analyst or
                Data Scientist role — and I bring the same operational
                precision to administrative and data entry work when
                that&apos;s what&apos;s needed.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              {facts.map((fact) => (
                <span
                  key={fact}
                  className="text-sm text-text-muted bg-background-secondary border border-border-subtle rounded-full px-4 py-1.5"
                >
                  {fact}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
