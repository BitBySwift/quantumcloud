import Image from "next/image";
import Link from "next/link";

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

export default function StartProject() {
  const loopingTestimonials = [...testimonials, ...testimonials];

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
            action="#"
            method="post"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <label className="text-sm text-white/70">
                Client Name
                <input
                  className={inputClasses}
                  name="clientName"
                  type="text"
                  placeholder="Your full name"
                  required
                />
              </label>
              <label className="text-sm text-white/70">
                Email Address
                <input
                  className={inputClasses}
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  required
                />
              </label>
              <label className="text-sm text-white/70">
                Mobile Number
                <input
                  className={inputClasses}
                  name="mobile"
                  type="tel"
                  placeholder="+91 98765 43210"
                  required
                />
              </label>
              <label className="text-sm text-white/70">
                Country
                <input
                  className={inputClasses}
                  name="country"
                  type="text"
                  placeholder="Country"
                  required
                />
              </label>
              <label className="text-sm text-white/70">
                Company Name (optional)
                <input
                  className={inputClasses}
                  name="company"
                  type="text"
                  placeholder="Company or startup"
                />
              </label>
              <label className="text-sm text-white/70">
                Project Type
                <select className={inputClasses} name="projectType" required>
                  <option value="">Select a project type</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </label>
              <label className="text-sm text-white/70">
                Preferred Contact Time
                <select className={inputClasses} name="contactTime" required>
                  <option value="">Select a time</option>
                  <option>Morning</option>
                  <option>Afternoon</option>
                  <option>Evening</option>
                  <option>Flexible</option>
                </select>
              </label>
              <label className="text-sm text-white/70">
                Expected Delivery Timeline
                <select className={inputClasses} name="timeline" required>
                  <option value="">Select timeline</option>
                  <option>2-4 weeks</option>
                  <option>1-2 months</option>
                  <option>2-3 months</option>
                  <option>3+ months</option>
                </select>
              </label>
              <label className="text-sm text-white/70 md:col-span-2">
                Budget Range
                <select className={inputClasses} name="budget" required>
                  <option value="">Select budget</option>
                  <option>₹29,000 - ₹60,000</option>
                  <option>₹60,000 - ₹90,000</option>
                  <option>₹90,000 - ₹2,00,000</option>
                  <option>₹2,00,000 - ₹6,00,000+</option>
                </select>
              </label>
              <label className="text-sm text-white/70 md:col-span-2">
                Project Requirements
                <textarea
                  className={`${inputClasses} min-h-[140px] resize-none`}
                  name="requirements"
                  placeholder="Describe your goals, features, and expectations."
                  required
                />
              </label>
            </div>
            <button
              type="submit"
              className="glow-button w-fit rounded-full bg-cyan px-6 py-3 text-sm font-semibold text-[#031018] transition hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(88,230,255,0.6)]"
            >
              Submit Inquiry
            </button>
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
    </div>
  );
}
