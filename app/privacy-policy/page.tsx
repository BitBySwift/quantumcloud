import Link from "next/link";

const sections = [
  {
    title: "User Data Protection",
    body: "Quantum Cloud safeguards all client and candidate data using encrypted infrastructure, strict access controls, and audited operational protocols.",
  },
  {
    title: "Information Collection",
    body: "We collect only the information required to evaluate project feasibility, deliver services, or support recruitment. This may include contact details, project requirements, and technical documentation.",
  },
  {
    title: "Cookies Usage",
    body: "Our digital experiences use essential cookies to improve performance, analytics, and security. You can adjust cookie preferences within your browser settings.",
  },
  {
    title: "Security Measures",
    body: "We apply industry-leading security measures including continuous monitoring, secure hosting environments, and secure development lifecycles.",
  },
  {
    title: "Intellectual Property Protection",
    body: "All content, interfaces, and materials produced by Quantum Cloud remain protected intellectual property and are governed by client agreements.",
  },
  {
    title: "User Responsibilities",
    body: "Users must provide accurate information, respect confidentiality obligations, and avoid unauthorized access or misuse of Quantum Cloud platforms.",
  },
  {
    title: "Limitation of Liability",
    body: "Quantum Cloud is not liable for indirect, incidental, or consequential damages arising from the use of our services or platforms.",
  },
  {
    title: "Compliance With Applicable Laws",
    body: "We comply with applicable privacy laws and regulations relevant to our operations and client engagements.",
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="relative min-h-screen bg-[#05060a] px-6 py-16 text-white sm:px-10">
      <div className="pointer-events-none absolute inset-0 starfield opacity-30" />
      <div className="pointer-events-none absolute inset-0 gradient-veil opacity-50" />

      <main className="relative z-10 mx-auto flex w-full max-w-4xl flex-col gap-10">
        <div className="flex flex-col gap-4">
          <p className="text-sm uppercase tracking-[0.4em] text-cyan/70">
            Policy
          </p>
          <h1 className="section-title text-4xl font-semibold text-white">
            Privacy Policy
          </h1>
          <p className="text-white/70">
            Quantum Cloud respects your privacy and protects your information
            with enterprise-grade security practices.
          </p>
          <Link className="text-cyan hover:text-white" href="/">
            ← Back to Quantum Cloud
          </Link>
        </div>

        <section className="glass-panel glow-card flex flex-col gap-6 rounded-[28px] px-6 py-10 sm:px-10">
          {sections.map((section) => (
            <div key={section.title} className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold text-white">
                {section.title}
              </h2>
              <p className="text-sm text-white/70">{section.body}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
