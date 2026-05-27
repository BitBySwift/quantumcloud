"use client";

import Image from "next/image";
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

const logoSrc =
  "https://github.com/user-attachments/assets/b38ee670-8b2a-4dc4-b971-2cba689c147b";
const linkedinUrl = "https://linkedin.com/company/quantum-cloud-official";
const careersApplicationUrl = "https://forms.gle/t7dCtuDMzsnx37N76";
const logoFrameClass = "relative h-10 w-20 shrink-0 sm:h-11 sm:w-24";
const logoInnerClass = "relative h-full w-full";
const logoImageClass =
  "object-contain transition duration-300 ease-out brightness-110 drop-shadow-[0_0_6px_rgba(88,230,255,0.35)] group-hover:scale-[1.03] group-hover:brightness-125 group-hover:drop-shadow-[0_0_18px_rgba(88,230,255,0.65)]";
const brandGroupClass = "group flex items-center gap-2 sm:gap-3";
const brandTextClass = "flex flex-col gap-0.5 leading-tight";
const brandNameClass = "text-sm font-semibold text-cyan/80";
const brandTaglineClass = "text-xs uppercase tracking-[0.3em] text-white/40";
const footerLinkClass = "transition-colors duration-300 hover:text-white";

const features = [
  "Work on futuristic technologies",
  "Remote-friendly culture",
  "Innovation-first environment",
  "High growth opportunities",
  "Flexible creative workspace",
  "Elite engineering culture",
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
        <div className={brandGroupClass}>
          <div className={logoFrameClass}>
            <div className={logoInnerClass}>
              <Image
                src={logoSrc}
                alt="Quantum Cloud logo"
                fill
                sizes="(max-width: 640px) 96px, 112px"
                className={logoImageClass}
                quality={100}
                priority
              />
            </div>
          </div>
          <div className={brandTextClass}>
            <p className={brandNameClass}>Quantum Cloud</p>
            <p className={brandTaglineClass}>Beyond Limits. Beyond Tomorrow.</p>
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-white/60 md:flex">
          <Link
            className={footerLinkClass}
            href="/about-quantum-cloud"
            target="_blank"
            rel="noopener noreferrer"
          >
            About Us
          </Link>
          <a className={footerLinkClass} href="#services">
            Services
          </a>
          <a className={footerLinkClass} href="#careers">
            Careers
          </a>
          <a className={footerLinkClass} href="#vision">
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
              Quantum Cloud blends modern technologies with innovation-first
              strategy to deliver premium user experiences, scalable digital
              ecosystems, and intelligent products for global businesses.
            </p>
            <p className="text-white/70">
              We specialize in next-generation application development and
              believe in futuristic digital transformation powered by quality
              execution, intelligent automation, and immersive UI/UX design.
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
        <div className="mx-auto grid w-full max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.15fr_1fr_1fr] lg:gap-12">
          <div className="flex flex-col gap-4">
            <div className={brandGroupClass}>
              <div className={logoFrameClass}>
                <div className={logoInnerClass}>
                  <Image
                    src={logoSrc}
                    alt="Quantum Cloud logo"
                    fill
                    sizes="(max-width: 640px) 96px, 112px"
                    className={logoImageClass}
                    quality={100}
                  />
                </div>
              </div>
              <div className={brandTextClass}>
                <p className={brandNameClass}>Quantum Cloud</p>
                <p className={brandTaglineClass}>Beyond Limits. Beyond Tomorrow.</p>
              </div>
            </div>
            <p className="text-sm text-white/60">
              Private software development & advanced technology company.
            </p>
            <p className="text-sm text-white/60">
              <a className={footerLinkClass} href="mailto:quantumcloud.help@gmail.com">
                quantumcloud.help@gmail.com
              </a>
              <span className="px-2 text-white/30">•</span>
              <a className={footerLinkClass} href="tel:+917081847882">
                +91 7081847882
              </a>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm text-white/60">
            <Link
              className={footerLinkClass}
              href="/about-quantum-cloud"
              target="_blank"
              rel="noopener noreferrer"
            >
              About Us
            </Link>
            <Link
              className={footerLinkClass}
              href="/about-quantum-cloud#our-story"
              target="_blank"
              rel="noopener noreferrer"
            >
              Our Story
            </Link>
            <Link
              className={footerLinkClass}
              href="/about-quantum-cloud#founder-message"
              target="_blank"
              rel="noopener noreferrer"
            >
              Founder Message
            </Link>
            <Link
              className={footerLinkClass}
              href="/#services"
              target="_blank"
              rel="noopener noreferrer"
            >
              Services
            </Link>
            <Link
              className={footerLinkClass}
              href="/careers"
              target="_blank"
              rel="noopener noreferrer"
            >
              Careers
            </Link>
            <Link
              className={footerLinkClass}
              href="/why-join"
              target="_blank"
              rel="noopener noreferrer"
            >
              Why Join QC
            </Link>
            <Link
              className={footerLinkClass}
              href="/refund-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Refund Policy
            </Link>
            <Link
              className={footerLinkClass}
              href="/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </Link>
            <Link
              className={footerLinkClass}
              href="/terms-and-conditions"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms & Conditions
            </Link>
            <Link
              className={footerLinkClass}
              href="/contact#contact-form"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Us
            </Link>
            <Link
              className={footerLinkClass}
              href="/start-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Project
            </Link>
          </div>
          <div className="flex flex-col gap-4 text-sm text-white/60">
            <p className="uppercase tracking-[0.3em] text-white/40">Social</p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-cyan/30 bg-white/5 text-cyan/70 transition duration-300 ease-out hover:-translate-y-0.5 hover:border-cyan/70 hover:text-white hover:shadow-[0_0_20px_rgba(88,230,255,0.6)]"
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Quantum Cloud on LinkedIn"
              >
                <svg
                  aria-hidden="true"
                  className="h-4 w-4 transition duration-300 ease-out group-hover:scale-110"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.45 20.45h-3.55v-5.4c0-1.29-.03-2.95-1.8-2.95-1.8 0-2.08 1.41-2.08 2.86v5.49H9.47V9h3.4v1.56h.05c.47-.9 1.6-1.85 3.3-1.85 3.53 0 4.18 2.33 4.18 5.36v6.38zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.23 0z" />
                </svg>
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                className={footerLinkClass}
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
              >
                X
              </a>
              <a
                className={footerLinkClass}
                href="https://dribbble.com"
                target="_blank"
                rel="noreferrer"
              >
                Dribbble
              </a>
            </div>
            <a
              href={careersApplicationUrl}
              target="_blank"
              rel="noreferrer"
              className="text-cyan transition-colors duration-300 hover:text-white"
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
