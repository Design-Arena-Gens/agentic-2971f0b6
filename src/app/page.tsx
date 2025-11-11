export default function Home() {
  const steps = [
    {
      title: "Validate demand",
      description:
        "Interview 5–10 ideal readers, test pricing with a waitlist landing page, and capture emails before writing the full book.",
      cta: "Launch a waitlist with a single CTA and value proposition.",
    },
    {
      title: "Package irresistible value",
      description:
        "Write the core manuscript, then layer in bonuses like worksheets, swipe files, or interview recordings that increase perceived value.",
      cta: "Bundle 2–3 bonuses that remove implementation friction.",
    },
    {
      title: "Launch and iterate",
      description:
        "Schedule a 10-day launch campaign, follow up with evergreen email automation, and ship quarterly updates to keep sales compounding.",
      cta: "Plan a repeatable promo calendar tied to your content strategy.",
    },
  ];

  const playbook = [
    {
      title: "Audience engine",
      items: [
        "Publish 2 long-form authority posts/month",
        "Repurpose into shorts & carousels for daily reach",
        "Run a weekly value-packed live session or webinar",
      ],
    },
    {
      title: "Conversion assets",
      items: [
        "High-converting landing page with testimonials and bonus stack",
        "Lead magnet mini-guide that tees up the ebook offer",
        "Automated email runway: teaser → story → offer → urgency",
      ],
    },
    {
      title: "Sales operations",
      items: [
        "Stripe or Lemon Squeezy checkout with order bumps",
        "Use Zapier/Make to tag buyers inside your CRM",
        "Post-purchase nurture sequence to drive referrals",
      ],
    },
  ];

  const pricingTiers = [
    {
      name: "Solo Creator",
      price: "$29",
      subtitle: "Validate fast with lean tooling",
      bullets: [
        "One-page landing template",
        "Email launch sequence (5 emails)",
        "Pricing calculator & sales forecast",
      ],
    },
    {
      name: "Growth Team",
      price: "$79",
      subtitle: "Scale with automation & analytics",
      bullets: [
        "Advanced funnel dashboards (Looker Studio)",
        "Partner outreach scripts & SOPs",
        "Affiliate portal starter kit",
      ],
      highlight: true,
    },
    {
      name: "Publisher Plus",
      price: "$149",
      subtitle: "Built for multi-offer libraries",
      bullets: [
        "Multi-product bundle funnel map",
        "CRM lifecycle workflow & automations",
        "Quarterly promotion playbook & planner",
      ],
    },
  ];

  const faqs = [
    {
      question: "Do I need a big audience to sell?",
      answer:
        "No. The playbook focuses on depth over vanity metrics. With 350 engaged subscribers and a persuasive offer stack you can cross $5k per launch.",
    },
    {
      question: "Which platforms does this work with?",
      answer:
        "Use Gumroad, Lemon Squeezy, Kajabi, or your own Stripe checkout. The frameworks cover messaging, funnel strategy, and automations you can adapt anywhere.",
    },
    {
      question: "Can I sell higher-ticket bundles?",
      answer:
        "Yes. Package the ebook with coaching calls or templates. The pricing matrix helps you model bundles up to $497 while keeping conversion rates realistic.",
    },
    {
      question: "Is this for fiction or nonfiction?",
      answer:
        "It’s optimized for nonfiction creators teaching a process, method, or skill. The validation scripts, launch emails, and bonus ideas match that format best.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.25),transparent_55%),radial-gradient(circle_at_bottom,rgba(94,234,212,0.18),transparent_50%)]" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-24 px-6 pb-28 pt-16 sm:px-10 lg:px-14">
        <header className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur">
          <div className="inline-flex max-w-max items-center gap-3 rounded-full border border-cyan-300/40 bg-cyan-300/10 px-4 py-1 text-sm text-cyan-100">
            <span className="font-semibold">Sell Your Ebook</span>
            <span className="text-cyan-200/80">Go from idea → revenue in 30 days</span>
          </div>
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[3.5rem]">
            Craft a launch that converts browsers into buyers and keeps sales compounding every month.
          </h1>
          <p className="max-w-2xl text-lg text-slate-200/90">
            The Ebook Sales Operating System gives you the messaging frameworks, launch plays, and automation workflows to
            validate, package, and sell your digital book without guesswork.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-8 py-3 text-base font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Download the Launch Kit
            </a>
            <a
              href="#playbook"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3 text-base font-semibold text-slate-100 transition hover:border-white/40 hover:text-white"
            >
              Explore the blueprint
            </a>
          </div>
          <div className="grid gap-6 text-sm text-slate-200/70 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm uppercase tracking-wide text-cyan-200/75">Proof</p>
              <p className="mt-2 text-base text-slate-100">Creators using this playbook average $3.2k in the first 14-day launch window.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm uppercase tracking-wide text-cyan-200/75">Audience size</p>
              <p className="mt-2 text-base text-slate-100">Built for creators with 300–5k subscribers or a focused social following.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm uppercase tracking-wide text-cyan-200/75">Time to launch</p>
              <p className="mt-2 text-base text-slate-100">Use the day-by-day calendar and swipe files to ship in 30 days.</p>
            </div>
          </div>
        </header>

        <section className="grid gap-10 lg:grid-cols-[360px_1fr]">
          <div className="sticky top-10 self-start rounded-3xl border border-white/10 bg-slate-900/70 p-8 backdrop-blur">
            <h2 className="text-3xl font-semibold text-white">3-phase launch roadmap</h2>
            <p className="mt-4 text-base text-slate-200/80">
              Ship the right assets at the right time. Every phase includes scripts, templates, and KPIs so you know exactly what to
              execute and how to measure traction.
            </p>
          </div>
          <div className="grid gap-6">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-9 transition hover:border-cyan-200/40 hover:bg-white/10"
              >
                <span className="absolute right-6 top-6 text-6xl font-black text-slate-700/30 sm:text-7xl">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <h3 className="text-2xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-base text-slate-200/90">{step.description}</p>
                <p className="mt-4 inline-flex rounded-full border border-cyan-200/40 bg-cyan-200/15 px-4 py-2 text-sm text-cyan-100">
                  {step.cta}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="playbook" className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-semibold text-white">Full-funnel playbook</h2>
            <p className="max-w-3xl text-base text-slate-200/85">
              Plug each system into your business: attract the right readers, nurture them with narrative storytelling, and close
              with urgency plays that feel natural. Each pillar includes ready-to-use templates, swipe files, and Notion dashboards.
            </p>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {playbook.map((pillar) => (
              <div key={pillar.title} className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-slate-900/60 p-6">
                <h3 className="text-xl font-semibold text-white">{pillar.title}</h3>
                <ul className="space-y-3 text-sm text-slate-200/85">
                  {pillar.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
            <h2 className="text-3xl font-semibold text-white">Promo calendar (launch week)</h2>
            <p className="mt-3 text-base text-slate-200/85">
              Follow the high-converting messaging arc proven across hundreds of digital product launches.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                { day: "Day 1", title: "Announcement", copy: "Introduce the core promise, share origin story, invite to waitlist." },
                { day: "Day 3", title: "Objection breaker", copy: "Handle top two hesitations with testimonials and micro-proof." },
                { day: "Day 6", title: "Behind the scenes", copy: "Show your workflow and bonus materials to reinforce value." },
                { day: "Day 9", title: "Urgency push", copy: "Remind of expiring bonuses, recap transformations, clear CTA." },
              ].map((event) => (
                <div key={event.day} className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
                  <p className="text-xs uppercase tracking-wide text-cyan-200/70">{event.day}</p>
                  <h3 className="mt-2 text-lg font-semibold text-white">{event.title}</h3>
                  <p className="mt-2 text-sm text-slate-200/80">{event.copy}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-300/20 to-emerald-200/10 p-10 text-slate-950">
            <h2 className="text-3xl font-semibold">Metrics that matter</h2>
            <ul className="space-y-4 text-sm text-slate-900/80">
              <li className="flex items-baseline justify-between">
                <span>Landing page conversion</span>
                <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-slate-900">Target: 32%</span>
              </li>
              <li className="flex items-baseline justify-between">
                <span>Email open rate (launch)</span>
                <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-slate-900">Target: 48%</span>
              </li>
              <li className="flex items-baseline justify-between">
                <span>Launch revenue per subscriber</span>
                <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-slate-900">$9.20 median</span>
              </li>
              <li className="flex items-baseline justify-between">
                <span>Evergreen sales velocity</span>
                <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-slate-900">3–5 copies/day</span>
              </li>
            </ul>
            <p className="mt-2 text-sm text-slate-900/70">
              Plug the dashboards into Looker Studio or Airtable to monitor performance automatically.
            </p>
          </div>
        </section>

        <section id="pricing" className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-semibold text-white">Pick your launch kit</h2>
            <p className="max-w-3xl text-base text-slate-200/85">
              Every tier includes the 90-page ebook, Notion planning hub, and video walkthrough library. Upgrade for more automation and
              growth systems.
            </p>
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`flex flex-col gap-6 rounded-3xl border p-8 ${
                  tier.highlight
                    ? "border-cyan-200/60 bg-gradient-to-br from-cyan-300/30 via-slate-900/60 to-transparent shadow-lg shadow-cyan-500/20"
                    : "border-white/10 bg-slate-900/60"
                }`}
              >
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-wide text-cyan-200/70">{tier.subtitle}</p>
                  <h3 className="text-2xl font-semibold text-white">{tier.name}</h3>
                </div>
                <p className="text-4xl font-bold text-white">{tier.price}</p>
                <ul className="space-y-3 text-sm text-slate-200/85">
                  {tier.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-400" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://buy.stripe.com/test_6oE14Fb7nanu0nK5km"
                  className={`inline-flex items-center justify-center rounded-full px-6 py-2 text-sm font-semibold transition ${
                    tier.highlight
                      ? "bg-slate-950 text-cyan-200 hover:bg-slate-900"
                      : "border border-white/20 text-slate-100 hover:border-white/40 hover:text-white"
                  }`}
                >
                  Start selling now
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
            <h2 className="text-3xl font-semibold text-white">Launch tech stack</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {[
                {
                  category: "Sell & deliver",
                  tools: ["Lemon Squeezy checkout", "Revue or Beehiiv for email delivery", "Notion-based customer hub"],
                },
                {
                  category: "Automate",
                  tools: ["Zapier buyer tagging into CRM", "Make scenario for receipt delivery", "Cal.com upsell automations"],
                },
                {
                  category: "Promote",
                  tools: ["Buffer or Typefully scheduling", "Figma promo graphic templates", "A/B tested headline swipe file"],
                },
                {
                  category: "Retain",
                  tools: ["Typeform customer survey", "Referral landing page kit", "Monthly live Q&A structure"],
                },
              ].map((row) => (
                <div key={row.category} className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
                  <p className="text-xs uppercase tracking-wide text-cyan-200/70">{row.category}</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-200/85">
                    {row.tools.map((tool) => (
                      <li key={tool} className="flex gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300" />
                        <span>{tool}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-5 rounded-3xl border border-cyan-200/40 bg-gradient-to-br from-cyan-400/20 via-white/30 to-slate-50/30 p-8 text-slate-900">
            <h3 className="text-2xl font-semibold">Creator success snapshots</h3>
            <div className="space-y-4 text-sm text-slate-900/80">
              <p>
                “I had 800 people on my list. Using the roadmap, I closed $7,400 in 12 days and the evergreen emails keep bringing daily sales.”
              </p>
              <p className="border-l-2 border-slate-900/30 pl-4 text-xs uppercase tracking-wide">Aria Chen · UX Educator</p>
              <p>
                “The bonus stack framework helped me bundle templates + audio interviews. Our conversion rate doubled with the urgency sequence.”
              </p>
              <p className="border-l-2 border-slate-900/30 pl-4 text-xs uppercase tracking-wide">Jordan Miles · AI Copy Coach</p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold text-white">Questions people ask before launching</h2>
              <p className="mt-3 text-base text-slate-200/85">
                Get instant clarity on positioning, platforms, and pricing so you can stop second-guessing and start selling.
              </p>
            </div>
            <a
              href="mailto:launch@ebookos.com?subject=Ebook%20Launch%20Consult"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-2 text-sm font-semibold text-slate-100 transition hover:border-white/40 hover:text-white"
            >
              Ask a strategy question
            </a>
          </div>
          <div className="mt-8 grid gap-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-white/10 bg-slate-900/60 p-6 transition hover:border-cyan-200/40"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-white">
                  {faq.question}
                  <span className="rounded-full border border-white/20 px-3 py-1 text-xs text-slate-200 group-open:hidden">
                    Expand
                  </span>
                  <span className="hidden rounded-full border border-white/20 px-3 py-1 text-xs text-slate-200 group-open:inline">
                    Close
                  </span>
                </summary>
                <p className="mt-4 text-sm text-slate-200/85">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-cyan-200/40 bg-gradient-to-br from-cyan-400/30 via-slate-900/80 to-slate-950 p-12 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-100/80">Next steps</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold text-white sm:text-4xl">
            Your ebook is the start of a product ecosystem. Let’s build the growth engine behind it.
          </h2>
          <p className="mt-4 text-base text-cyan-100/85">
            Download the launch kit, plug in your expertise, and follow the daily playbooks to turn knowledge into recurring revenue.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://buy.stripe.com/test_6oE14Fb7nanu0nK5km"
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-8 py-3 text-base font-semibold text-cyan-200 transition hover:bg-slate-900"
            >
              Grab the Ebook Sales OS
            </a>
            <a
              href="#playbook"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-3 text-base font-semibold text-white transition hover:border-white/60"
            >
              Preview sample assets
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
