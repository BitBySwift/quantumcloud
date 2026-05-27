"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const specialties = [
  "Mobile App Development",
  "Website Development",
  "Cloud Engineering",
  "UI/UX Design",
  "AI-based Solutions",
  "Custom Software Systems",
  "SaaS Platforms",
  "Enterprise Solutions",
];

const growthSignals = [
  "Rapid growth powered by innovation-led delivery",
  "Expanding services across cloud, AI, and product engineering",
  "Strong client satisfaction through premium customer experiences",
  "High-quality work standards with a modern technology stack",
  "Future global expansion plans for next-generation markets",
];

const values = [
  "Innovation",
  "Transparency",
  "Creativity",
  "Performance",
  "Scalability",
  "Client Satisfaction",
  "Future Technologies",
  "Premium Quality Standards",
];

const trustSignals = [
  "Transparent pricing with no hidden charges",
  "Faster delivery through focused sprint execution",
  "Dedicated support with proactive communication",
  "Premium UI/UX quality crafted for premium brands",
  "Secure development practices and audits",
  "Modern technologies with future-ready stacks",
  "Free maintenance support after launch",
  "Long-term client relationships and growth partnerships",
  "Performance optimization for a premium customer experience",
];

const stats = [
  { label: "Projects Delivered", value: 180, suffix: "+" },
  { label: "Happy Clients", value: 120, suffix: "+" },
  { label: "Technologies Used", value: 45, suffix: "+" },
  { label: "Countries Reached", value: 22, suffix: "+" },
  { label: "Client Satisfaction Rate", value: 98, suffix: "%" },
];

const easing = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: easing },
  viewport: { once: true, amount: 0.2 },
};

function AnimatedStat({
  label,
  value,
  suffix,
}: {
  label: string;
  value: number;
  suffix: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const animate = () => {
      const duration = 1400;
      const start = performance.now();

      const step = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const nextValue = Math.round(progress * value);
        setCount(nextValue);
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animate();
        }
      },
      { threshold: 0.45 }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [value]);

  const formattedCount = new Intl.NumberFormat("en-US").format(count);

  return (
    <motion.div
      {...fadeUp}
      ref={containerRef}
      className="glass-panel glow-card rounded-2xl px-6 py-5"
    >
      <p className="text-xs uppercase tracking-[0.3em] text-cyan/70">{label}</p>
      <p className="mt-3 text-3xl font-semibold text-white">
        {formattedCount}
        {suffix}
      </p>
    </motion.div>
  );
}

