import Link from "next/link";

const sections = [
  {
    title: "Company Status",
    body: "Quantum Cloud is a private software development and advanced technology company. All engagements are subject to internal review and approval.",
  },
  {
    title: "Service Availability",
    body: "Services are offered based on capacity, technical alignment, and strategic fit. Quantum Cloud reserves the right to accept or reject any project or partnership.",
  },
  {
    title: "Intellectual Property",
    body: "All intellectual property, designs, code, and proprietary frameworks produced by Quantum Cloud remain the sole property of Quantum Cloud unless otherwise stated in a written agreement.",
  },
  {
    title: "Unauthorized Use",
    body: "Unauthorized copying, redistribution, or misuse of Quantum Cloud materials, branding, or deliverables is strictly prohibited.",
  },
  {
    title: "Dispute Resolution",
    body: "Any disputes arising from Quantum Cloud services will be resolved through confidential arbitration or mediation prior to court proceedings.",
  },
  {
    title: "Account Termination Rights",
    body: "Quantum Cloud may suspend or terminate access to services if user obligations are breached, security risks are detected, or agreements are violated.",
  },
  {
    title: "Service Modification Rights",
    body: "Quantum Cloud may modify, enhance, or discontinue services at any time to maintain quality, security, and technical advancement.",
  },
  {
    title: "Confidentiality",
    body: "All client information, project details, and proprietary materials are treated as confidential and protected through strict internal controls.",
  },
  {
    title: "Client Obligations",
    body: "Clients must provide accurate project details, respect intellectual property boundaries, and comply with all applicable laws and contractual terms.",
  },
  {
    title: "Legal Jurisdiction",
    body: "These terms are governed by the applicable laws and jurisdiction of Quantum Cloud’s principal operating location.",
  },
];

export default function TermsAndConditions() {
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
            Terms & Conditions
          </h1>
          <p className="text-white/70">
            These terms govern all engagements, services, and interactions with
            Quantum Cloud.
          </p>
          <Link className="text-cyan hover:text-white" href="/">
            ← Back to Quantum Cloud
          </Link>
        </div>

        <section className="glass-panel glow-card flex flex-col gap-6 rounded-[28px] px-6 py-10 sm:px-10">
          <div className="rounded-2xl border border-cyan/40 bg-cyan/10 px-5 py-4 text-sm text-white/80">
            <p className="text-base font-semibold text-cyan">Refunds</p>
            <p className="mt-2 text-sm text-white/80">
              Refund eligibility and processing are governed by our official
              Refund Policy.
            </p>
            <Link className="mt-3 inline-flex text-cyan hover:text-white" href="/refund-policy">
              View Refund Policy →
            </Link>
          </div>
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
