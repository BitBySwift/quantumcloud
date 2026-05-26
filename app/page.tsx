"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const services = [
  "AI Development",
  "Cloud Solutions",
  "Mobile App Development",
  "Web Platforms",
  "UI/UX Design",
  "Full Stack Engineering",
  "Backend Infrastructure",
  "DevOps & Automation",
  "Enterprise Software",
];

const roles = [
  "UI/UX Designer",
  "Frontend Engineer",
  "Backend Developer",
  "Full Stack Engineer",
  "Mobile App Developer",
  "DevOps Engineer",
  "AI/ML Engineer",
];

const features = [
  "Work on futuristic technologies",
  "Remote-friendly culture",
  "Innovation-first environment",
  "High growth opportunities",
  "Flexible creative workspace",
  "Elite engineering culture",
];

const stats = [
  { label: "Since", value: "2010" },
  { label: "Global Projects", value: "140+" },
  { label: "Engineers & Innovators", value: "320+" },
  { label: "AI Driven Solutions", value: "90%" },
];

const easing = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: easing },
  viewport: { once: true, amount: 0.2 },
};

export default function Home() {
  const heroCardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroCardsRef.current) return;
    const cards = heroCardsRef.current.querySelectorAll(".floating-card");
    gsap.to(cards, {
      y: -18,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      duration: 4,
      stagger: 0.4,
    });
  }, []);

  return (
    <div className="relative overflow-hidden bg-[#05060a]">
      <div className="pointer-events-none absolute inset-0 starfield opacity-40" />
      <div className="pointer-events-none absolute inset-0 gradient-veil opacity-70" />
      <div className="pointer-events-none absolute -top-40 right-0 h-[480px] w-[480px] hero-orb opacity-70" />

      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-8 sm:px-10">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan/40 bg-white/5 text-sm font-semibold text-cyan">
            QC
          </span>
          <div>
            <p className="text-sm text-cyan/80">Quantum Cloud</p>
            <p className="text-xs uppercase tracking-[0.3em] text-white/40">
              Private Technology
            </p>
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-white/60 md:flex">
          <a className="transition hover:text-white" href="#about">
            About
          </a>
          <a className="transition hover:text-white" href="#services">
            Services
          </a>
          <a className="transition hover:text-white" href="#careers">
            Careers
          </a>
          <a className="transition hover:text-white" href="#vision">
            Vision
          </a>
        </nav>
        <Link
          href="/start-project"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-cyan/30 bg-white/5 px-5 py-2 text-sm text-cyan transition hover:border-cyan/70 hover:text-white"
        >
          Start a Project
        </Link>
      </header>

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-24 sm:px-10">
        <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 px-6 py-16 shadow-[0_0_80px_rgba(88,230,255,0.12)] sm:px-12">
          <div className="absolute inset-0 soft-grid opacity-40" />
          <div className="relative z-10 grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="flex flex-col gap-8">
              <motion.p
                {...fadeUp}
                className="text-sm uppercase tracking-[0.4em] text-cyan/70"
              >
                Beyond Limits. Beyond Tomorrow.
              </motion.p>
              <motion.h1
                {...fadeUp}
                className="section-title text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl"
              >
                Building The Future Beyond Limits
              </motion.h1>
              <motion.p
                {...fadeUp}
                className="text-lg text-white/70 sm:text-xl"
              >
                Quantum Cloud is a private next-generation software development
                company focused on AI, cloud systems, futuristic platforms, and
                advanced digital innovation.
              </motion.p>
              <motion.div {...fadeUp} className="flex flex-wrap gap-4">
                <Link
                  href="/careers"
                  target="_blank"
                  rel="noreferrer"
                  className="glow-button rounded-full bg-cyan px-6 py-3 text-sm font-semibold text-[#031018] transition hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(88,230,255,0.6)]"
                >
                  Explore Careers
                </Link>
                <Link
                  href="/start-project"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-cyan/60 hover:text-white"
                >
                  Start a Project
                </Link>
              </motion.div>
            </div>

            <div ref={heroCardsRef} className="relative grid gap-6">
              {[
                {
                  title: "Quantum AI Core",
                  detail: "Neural automation & intelligence",
                },
                { title: "Cloud Matrix", detail: "Infinite scale platforms" },
                { title: "Secure Horizon", detail: "Zero-trust delivery" },
              ].map((card, index) => (
                <div
                  key={card.title}
                  className={`floating-card glass-panel glow-card rounded-2xl px-6 py-5 ${
                    index === 1 ? "delay-1" : index === 2 ? "delay-2" : ""
                  }`}
                >
                  <p className="text-sm uppercase tracking-[0.3em] text-cyan/70">
                    {card.title}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    {card.detail}
                  </p>
                  <div className="mt-4 h-px w-20 bg-cyan/40" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div {...fadeUp} className="flex flex-col gap-6">
            <p className="text-sm uppercase tracking-[0.4em] text-cyan/70">
              About Quantum Cloud
            </p>
            <h2 className="section-title text-3xl font-semibold text-white sm:text-4xl">
              Private software engineering with cinematic ambition.
            </h2>
            <p className="text-white/70">
              Quantum Cloud builds advanced software products across AI,
              intelligent systems, cloud infrastructure, and modern applications.
              We hire elite engineers, designers, and innovators worldwide to
              deliver mission-critical solutions with precision.
            </p>
            <p className="text-white/70">
              Our mission is to engineer bold future-facing experiences that
              elevate industries and accelerate technological evolution.
            </p>
          </motion.div>
          <motion.div
            {...fadeUp}
            className="grid gap-4 sm:grid-cols-2"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-panel glow-card rounded-2xl px-6 py-5"
              >
                <p className="text-sm uppercase tracking-[0.3em] text-cyan/70">
                  {stat.label}
                </p>
                <p className="mt-3 text-3xl font-semibold text-white">
                  {stat.value}
                </p>
              </div>
            ))}
          </motion.div>
        </section>

        <section id="services" className="flex flex-col gap-10">
          <motion.div {...fadeUp} className="flex flex-col gap-4">
            <p className="text-sm uppercase tracking-[0.4em] text-cyan/70">
              Services
            </p>
            <h2 className="section-title text-3xl font-semibold text-white sm:text-4xl">
              Premium engineering for visionary platforms.
            </h2>
          </motion.div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <motion.div
                key={service}
                {...fadeUp}
                className="glass-panel glow-card rounded-2xl px-6 py-6 transition hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(88,230,255,0.25)]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.3em] text-cyan/70">
                    Quantum
                  </span>
                  <span className="h-9 w-9 rounded-full border border-cyan/40 bg-cyan/10 text-center text-lg leading-9 text-cyan">
                    ✦
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">
                  {service}
                </h3>
                <p className="mt-3 text-sm text-white/60">
                  Luxury-grade architecture, refined delivery, and intelligent
                  automation designed for speed and scale.
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <section
          id="careers"
          className="glass-panel glow-card flex flex-col gap-8 rounded-[28px] px-6 py-12 sm:px-10"
        >
          <motion.div {...fadeUp} className="flex flex-col gap-4">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan/40 bg-cyan/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-cyan">
              We Are Hiring
            </span>
            <h2 className="section-title text-3xl font-semibold text-white sm:text-4xl">
              Build the next frontier with Quantum Cloud.
            </h2>
            <p className="text-white/70">
              Join a private team of engineers and innovators delivering
              cinematic technology solutions for global enterprises and
              forward-thinking partners.
            </p>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {roles.map((role) => (
              <motion.div
                key={role}
                {...fadeUp}
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white/80 transition hover:border-cyan/50 hover:text-white"
              >
                {role}
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeUp} className="flex flex-wrap gap-4">
            <a
              href="https://forms.gle/t7dCtuDMzsnx37N76"
              target="_blank"
              rel="noreferrer"
              className="glow-button rounded-full bg-cyan px-6 py-3 text-sm font-semibold text-[#031018] transition hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(88,230,255,0.6)]"
            >
              Apply Now
            </a>
            <Link
              href="/why-join"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-cyan/60 hover:text-white"
            >
              Why Join QC
            </Link>
          </motion.div>
        </section>

        <section id="why-join" className="flex flex-col gap-10">
          <motion.div {...fadeUp} className="flex flex-col gap-4">
            <p className="text-sm uppercase tracking-[0.4em] text-cyan/70">
              Why Join QC
            </p>
            <h2 className="section-title text-3xl font-semibold text-white sm:text-4xl">
              An elite culture built for bold builders.
            </h2>
          </motion.div>
          <div className="grid gap-4 md:grid-cols-2">
            {features.map((feature) => (
              <motion.div
                key={feature}
                {...fadeUp}
                className="glass-panel glow-card rounded-2xl px-6 py-5 text-white/80"
              >
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan shadow-[0_0_12px_rgba(88,230,255,0.9)]" />
                  <p className="text-base font-medium text-white">{feature}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section
          id="vision"
          className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 px-6 py-14 sm:px-12"
        >
          <div className="pointer-events-none absolute inset-0 scroll-divider opacity-40" />
          <motion.div {...fadeUp} className="relative z-10 flex flex-col gap-6">
            <p className="text-sm uppercase tracking-[0.4em] text-cyan/70">
              Vision
            </p>
            <h2 className="section-title text-3xl font-semibold text-white sm:text-4xl">
              “The universe is not the limit. It’s just the beginning.”
            </h2>
            <p className="max-w-2xl text-white/70">
              We engineer digital ecosystems that feel cinematic, intelligent,
              and unmistakably premium. Every project is a launch sequence into
              what is possible.
            </p>
          </motion.div>
        </section>
      </main>

      <footer
        id="contact"
        className="relative z-10 border-t border-white/10 bg-[#05060a] px-6 py-12 sm:px-10"
      >
        <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan/40 bg-white/5 text-sm font-semibold text-cyan">
                QC
              </span>
              <div>
                <p className="text-sm text-cyan/80">Quantum Cloud</p>
                <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                  Beyond Limits. Beyond Tomorrow.
                </p>
              </div>
            </div>
            <p className="text-sm text-white/60">
              Private software development & advanced technology company.
            </p>
            <p className="text-sm text-white/60">
              <a className="hover:text-white" href="mailto:contact@quantumcloud.ai">
                contact@quantumcloud.ai
              </a>
              <span className="px-2 text-white/30">•</span>
              <a className="hover:text-white" href="tel:+14155550199">
                +1 (415) 555-0199
              </a>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm text-white/60">
            <a className="transition hover:text-white" href="#about">
              About
            </a>
            <a className="transition hover:text-white" href="#services">
              Services
            </a>
            <Link className="transition hover:text-white" href="/careers">
              Careers
            </Link>
            <Link className="transition hover:text-white" href="/why-join">
              Why Join QC
            </Link>
            <Link className="transition hover:text-white" href="/refund-policy">
              Refund Policy
            </Link>
            <Link className="transition hover:text-white" href="/privacy-policy">
              Privacy Policy
            </Link>
            <Link
              className="transition hover:text-white"
              href="/terms-and-conditions"
            >
              Terms & Conditions
            </Link>
            <Link className="transition hover:text-white" href="/#contact">
              Contact
            </Link>
            <Link
              className="transition hover:text-white"
              href="/start-project"
              target="_blank"
              rel="noreferrer"
            >
              Start Project
            </Link>
          </div>
          <div className="flex flex-col gap-4 text-sm text-white/60">
            <p className="uppercase tracking-[0.3em] text-white/40">Social</p>
            <div className="flex gap-4">
              <a
                className="transition hover:text-white"
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="transition hover:text-white"
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
              >
                X
              </a>
              <a
                className="transition hover:text-white"
                href="https://dribbble.com"
                target="_blank"
                rel="noreferrer"
              >
                Dribbble
              </a>
            </div>
            <a
              href="https://forms.gle/t7dCtuDMzsnx37N76"
              target="_blank"
              rel="noreferrer"
              className="text-cyan transition hover:text-white"
            >
              Careers Application
            </a>
          </div>
        </div>
        <p className="mt-10 text-center text-xs uppercase tracking-[0.4em] text-white/40">
          © Quantum Cloud — Since 2010
        </p>
      </footer>
    </div>
  );
}