export default function AboutQuantumCloudPage() {
  return (
    <div className="relative min-h-screen bg-[#05060a] px-6 py-16 text-white sm:px-10">
      <div className="pointer-events-none absolute inset-0 starfield opacity-25" />
      <div className="pointer-events-none absolute inset-0 gradient-veil opacity-60" />
      <div className="pointer-events-none absolute -top-40 right-0 h-[420px] w-[420px] hero-orb opacity-50" />

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-16">
        <header className="flex flex-col gap-6">
          <motion.p
            {...fadeUp}
            className="text-sm uppercase tracking-[0.4em] text-cyan/70"
          >
            About Quantum Cloud
          </motion.p>
          <motion.h1
            {...fadeUp}
            className="section-title text-4xl font-semibold text-white sm:text-5xl"
          >
            A futuristic software studio accelerating premium digital
            transformation.
          </motion.h1>
          <motion.p {...fadeUp} className="max-w-3xl text-white/70 sm:text-lg">
            Quantum Cloud is a rapidly growing next-generation technology
            company focused on building futuristic digital experiences, scalable
            cloud systems, high-performance applications, and premium
            user-focused solutions for modern businesses worldwide.
          </motion.p>
          <motion.div {...fadeUp} className="flex flex-wrap gap-4">
            <Link
              className="glow-button rounded-full bg-cyan px-6 py-3 text-sm font-semibold text-[#031018] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(88,230,255,0.6)] active:scale-95"
              href="/start-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start a Project
            </Link>
            <Link className="text-sm text-cyan hover:text-white" href="/">
              ← Back to Quantum Cloud
            </Link>
          </motion.div>
        </header>

        <section
          id="about-us"
          className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <motion.div {...fadeUp} className="flex flex-col gap-6">
            <p className="text-sm uppercase tracking-[0.4em] text-cyan/70">
              Company Introduction
            </p>
            <h2 className="section-title text-3xl font-semibold text-white sm:text-4xl">
              Premium engineering, cinematic design, and future-ready systems.
            </h2>
            <p className="text-white/70">
              We are an innovation-driven company focused on futuristic
              technologies and premium design standards that elevate every
              product experience.
            </p>
            <p className="text-white/70">
              Our teams uphold strong development quality with a long-term
              business vision, making Quantum Cloud a fast-growing digital
              company trusted by modern clients and startups.
            </p>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2">
            {specialties.map((item) => (
              <motion.div
                key={item}
                {...fadeUp}
                className="glass-panel glow-card rounded-2xl px-5 py-5 text-sm text-white/80 transition hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(88,230,255,0.25)]"
              >
                <span className="text-xs uppercase tracking-[0.3em] text-cyan/70">
                  Quantum Service
                </span>
                <p className="mt-3 text-base font-semibold text-white">{item}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section
          id="our-story"
          className="glass-panel glow-card flex flex-col gap-8 rounded-[28px] px-6 py-10 sm:px-10"
        >
          <motion.div {...fadeUp} className="flex flex-col gap-4">
            <p className="text-sm uppercase tracking-[0.4em] text-cyan/70">
              Our Story
            </p>
            <h2 className="section-title text-3xl font-semibold text-white sm:text-4xl">
              A rapid rise fueled by innovation and premium delivery.
            </h2>
            <p className="text-white/70">
              Since launch, Quantum Cloud has rapidly evolved into a modern
              technology-focused brand delivering visually stunning,
              performance-driven digital products and premium customer
              experiences for global clients.
            </p>
          </motion.div>
          <div className="grid gap-4 md:grid-cols-2">
            {growthSignals.map((item) => (
              <motion.div
                key={item}
                {...fadeUp}
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-5 text-sm text-white/70 transition hover:border-cyan/50 hover:text-white"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-8">
          <motion.div {...fadeUp} className="flex flex-col gap-4">
            <p className="text-sm uppercase tracking-[0.4em] text-cyan/70">
              Company Growth
            </p>
            <h2 className="section-title text-3xl font-semibold text-white sm:text-4xl">
              Scaling with premium standards and a future global vision.
            </h2>
            <p className="text-white/70">
              Our momentum comes from rapid growth, expanding services, and
              exceptional client satisfaction delivered through premium design
              standards. We build with a modern technology stack and a future
              global expansion roadmap while elevating every customer
              experience.
            </p>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat) => (
              <AnimatedStat key={stat.label} {...stat} />
            ))}
          </div>
        </section>

        <section
          id="founder-message"
          className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 px-6 py-12 sm:px-10"
        >
          <div className="pointer-events-none absolute inset-0 soft-grid opacity-40" />
          <motion.div {...fadeUp} className="relative z-10 flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <p className="text-sm uppercase tracking-[0.4em] text-cyan/70">
                Founder Message
              </p>
              <h2 className="section-title text-3xl font-semibold text-white sm:text-4xl">
                Founder & Vision Holder of Quantum Cloud
              </h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-[0.4fr_0.6fr] lg:items-center">
              <div className="glass-panel glow-card flex flex-col items-center gap-4 rounded-2xl border border-cyan/30 bg-cyan/10 px-6 py-8 text-center text-white transition hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(88,230,255,0.35)]">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-cyan/40 bg-[#05131f] text-2xl text-cyan">
                  AS
                </div>
                <div>
                  <p className="text-lg font-semibold">Abdul Shamad Siddque</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-cyan/70">
                    Founder & Vision Holder
                  </p>
                </div>
              </div>
              <div className="glass-panel glow-card rounded-2xl px-6 py-8 text-white/70">
                <p className="text-lg font-semibold text-white">
                  “Quantum Cloud was founded with a passion for technology and a
                  future-focused mindset. We lead with innovation to build
                  modern digital experiences and remain committed to premium
                  quality, performance, and long-term client success.”
                </p>
                <p className="mt-4 text-sm text-white/60">
                  — Abdul Shamad Siddque
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="flex flex-col gap-8">
          <motion.div {...fadeUp} className="flex flex-col gap-4">
            <p className="text-sm uppercase tracking-[0.4em] text-cyan/70">
              Company Values
            </p>
            <h2 className="section-title text-3xl font-semibold text-white sm:text-4xl">
              Core values that power every Quantum Cloud launch.
            </h2>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <motion.div
                key={value}
                {...fadeUp}
                className="glass-panel glow-card rounded-2xl px-5 py-5 text-sm text-white/70 transition hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(88,230,255,0.25)]"
              >
                <p className="text-base font-semibold text-white">{value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.3em] text-cyan/70">
                  Quantum Standard
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="glass-panel glow-card flex flex-col gap-8 rounded-[28px] px-6 py-10 sm:px-10">
          <motion.div {...fadeUp} className="flex flex-col gap-4">
            <p className="text-sm uppercase tracking-[0.4em] text-cyan/70">
              Why Clients Trust Us
            </p>
            <h2 className="section-title text-3xl font-semibold text-white sm:text-4xl">
              Transparent, premium delivery from discovery to launch.
            </h2>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trustSignals.map((signal) => (
              <motion.div
                key={signal}
                {...fadeUp}
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-5 text-sm text-white/70 transition hover:border-cyan/50 hover:text-white"
              >
                {signal}
              </motion.div>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 px-6 py-12 sm:px-10">
          <div className="pointer-events-none absolute inset-0 gradient-veil opacity-70" />
          <div className="pointer-events-none absolute inset-0 soft-grid opacity-40" />
          <div className="pointer-events-none absolute -top-16 right-10 h-32 w-32 hero-orb opacity-50 floating-card" />
          <div className="pointer-events-none absolute bottom-8 left-8 h-28 w-28 hero-orb opacity-35 floating-card delay-2" />
          <motion.div {...fadeUp} className="relative z-10 flex flex-col gap-6">
            <p className="text-sm uppercase tracking-[0.4em] text-cyan/70">
              Future Vision
            </p>
            <h2 className="section-title text-3xl font-semibold text-white sm:text-4xl">
              Building the next generation of premium digital ecosystems.
            </h2>
            <motion.div {...fadeUp} className="scroll-divider h-px w-full max-w-md" />
            <p className="max-w-3xl text-white/70">
              Quantum Cloud aims to become a globally recognized futuristic
              technology company delivering advanced software systems,
              intelligent cloud solutions, premium mobile applications, and
              AI-powered digital experiences for the next generation.
            </p>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
