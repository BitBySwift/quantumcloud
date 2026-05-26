import Link from "next/link";

const availableRoles = [
  "UI/UX Designer",
  "Frontend Engineer",
  "Backend Developer",
  "Full Stack Engineer",
  "Mobile App Developer",
  "DevOps Engineer",
  "AI/ML Engineer",
  "Cloud Solutions Architect",
  "Product Manager",
];

const hiringSteps = [
  {
    title: "Discovery Call",
    detail: "Meet the team and align on role expectations.",
  },
  {
    title: "Technical/Design Challenge",
    detail: "Showcase your skills with a futuristic project brief.",
  },
  {
    title: "Panel Interview",
    detail: "Collaborate with engineering, product, and design leads.",
  },
  {
    title: "Culture Fit Session",
    detail: "Explore mission alignment, growth mindset, and values.",
  },
  {
    title: "Offer & Onboarding",
    detail: "Launch into a premium onboarding experience.",
  },
];

const skillStacks = [
  "Modern JavaScript/TypeScript",
  "React, Next.js, and UI systems",
  "Cloud-native architecture",
  "API design and integration",
  "Product design thinking",
  "AI/ML foundations",
  "Performance optimization",
  "Security-first mindset",
];

const cultureHighlights = [
  "Remote-friendly global collaboration",
  "Innovation-first work culture",
  "Transparent leadership and feedback",
  "High autonomy with strong support",
  "Futuristic technologies and research",
  "Premium office and wellness focus",
];

const growthPath = [
  "Intern → Associate Specialist",
  "Associate → Specialist",
  "Specialist → Senior Specialist",
  "Senior → Lead",
  "Lead → Principal / Manager",
];

const learningOpportunities = [
  "Paid training sessions and certifications",
  "Internal innovation labs",
  "Conference and workshop sponsorships",
  "Mentorship from senior leadership",
];

const expansionPlans = [
  "Global delivery hubs in APAC and EU",
  "Dedicated AI research studio",
  "Vertical-focused product teams",
  "Quantum Cloud partner ecosystem",
];

const howWeWork = [
  "Design-led discovery sprints",
  "Weekly mission planning and retrospectives",
  "Rapid prototyping with client feedback",
  "Quality assurance with automation",
  "Release orchestration with DevOps precision",
];

