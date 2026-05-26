import Link from "next/link";

const perks = [
  {
    title: "5-Day Work Week",
    detail: "Balanced weekly cadence built for peak focus and recovery.",
    icon: "🗓️",
  },
  {
    title: "Sick Leave Paid",
    detail: "Health-first policy with paid recovery time.",
    icon: "🩺",
  },
  {
    title: "Overtime Paid",
    detail: "Extra effort is always recognized and compensated.",
    icon: "⏱️",
  },
  {
    title: "Free Lunch",
    detail: "Premium meals on-site for energized teams.",
    icon: "🥗",
  },
  {
    title: "Flexible Work Environment",
    detail: "Hybrid-friendly culture with autonomy and trust.",
    icon: "🌗",
  },
  {
    title: "Performance Bonuses",
    detail: "High-impact results earn accelerated rewards.",
    icon: "🏆",
  },
  {
    title: "Company Tour Every 6 Months",
    detail: "Biannual retreats to connect, celebrate, and explore.",
    icon: "✈️",
  },
  {
    title: "Hotel + Full Meals Included",
    detail: "Tours include hotel, dinner, breakfast, and lunch.",
    icon: "🏨",
  },
  {
    title: "Learning & Growth Opportunities",
    detail: "Upskilling pathways for design, AI, cloud, and product.",
    icon: "📚",
  },
  {
    title: "Friendly Work Culture",
    detail: "People-first teams with empathy and collaboration.",
    icon: "🤝",
  },
  {
    title: "Futuristic Technologies",
    detail: "Ship AI-first, cloud-native, and immersive experiences.",
    icon: "🚀",
  },
  {
    title: "Remote Opportunities",
    detail: "Work from anywhere with global-first collaboration tools.",
    icon: "🌍",
  },
  {
    title: "Paid Training Sessions",
    detail: "Hands-on training with external experts and mentors.",
    icon: "🎓",
  },
  {
    title: "Career Growth Support",
    detail: "Personal development plans tailored to your trajectory.",
    icon: "🧭",
  },
  {
    title: "Festival Bonuses",
    detail: "Celebrate milestones with premium seasonal bonuses.",
    icon: "🎉",
  },
  {
    title: "Gaming & Chill Sessions",
    detail: "Team bonding through curated gaming and lounge time.",
    icon: "🎮",
  },
  {
    title: "Premium Office Environment",
    detail: "Cinematic workspaces with high-end amenities.",
    icon: "🏙️",
  },
  {
    title: "Team Celebration Events",
    detail: "Launch parties and milestone celebrations built-in.",
    icon: "✨",
  },
  {
    title: "Appreciation Rewards",
    detail: "Recognition programs that spotlight standout talent.",
    icon: "💠",
  },
];

export default function WhyJoin() {
  return (
    <div className="relative min-h-screen bg-[#05060a] px-6 py-16 text-white sm:px-10">
      <div className="pointer-events-none absolute inset-0 starfield opacity-30" />
      <div className="pointer-events-none absolute inset-0 gradient-veil opacity-50" />

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-12">
        <header className="flex flex-col gap-6">
          <p className="text-sm uppercase tracking-[0.4em] text-cyan/70">
            Why Join Quantum Cloud
          </p>
          <h1 className="section-title text-4xl font-semibold text-white sm:text-5xl">
            A premium culture engineered for elite builders.
          </h1>
          <p className="max-w-3xl text-base text-white/70 sm:text-lg">
            Quantum Cloud blends cinematic design with ambitious engineering,
            creating a work environment where innovators build futuristic
            experiences and grow with high-impact teams.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://forms.gle/t7dCtuDMzsnx37N76"
              target="_blank"
              rel="noreferrer"
              className="glow-button rounded-full bg-cyan px-6 py-3 text-sm font-semibold text-[#031018] transition hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(88,230,255,0.6)]"
            >
              Apply Now
            </a>
            <Link
              href="/careers"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-cyan/60 hover:text-white"
            >
              Explore Careers
            </Link>
            <Link className="text-sm text-cyan hover:text-white" href="/">
              ← Back to Quantum Cloud
            </Link>
          </div>
        </header>

        <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {perks.map((perk) => (
            <div
              key={perk.title}
              className="glass-panel glow-card rounded-2xl px-6 py-6 transition hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(88,230,255,0.25)]"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.3em] text-cyan/70">
                  Quantum Perk
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan/40 bg-cyan/10 text-lg text-cyan">
                  {perk.icon}
                </span>
              </div>
              <h2 className="mt-5 text-xl font-semibold text-white">
                {perk.title}
              </h2>
              <p className="mt-3 text-sm text-white/70">{perk.detail}</p>
            </div>
          ))}
        </section>

        <section className="glass-panel glow-card rounded-[28px] px-6 py-10 sm:px-10">
          <div className="flex flex-col gap-4">
            <h2 className="section-title text-3xl font-semibold text-white">
              Life at Quantum Cloud
            </h2>
            <p className="text-white/70">
              From immersive innovation labs to transparent leadership, every
              team member has the space, tools, and confidence to ship
              transformative work.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Premium Workspace",
                detail:
                  "Glassmorphism interiors, cinematic lighting, and calm focus zones.",
              },
              {
                title: "Future-Ready Tools",
                detail:
                  "Modern stacks, AI copilots, and high-performance workflows.",
              },
              {
                title: "Recognition Culture",
                detail:
                  "Monthly appreciation rewards and milestone celebrations.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-5 text-sm text-white/70 transition hover:border-cyan/50 hover:text-white"
              >
                <p className="text-base font-semibold text-white">{item.title}</p>
                <p className="mt-2 text-sm text-white/70">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
