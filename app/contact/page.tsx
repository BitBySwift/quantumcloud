"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const engagementCards = [
  {
    title: "Contact Information",
    description:
      "Reach our concierge team for direct access to leadership and response within one business day.",
    items: ["contact@quantumcloud.ai", "+1 (415) 555-0199", "Global Remote Studio"],
  },
  {
    title: "Business Inquiry",
    description:
      "Discuss partnerships, enterprise contracts, and product strategy with our executive advisors.",
    items: ["Enterprise onboarding", "Strategic planning", "Innovation roadmap"],
  },
  {
    title: "Project Consultation",
    description:
      "Collaborate with senior architects to scope premium software, AI, and cloud solutions.",
    items: ["Discovery workshops", "Technical architecture", "Delivery timelines"],
  },
  {
    title: "Support Information",
    description:
      "Priority assistance for active deployments, security requests, and maintenance needs.",
    items: ["24/7 escalation path", "Performance optimization", "Security updates"],
  },
  {
    title: "Hiring Information",
    description:
      "Explore elite roles across design, engineering, and operations with Quantum Cloud.",
    items: ["Global talent network", "Remote-first teams", "Growth mentorship"],
  },
  {
    title: "Client Communication",
    description:
      "Stay aligned through dedicated account management and real-time progress reporting.",
    items: ["Weekly sync calls", "Client success lead", "Transparent reporting"],
  },
];

const projectTypes = [
  "AI Development",
  "Cloud Infrastructure",
  "Web Platform",
  "Mobile Application",
  "Enterprise Software",
  "UX/UI Design",
  "Automation & DevOps",
  "Other",
];

const contactTimes = ["Morning", "Afternoon", "Evening", "Anytime"];

const easing = [0.16, 1, 0.3, 1] as const;
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: easing },
  viewport: { once: true, amount: 0.2 },
};

