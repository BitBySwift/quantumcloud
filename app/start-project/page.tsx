"use client";

import Image from "next/image";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import {
  type ChangeEvent,
  type FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";

const projectTypes = [
  "Website Development",
  "Mobile App Development",
  "UI/UX Design",
  "SaaS Platform",
  "AI Application",
  "E-commerce",
  "Dashboard/Admin Panel",
  "Custom Software",
  "Cloud Solutions",
];

const pricingTiers = [
  {
    name: "Basic Package",
    price: "Starting from ₹29,000",
    description: "Ideal for new product launches and MVPs.",
    features: [
      "Basic website or mobile app",
      "Modern UI design",
      "Responsive layout",
      "Fast delivery",
      "Multiple revisions free",
      "Basic SEO",
      "Contact form",
      "Clean animations",
    ],
  },
  {
    name: "Professional Package",
    price: "₹60,000 – ₹90,000",
    description: "Built for growth-stage brands and premium apps.",
    features: [
      "Advanced UI/UX",
      "Better animations & transitions",
      "API integration",
      "Admin panel",
      "Performance optimization",
      "Multiple free changes",
      "Faster delivery",
      "6 months free maintenance",
      "Premium support",
    ],
  },
  {
    name: "Advanced / Enterprise Package",
    price: "₹90,000 – ₹6,00,000+",
    description: "For complex, high-impact, and large-scale systems.",
    features: [
      "Advanced animations",
      "High-end UI/UX",
      "Payment gateway integration",
      "Complex backend systems",
      "Custom dashboards",
      "Cloud infrastructure",
      "AI integrations",
      "Full branding support",
      "Logo design included",
      "Domain + Hosting included",
      "Play Store deployment included",
      "App Store guidance",
      "Security optimization",
      "Scalability architecture",
      "Research-based development",
      "Up to 2 years free maintenance",
      "Dedicated support",
      "No hidden charges",
    ],
  },
];

const testimonials = [
  {
    name: "Rahul Mehta",
    company: "NovaGrid Fintech",
    role: "CTO",
    rating: 5,
    review:
      "Quantum Cloud delivered a cinematic product experience with flawless execution. Their AI-first approach accelerated our launch by weeks.",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&w=120&h=120&q=80",
  },
  {
    name: "Sarah Johnson",
    company: "Lumen Health",
    role: "Product Lead",
    rating: 5,
    review:
      "The team translated complex requirements into a premium UI/UX with zero friction. Communication and delivery were elite.",
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=facearea&w=120&h=120&q=80",
  },
  {
    name: "Ahmed Khan",
    company: "Orbit Commerce",
    role: "Founder",
    rating: 5,
    review:
      "We saw immediate performance gains and higher conversions after launch. Their attention to detail is unmatched.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&w=120&h=120&q=80",
  },
  {
    name: "Priya Sharma",
    company: "Synapse Labs",
    role: "Director",
    rating: 5,
    review:
      "From discovery to deployment, everything felt premium. Quantum Cloud made our vision feel truly futuristic.",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=facearea&w=120&h=120&q=80",
  },
  {
    name: "Daniel Lee",
    company: "PulseWorks",
    role: "Operations Head",
    rating: 5,
    review:
      "Their team handled complex integrations and delivered a sleek dashboard on time. Support after launch has been exceptional.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&w=120&h=120&q=80",
  },
];

const faqs = [
  {
    question: "How long does development take?",
    answer:
      "Timelines depend on scope, but most premium builds complete within 3-8 weeks after final requirements.",
  },
  {
    question: "Is maintenance included?",
    answer:
      "Professional and Enterprise packages include free maintenance. We also offer tailored support retainers.",
  },
  {
    question: "Are there hidden charges?",
    answer:
      "No. We maintain transparent pricing and confirm all deliverables before starting.",
  },
  {
    question: "Will you deploy apps on Play Store?",
    answer:
      "Yes, our Enterprise package includes Play Store deployment and guidance for App Store submissions.",
  },
  {
    question: "Can project requirements change later?",
    answer:
      "Yes, we support iterative changes through agile sprints and clear change management.",
  },
  {
    question: "Do you provide hosting/domain?",
    answer:
      "Enterprise packages include domain + hosting. We can also help with setup for other tiers.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We work with modern stacks including Next.js, React Native, Node, Python, AI tooling, and cloud-native platforms.",
  },
  {
    question: "Do you offer support after delivery?",
    answer:
      "Yes, we provide dedicated support options and ongoing optimization packages.",
  },
];

const inputClasses =
  "mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 placeholder:text-white/40 focus:border-cyan/60 focus:outline-none";

const toastDurationMs = 5000;
const minMobileDigits = 7;
const maxMobileDigits = 15;
const defaultErrorMessage = "Transmission failed. Please try again shortly.";
const successMessageText =
  "Your inquiry has been submitted successfully. Quantum Cloud team will contact you shortly.";

const emailServiceId = "service_5ode2j7";
const emailTemplateId = "template_fs6c2fr";
const emailPublicKey = "UQxzgxG9khq513W3H";

type FormValues = {
  fullName: string;
  email: string;
  mobile: string;
  country: string;
  company: string;
  projectType: string;
  preferredContactTime: string;
  timeline: string;
  budget: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialFormValues: FormValues = {
  fullName: "",
  email: "",
  mobile: "",
  country: "",
  company: "",
  projectType: "",
  preferredContactTime: "",
  timeline: "",
  budget: "",
  message: "",
};

export default function StartProject() {
  const loopingTestimonials = [...testimonials, ...testimonials];
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
    }, toastDurationMs);
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
    const mobilePattern = /^[+]?[\d\s().-]+$/;

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
    } else {
      const digitCount = values.mobile.replace(/\D/g, "").length;
      if (digitCount < minMobileDigits || digitCount > maxMobileDigits) {
        nextErrors.mobile = "Enter a valid mobile number.";
      }
    }
    if (!values.country.trim()) {
      nextErrors.country = "Country is required.";
    }
    if (!values.projectType.trim()) {
      nextErrors.projectType = "Project type is required.";
    }
    if (!values.preferredContactTime.trim()) {
      nextErrors.preferredContactTime = "Preferred contact time is required.";
    }
    if (!values.message.trim()) {
      nextErrors.message = "Please share your project requirements.";
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
      await emailjs.send(
        emailServiceId,
        emailTemplateId,
        {
          form_type: "Start Project",
          from_name: formValues.fullName,
          reply_to: formValues.email,
          email: formValues.email,
          mobile: formValues.mobile,
          country: formValues.country,
          company: formValues.company,
          project_type: formValues.projectType,
          preferred_contact_time: formValues.preferredContactTime,
          timeline: formValues.timeline,
          budget: formValues.budget,
          message: formValues.message,
          to_email: "quantumcloud.team@gmail.com",
        },
        emailPublicKey,
      );

      setFormValues(initialFormValues);
      setSuccessMessage(successMessageText);
      setToastMessage("");
    } catch (error) {
      const message =
        error instanceof Error ? error.message : defaultErrorMessage;
      showToast(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#05060a] px-6 py-16 text-white sm:px-10">
      <div className="pointer-events-none absolute inset-0 starfield opacity-30" />
      <div className="pointer-events-none absolute inset-0 gradient-veil opacity-50" />

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-14">
        <header className="flex flex-col gap-6">
          <p className="text-sm uppercase tracking-[0.4em] text-cyan/70">
            Start Project
          </p>
          <h1 className="section-title text-4xl font-semibold text-white sm:text-5xl">
            Launch a premium project with Quantum Cloud.
          </h1>
          <p className="max-w-3xl text-base text-white/70 sm:text-lg">
            Share your requirements and our team will design a cinematic,
            future-ready solution tailored to your business goals.
          </p>
          <Link className="text-sm text-cyan hover:text-white" href="/">
            ← Back to Quantum Cloud
          </Link>
        </header>

        <section className="glass-panel glow-card rounded-[28px] px-6 py-10 sm:px-10">
          <div className="flex flex-col gap-4">
            <p className="text-sm uppercase tracking-[0.4em] text-cyan/70">
              Project Inquiry
            </p>
            <h2 className="section-title text-3xl font-semibold text-white">
              Tell us about your vision.
            </h2>
          </div>
          <form
            className="mt-8 flex flex-col gap-6"
            noValidate
            onSubmit={handleSubmit}
          >
            <div className="grid gap-5 md:grid-cols-2">
              <label className="text-sm text-white/70">
                Full Name
                <input
                  className={inputClasses}
                  name="fullName"
                  type="text"
                  placeholder="Your full name"
                  value={formValues.fullName}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.fullName)}
                  aria-describedby={errors.fullName ? "fullName-error" : undefined}
                  required
                />
                {errors.fullName && (
                  <span id="fullName-error" className="mt-2 block text-xs text-rose-200">
                    {errors.fullName}
                  </span>
                )}
              </label>
              <label className="text-sm text-white/70">
                Email Address
                <input
                  className={inputClasses}
                  name="email"
                  type="email"
                  placeholder="you@company.com"
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
                  type="tel"
                  placeholder="+91 98765 43210"
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
                  type="text"
                  placeholder="Country"
                  value={formValues.country}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.country)}
                  aria-describedby={errors.country ? "country-error" : undefined}
                  required
                />
                {errors.country && (
                  <span id="country-error" className="mt-2 block text-xs text-rose-200">
                    {errors.country}
                  </span>
                )}
              </label>
              <label className="text-sm text-white/70">
                Company Name (optional)
                <input
                  className={inputClasses}
                  name="company"
                  type="text"
                  placeholder="Company or startup"
                  value={formValues.company}
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
                  aria-invalid={Boolean(errors.projectType)}
                  aria-describedby={errors.projectType ? "projectType-error" : undefined}
                  required
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
                {errors.projectType && (
                  <span
                    id="projectType-error"
                    className="mt-2 block text-xs text-rose-200"
                  >
                    {errors.projectType}
                  </span>
                )}
              </label>
              <label className="text-sm text-white/70">
                Preferred Contact Time
                <select
                  className={inputClasses}
                  name="preferredContactTime"
                  value={formValues.preferredContactTime}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.preferredContactTime)}
                  aria-describedby={
                    errors.preferredContactTime ? "preferredContactTime-error" : undefined
                  }
                  required
                >
                  <option value="" disabled>
                    Select a time
                  </option>
                  <option>Morning</option>
                  <option>Afternoon</option>
                  <option>Evening</option>
                  <option>Flexible</option>
                </select>
                {errors.preferredContactTime && (
                  <span
                    id="preferredContactTime-error"
                    className="mt-2 block text-xs text-rose-200"
                  >
                    {errors.preferredContactTime}
                  </span>
                )}
              </label>
              <label className="text-sm text-white/70">
                Expected Delivery Timeline
                <select
                  className={inputClasses}
                  name="timeline"
                  value={formValues.timeline}
                  onChange={handleChange}
                >
                  <option value="">Select timeline</option>
                  <option>2-4 weeks</option>
                  <option>1-2 months</option>
                  <option>2-3 months</option>
                  <option>3+ months</option>
                </select>
              </label>
              <label className="text-sm text-white/70 md:col-span-2">
                Budget Range
                <select
                  className={inputClasses}
                  name="budget"
                  value={formValues.budget}
                  onChange={handleChange}
                >
                  <option value="">Select budget</option>
                  <option>₹29,000 - ₹60,000</option>
                  <option>₹60,000 - ₹90,000</option>
                  <option>₹90,000 - ₹2,00,000</option>
                  <option>₹2,00,000 - ₹6,00,000+</option>
                </select>
              </label>
              <label className="text-sm text-white/70 md:col-span-2">
                Message
                <textarea
                  className={`${inputClasses} min-h-[140px] resize-none`}
                  name="message"
                  placeholder="Describe your goals, features, and expectations."
                  value={formValues.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  required
                />
                {errors.message && (
                  <span id="message-error" className="mt-2 block text-xs text-rose-200">
                    {errors.message}
                  </span>
                )}
              </label>
            </div>
            <button
              type="submit"
              className={`glow-button flex w-fit items-center justify-center gap-2 rounded-full bg-cyan px-6 py-3 text-sm font-semibold text-[#031018] transition ${
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
            {successMessage && (
              <div className="rounded-2xl border border-cyan/40 bg-cyan/10 px-4 py-4 text-center text-sm uppercase tracking-[0.3em] text-cyan/80 shadow-[0_0_30px_rgba(88,230,255,0.35)]">
                {successMessage}
              </div>
            )}
          </form>
        </section>

        <section className="flex flex-col gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-cyan/70">
              Pricing
            </p>
            <h2 className="section-title text-3xl font-semibold text-white">
              Premium packages for every scale.
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className="glass-panel glow-card relative flex h-full flex-col gap-5 rounded-[28px] px-6 py-8 transition hover:-translate-y-2 hover:shadow-[0_0_45px_rgba(88,230,255,0.25)]"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-cyan/70">
                    {tier.name}
                  </p>
                  <p className="mt-3 text-2xl font-semibold text-white">
                    {tier.price}
                  </p>
                  <p className="mt-2 text-sm text-white/70">
                    {tier.description}
                  </p>
                </div>
                <ul className="grid gap-3 text-sm text-white/70">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-cyan shadow-[0_0_10px_rgba(88,230,255,0.9)]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-cyan/70">
              Testimonials
            </p>
            <h2 className="section-title text-3xl font-semibold text-white">
              Trusted by visionary founders and teams.
            </h2>
          </div>
          <div className="overflow-hidden">
            <div className="carousel-track flex w-max gap-6 motion-reduce:animate-none">
              {loopingTestimonials.map((testimonial, index) => (
                <article
                  key={`${testimonial.name}-${index}`}
                  aria-hidden={index >= testimonials.length}
                  className="glass-panel glow-card w-[280px] flex-shrink-0 rounded-2xl px-5 py-6 text-sm text-white/70 sm:w-[320px]"
                >
                  <div className="flex items-center gap-3">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-full border border-white/20 object-cover"
                    />
                    <div>
                      <p className="text-base font-semibold text-white">
                        {testimonial.name}
                      </p>
                      <p className="text-xs uppercase tracking-[0.3em] text-cyan/70">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-white/70">
                    {testimonial.review}
                  </p>
                  <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/50">
                    <span>{testimonial.role}</span>
                    <span className="text-cyan">
                      {"★".repeat(testimonial.rating)}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-cyan/70">
              FAQ
            </p>
            <h2 className="section-title text-3xl font-semibold text-white">
              Answers to common questions.
            </h2>
          </div>
          <div className="grid gap-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white/70 transition"
              >
                <summary className="flex cursor-pointer items-center justify-between text-base font-semibold text-white">
                  {faq.question}
                  <span className="text-cyan transition group-open:rotate-180">
                    ⌄
                  </span>
                </summary>
                <p className="mt-3 text-sm text-white/70">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 max-w-sm rounded-2xl border border-rose-500/40 bg-[#12070b]/90 px-4 py-3 text-sm text-rose-100 shadow-[0_0_30px_rgba(255,90,120,0.35)] backdrop-blur">
          {toastMessage}
        </div>
      )}
    </div>
  );
}