export default function Careers() {
  return (
    <div className="relative min-h-screen bg-[#05060a] px-6 py-16 text-white sm:px-10">
      <div className="pointer-events-none absolute inset-0 starfield opacity-30" />
      <div className="pointer-events-none absolute inset-0 gradient-veil opacity-50" />

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-14">
        <header className="flex flex-col gap-6">
          <p className="text-sm uppercase tracking-[0.4em] text-cyan/70">
            Careers at Quantum Cloud
          </p>
          <h1 className="section-title text-4xl font-semibold text-white sm:text-5xl">
            Build futuristic products with elite teams.
          </h1>
          <p className="max-w-3xl text-base text-white/70 sm:text-lg">
            Join a global collective of engineers, designers, and strategists
            shaping premium software experiences for forward-thinking brands.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://forms.gle/t7dCtuDMzsnx37N76"
              target="_blank"
              rel="noreferrer"
              className="glow-button rounded-full bg-cyan px-6 py-3 text-sm font-semibold text-[#031018] transition hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(88,230,255,0.6)]"
            >
              Apply Now
            </a>
            <Link
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-cyan/60 hover:text-white"
              href="/why-join"
              target="_blank"
              rel="noreferrer"
            >
              Why Join QC
            </Link>
            <Link className="text-sm text-cyan hover:text-white" href="/">
              ← Back to Quantum Cloud
            </Link>
          </div>
        </header>

        <section className="flex flex-col gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-cyan/70">
              Available Roles
            </p>
            <h2 className="section-title text-3xl font-semibold text-white">
              Roles open across engineering, design, and strategy.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {availableRoles.map((role) => (
              <div
                key={role}
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white/80 transition hover:border-cyan/50 hover:text-white"
              >
                {role}
              </div>
            ))}
          </div>
        </section>

        <section className="glass-panel glow-card rounded-[28px] px-6 py-10 sm:px-10">
          <div className="flex flex-col gap-4">
            <p className="text-sm uppercase tracking-[0.4em] text-cyan/70">
              Hiring Process
            </p>
            <h2 className="section-title text-3xl font-semibold text-white">
              A streamlined, transparent journey.
            </h2>
          </div>
          <div className="mt-8 grid gap-6 border-l border-cyan/30 pl-6 md:grid-cols-2">
            {hiringSteps.map((step) => (
              <div key={step.title} className="relative pl-4">
                <span className="absolute -left-[30px] top-1 h-3 w-3 rounded-full bg-cyan shadow-[0_0_12px_rgba(88,230,255,0.9)]" />
                <p className="text-lg font-semibold text-white">{step.title}</p>
                <p className="mt-2 text-sm text-white/70">{step.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="glass-panel glow-card rounded-[28px] px-6 py-10 sm:px-10">
            <h2 className="section-title text-3xl font-semibold text-white">
              Skills Required
            </h2>
            <p className="mt-2 text-white/70">
              We look for multidisciplinary builders who can ship premium
              experiences end-to-end.
            </p>
            <ul className="mt-6 grid gap-3 text-sm text-white/70">
              {skillStacks.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2"
                >
                  <span className="h-2 w-2 rounded-full bg-cyan shadow-[0_0_10px_rgba(88,230,255,0.9)]" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-panel glow-card rounded-[28px] px-6 py-10 sm:px-10">
            <h2 className="section-title text-3xl font-semibold text-white">
              Work Culture
            </h2>
            <p className="mt-2 text-white/70">
              We move fast with clarity, empathy, and futuristic ambition.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-white/70">
              {cultureHighlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="glass-panel glow-card rounded-[28px] px-6 py-10 sm:px-10">
            <h2 className="section-title text-3xl font-semibold text-white">
              Employee Growth Path
            </h2>
            <p className="mt-2 text-white/70">
              Clear progression, transparent expectations, and mentorship at
              every stage.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-white/70">
              {growthPath.map((step) => (
                <div
                  key={step}
                  className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2"
                >
                  <span className="text-cyan">✦</span>
                  {step}
                </div>
              ))}
            </div>
          </div>
          <div className="glass-panel glow-card rounded-[28px] px-6 py-10 sm:px-10">
            <h2 className="section-title text-3xl font-semibold text-white">
              Internship Opportunities
            </h2>
            <p className="mt-2 text-white/70">
              Hands-on programs for emerging engineers and designers.
            </p>
            <div className="mt-6 flex flex-col gap-3 text-sm text-white/70">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                8-12 week immersive programs with senior mentorship.
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                Paid internships with real client deliverables.
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                High performers transition into full-time roles.
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="glass-panel glow-card rounded-[28px] px-6 py-10 sm:px-10">
            <h2 className="section-title text-3xl font-semibold text-white">
              Learning Opportunities
            </h2>
            <ul className="mt-6 grid gap-3 text-sm text-white/70">
              {learningOpportunities.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-panel glow-card rounded-[28px] px-6 py-10 sm:px-10">
            <h2 className="section-title text-3xl font-semibold text-white">
              Future Expansion Plans
            </h2>
            <ul className="mt-6 grid gap-3 text-sm text-white/70">
              {expansionPlans.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="glass-panel glow-card rounded-[28px] px-6 py-10 sm:px-10">
            <p className="text-sm uppercase tracking-[0.4em] text-cyan/70">
              Mission
            </p>
            <h2 className="section-title text-3xl font-semibold text-white">
              Elevate industries with premium software.
            </h2>
            <p className="mt-4 text-white/70">
              We craft high-performance digital products that feel cinematic,
              secure, and intelligently automated.
            </p>
          </div>
          <div className="glass-panel glow-card rounded-[28px] px-6 py-10 sm:px-10">
            <p className="text-sm uppercase tracking-[0.4em] text-cyan/70">
              Vision
            </p>
            <h2 className="section-title text-3xl font-semibold text-white">
              Create the most futuristic software studio on Earth.
            </h2>
            <p className="mt-4 text-white/70">
              Quantum Cloud imagines a future where technology feels effortless,
              ethical, and beautifully orchestrated.
            </p>
          </div>
        </section>

        <section className="glass-panel glow-card rounded-[28px] px-6 py-10 sm:px-10">
          <div className="flex flex-col gap-4">
            <p className="text-sm uppercase tracking-[0.4em] text-cyan/70">
              How We Work
            </p>
            <h2 className="section-title text-3xl font-semibold text-white">
              Precision processes with premium execution.
            </h2>
          </div>
          <div className="mt-6 grid gap-3 text-sm text-white/70 md:grid-cols-2">
            {howWeWork.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
              >
                {item}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