const inputClasses =
  "mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 placeholder:text-white/40 focus:border-cyan/60 focus:outline-none";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-[#05060a] px-6 py-16 text-white sm:px-10">
      <div className="pointer-events-none absolute inset-0 starfield opacity-35" />
      <div className="pointer-events-none absolute inset-0 gradient-veil opacity-60" />

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-14">
        <header className="flex flex-col gap-6">
          <motion.p
            {...fadeUp}
            className="text-sm uppercase tracking-[0.4em] text-cyan/70"
          >
            Contact
          </motion.p>
          <motion.h1
            {...fadeUp}
            className="section-title text-4xl font-semibold text-white sm:text-5xl"
          >
            Connect with Quantum Cloud.
          </motion.h1>
          <motion.p {...fadeUp} className="max-w-3xl text-base text-white/70 sm:text-lg">
            We deliver premium software development and cloud solutions tailored to
            bold business ambitions. Share your vision and our team will craft a
            futuristic engagement strategy designed to scale.
          </motion.p>
          <motion.div {...fadeUp} className="flex flex-wrap gap-3">
            {[
              "Quantum Cloud",
              "Founder: Abdul Shamad Siddque",
              "Software Development & Cloud Solutions Company",
            ].map((badge) => (
              <span
                key={badge}
                className="glass-panel glow-card rounded-full px-4 py-2 text-xs uppercase tracking-[0.3em] text-cyan/70"
              >
                {badge}
              </span>
            ))}
          </motion.div>
          <motion.div {...fadeUp}>
            <Link className="text-sm text-cyan transition hover:text-white" href="/">
              ← Back to Quantum Cloud
            </Link>
          </motion.div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            {...fadeUp}
            className="glass-panel glow-card rounded-[28px] px-6 py-8 sm:px-10"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-cyan/70">
              Company Profile
            </p>
            <h2 className="section-title mt-4 text-2xl font-semibold text-white">
              Premium digital engineering for visionary brands.
            </h2>
            <p className="mt-4 text-sm text-white/70 sm:text-base">
              Quantum Cloud is a private software development studio focused on AI,
              cloud systems, intelligent automation, and cinematic digital
              experiences. Our leadership team partners with founders and enterprises
              to deliver elegant, high-performance solutions.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                { label: "Company", value: "Quantum Cloud" },
                { label: "Founder", value: "Abdul Shamad Siddque" },
                { label: "Business Type", value: "Software Development & Cloud Solutions" },
                { label: "Focus", value: "AI, Cloud, Web & Mobile Platforms" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white/70"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-cyan/70">
                    {item.label}
                  </p>
                  <p className="mt-2 font-medium text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            className="glass-panel glow-card rounded-[28px] px-6 py-8 sm:px-10"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-cyan/70">
              Priority Access
            </p>
            <h2 className="section-title mt-4 text-2xl font-semibold text-white">
              High-touch consultation with expert teams.
            </h2>
            <p className="mt-4 text-sm text-white/70 sm:text-base">
              Every engagement starts with deep discovery and a curated delivery
              blueprint. Expect transparent milestones, premium UI design, and
              future-ready technology decisions.
            </p>
            <div className="mt-6 space-y-3 text-sm text-white/70">
              {[
                "Dedicated product strategist and technical architect",
                "Secure client workspace with weekly updates",
                "Global delivery across cloud, AI, mobile, and web",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-cyan shadow-[0_0_12px_rgba(88,230,255,0.9)]" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="flex flex-col gap-10">
          <motion.div {...fadeUp} className="flex flex-col gap-4">
            <p className="text-sm uppercase tracking-[0.4em] text-cyan/70">
              Engagement Channels
            </p>
            <h2 className="section-title text-3xl font-semibold text-white sm:text-4xl">
              Dedicated support for every stage of your journey.
            </h2>
          </motion.div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {engagementCards.map((card) => (
              <motion.div
                key={card.title}
                {...fadeUp}
                className="glass-panel glow-card rounded-2xl px-6 py-6 transition hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(88,230,255,0.25)]"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-cyan/70">
                  {card.title}
                </p>
                <p className="mt-3 text-base font-semibold text-white">{card.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-white/70">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan/80" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="glass-panel glow-card rounded-[28px] px-6 py-10 sm:px-10">
          <motion.div {...fadeUp} className="flex flex-col gap-4">
            <p className="text-sm uppercase tracking-[0.4em] text-cyan/70">
              Contact Form
            </p>
            <h2 className="section-title text-3xl font-semibold text-white sm:text-4xl">
              Tell us about your next breakthrough.
            </h2>
            <p className="text-sm text-white/70 sm:text-base">
              Share the scope of your project and the Quantum Cloud team will respond
              with a tailored strategy deck and timeline.
            </p>
          </motion.div>
          <motion.form
            {...fadeUp}
            className="mt-8 grid gap-6 md:grid-cols-2"
          >
            <label className="text-sm text-white/70">
              Full Name
              <input className={inputClasses} placeholder="Full name" type="text" />
            </label>
            <label className="text-sm text-white/70">
              Email Address
              <input
                className={inputClasses}
                placeholder="Email address"
                type="email"
              />
            </label>
            <label className="text-sm text-white/70">
              Mobile Number
              <input
                className={inputClasses}
                placeholder="Mobile number"
                type="tel"
              />
            </label>
            <label className="text-sm text-white/70">
              Country
              <input className={inputClasses} placeholder="Country" type="text" />
            </label>
            <label className="text-sm text-white/70">
              Project Type
              <select className={inputClasses} defaultValue="">
                <option value="" disabled>
                  Select a project type
                </option>
                {projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </label>
            <label className="text-sm text-white/70">
              Preferred Contact Time
              <select className={inputClasses} defaultValue="">
                <option value="" disabled>
                  Choose a time window
                </option>
                {contactTimes.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </label>
            <label className="text-sm text-white/70 md:col-span-2">
              Message
              <textarea
                className={`${inputClasses} min-h-[140px] resize-none`}
                placeholder="Tell us about your goals, timeline, and expectations."
              />
            </label>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="glow-button rounded-full bg-cyan px-6 py-3 text-sm font-semibold text-[#031018] transition hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(88,230,255,0.6)]"
              >
                Submit Inquiry
              </button>
            </div>
          </motion.form>
        </section>
      </main>
    </div>
  );
}
