import Link from "next/link";

const refundRules = [
  {
    title: "Project not started",
    body:
      "If project development has NOT started, the client has not fully confirmed the project, requirements were not provided, or work was never officially approved, then 70% of the upfront payment can be refunded. The remaining amount may be deducted as processing or consultation charges.",
  },
  {
    title: "Work officially started",
    body:
      "After project payment is completed and work has officially started, no refund will be provided.",
  },
  {
    title: "Candidate payments",
    body:
      "Any payment made by candidates or job applicants for any purpose is non-refundable.",
  },
];

export default function RefundPolicy() {
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
            Refund Policy
          </h1>
          <p className="text-white/70">
            Quantum Cloud maintains transparency and a no-hidden-charges policy.
          </p>
          <Link className="text-cyan hover:text-white" href="/">
            ← Back to Quantum Cloud
          </Link>
        </div>

        <section className="glass-panel glow-card flex flex-col gap-6 rounded-[28px] px-6 py-10 sm:px-10">
          <ol className="flex flex-col gap-6 text-sm text-white/70">
            {refundRules.map((rule, index) => (
              <li key={rule.title} className="flex flex-col gap-2">
                <p className="text-base font-semibold text-white">
                  {index + 1}. {rule.title}
                </p>
                <p>{rule.body}</p>
              </li>
            ))}
          </ol>
          <div className="rounded-2xl border border-cyan/40 bg-cyan/10 px-5 py-4 text-sm text-white/80">
            Quantum Cloud maintains transparency and no hidden charges policy.
          </div>
        </section>
      </main>
    </div>
  );
}
