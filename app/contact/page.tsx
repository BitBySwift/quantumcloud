"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  type ChangeEvent,
  type FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";

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

const formEndpoint = "https://formspree.io/f/mqejgnoj";

type FormValues = {
  fullName: string;
  email: string;
  mobile: string;
  country: string;
  projectType: string;
  preferredContactTime: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialFormValues: FormValues = {
  fullName: "",
  email: "",
  mobile: "",
  country: "",
  projectType: "",
  preferredContactTime: "",
  message: "",
};

export default function ContactPage() {
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const toastTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (toastTimeoutRef.current) {
        clearTimeout(toastTimeoutRef.current);
      }
    };
  }, []);

  const showToast = (message: string) => {
    setToastMessage(message);
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }
    toastTimeoutRef.current = setTimeout(() => {
      setToastMessage("");
    }, 5000);
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormValues]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (successMessage) {
      setSuccessMessage("");
    }
  };

  const validateForm = (values: FormValues) => {
    const nextErrors: FormErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobilePattern = /^[+]?[\d\s().-]{7,}$/;

    if (!values.fullName.trim()) {
      nextErrors.fullName = "Full name is required.";
    }
    if (!values.email.trim()) {
      nextErrors.email = "Email address is required.";
    } else if (!emailPattern.test(values.email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!values.mobile.trim()) {
      nextErrors.mobile = "Mobile number is required.";
    } else if (!mobilePattern.test(values.mobile)) {
      nextErrors.mobile = "Enter a valid mobile number.";
    }
    if (!values.message.trim()) {
      nextErrors.message = "Please share your project goals.";
    }

    return nextErrors;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) {
      return;
    }

    const validationErrors = validateForm(formValues);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});
    setSuccessMessage("");
    try {
      const payload = new FormData();
      Object.entries(formValues).forEach(([key, value]) => {
        payload.append(key, value);
      });

      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: payload,
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        const message =
          data?.errors?.[0]?.message ??
          "Transmission failed. Please try again shortly.";
        throw new Error(message);
      }

      setFormValues(initialFormValues);
      setSuccessMessage("Transmission Received Successfully");
      setToastMessage("");
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Transmission failed. Please try again shortly.";
      showToast(message);
    } finally {
      setIsSubmitting(false);
    }
  };

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

        <section
          id="contact-form"
          className="glass-panel glow-card rounded-[28px] px-6 py-10 sm:px-10"
        >
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
            noValidate
            onSubmit={handleSubmit}
          >
            <label className="text-sm text-white/70">
              Full Name
              <input
                className={inputClasses}
                name="fullName"
                placeholder="Full name"
                type="text"
                value={formValues.fullName}
                onChange={handleChange}
                aria-invalid={Boolean(errors.fullName)}
                aria-describedby={errors.fullName ? "fullName-error" : undefined}
                required
              />
              {errors.fullName && (
                <span
                  id="fullName-error"
                  className="mt-2 block text-xs text-rose-200"
                >
                  {errors.fullName}
                </span>
              )}
            </label>
            <label className="text-sm text-white/70">
              Email Address
              <input
                className={inputClasses}
                name="email"
                placeholder="Email address"
                type="email"
                value={formValues.email}
                onChange={handleChange}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
                required
              />
              {errors.email && (
                <span id="email-error" className="mt-2 block text-xs text-rose-200">
                  {errors.email}
                </span>
              )}
            </label>
            <label className="text-sm text-white/70">
              Mobile Number
              <input
                className={inputClasses}
                name="mobile"
                placeholder="Mobile number"
                type="tel"
                value={formValues.mobile}
                onChange={handleChange}
                aria-invalid={Boolean(errors.mobile)}
                aria-describedby={errors.mobile ? "mobile-error" : undefined}
                required
              />
              {errors.mobile && (
                <span id="mobile-error" className="mt-2 block text-xs text-rose-200">
                  {errors.mobile}
                </span>
              )}
            </label>
            <label className="text-sm text-white/70">
              Country
              <input
                className={inputClasses}
                name="country"
                placeholder="Country"
                type="text"
                value={formValues.country}
                onChange={handleChange}
              />
            </label>
            <label className="text-sm text-white/70">
              Project Type
              <select
                className={inputClasses}
                name="projectType"
                value={formValues.projectType}
                onChange={handleChange}
              >
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
              <select
                className={inputClasses}
                name="preferredContactTime"
                value={formValues.preferredContactTime}
                onChange={handleChange}
              >
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
                name="message"
                placeholder="Tell us about your goals, timeline, and expectations."
                value={formValues.message}
                onChange={handleChange}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
                required
              />
              {errors.message && (
                <span
                  id="message-error"
                  className="mt-2 block text-xs text-rose-200"
                >
                  {errors.message}
                </span>
              )}
            </label>
            <div className="md:col-span-2">
              <button
                type="submit"
                className={`glow-button flex items-center justify-center gap-2 rounded-full bg-cyan px-6 py-3 text-sm font-semibold text-[#031018] transition ${
                  isSubmitting
                    ? "cursor-not-allowed opacity-70"
                    : "hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(88,230,255,0.6)]"
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting && (
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#031018]/80 border-t-transparent" />
                )}
                <span>{isSubmitting ? "Transmitting..." : "Submit Inquiry"}</span>
              </button>
            </div>
            {successMessage && (
              <motion.div
                className="md:col-span-2 rounded-2xl border border-cyan/40 bg-cyan/10 px-4 py-4 text-center text-sm uppercase tracking-[0.3em] text-cyan/80 shadow-[0_0_30px_rgba(88,230,255,0.35)]"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: easing }}
              >
                {successMessage}
              </motion.div>
            )}
          </motion.form>
        </section>
      </main>
      {toastMessage && (
        <motion.div
          className="fixed bottom-6 right-6 z-50 max-w-sm rounded-2xl border border-rose-500/40 bg-[#12070b]/90 px-4 py-3 text-sm text-rose-100 shadow-[0_0_30px_rgba(255,90,120,0.35)] backdrop-blur"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {toastMessage}
        </motion.div>
      )}
    </div>
  );
}
