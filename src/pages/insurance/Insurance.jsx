import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Seo from "../../components/seo/Seo";
import MotionPage from "../../components/ui/MotionPage";
import { fadeUp, staggerContainer } from "../../components/ui/motionVariants";
import ProCard from "../../components/ui/ProCard";
import { routeSeo } from "../../config/seo";
import { SITE } from "../../config/site";

const frictionPoints = [
  {
    title: "Storm damage is easy to miss",
    body: "Hail marks, lifted shingles, cracked siding, loose flashing, and gutter impact damage can look minor from the ground but turn into leaks and water intrusion later.",
  },
  {
    title: "Scopes can be incomplete",
    body: "Insurance paperwork may not always include every repair item, code detail, accessory, or exterior component affected by the same storm event.",
  },
  {
    title: "Documentation matters",
    body: "Clear photos, measurements, product details, and a practical repair plan help you have a better conversation with your insurance provider.",
  },
];

const blueprint = [
  [
    "01",
    "Free exterior check",
    "We look over roofing, siding, gutters, trim, flashing, and obvious storm-hit areas so you know what condition the property is in.",
  ],
  [
    "02",
    "Damage documentation",
    "We explain what we see in plain language and help organize the photos and repair details you may need for your claim conversation.",
  ],
  [
    "03",
    "Adjuster walkthrough support",
    "When helpful, we can meet on site and discuss the visible exterior damage, materials, and project scope with the insurance representative.",
  ],
  [
    "04",
    "Repair or replacement work",
    "After decisions and approvals are made, we complete the roofing, siding, gutter, or exterior repair work cleanly and professionally.",
  ],
];

const guidanceMap = {
  hail: {
    systemLabel: "roof/exterior system",
    urgency: "Schedule a detailed exterior inspection",
    advice: [
      "Check shingles, vents, gutters, downspouts, siding faces, and soft metal for impact marks.",
      "Take wide photos and close-up photos before temporary repairs hide the original condition.",
    ],
    ageNote:
      "When the roof or exterior system is older, documentation should clearly separate storm damage from normal wear so the conversation stays accurate.",
  },
  wind: {
    systemLabel: "roof edge / shingle system",
    urgency: "Act quickly before water gets under the system",
    advice: [
      "Missing or lifted shingles should be inspected before the next heavy rain.",
      "Look for exposed nails, torn tabs, bent flashing, and loose ridge or edge areas.",
    ],
    ageNote:
      "Older shingles and roof accessories can be more vulnerable to wind uplift, so condition notes and photos should be specific.",
  },
  leak: {
    systemLabel: "leak area / roof system",
    urgency: "High priority — protect the interior first",
    advice: [
      "Document the interior leak and the exterior area above it before cleanup is finished.",
      "A roof leak can involve decking, flashing, valleys, vents, or storm-opened shingle seams.",
    ],
    ageNote:
      "For older leak-prone areas, it is important to document whether the problem is storm-created, age-related, or a combination that needs a practical repair plan.",
  },
  siding: {
    systemLabel: "siding / exterior wall system",
    urgency: "Inspect panels, trim, and water entry points",
    advice: [
      "Cracked or loose siding can let wind-driven rain reach the wall system.",
      "Document each elevation separately so damaged areas are not missed.",
    ],
    ageNote:
      "For older siding, document brittleness, fading, discontinued profiles, and impact damage separately so the repair scope makes sense.",
  },
  gutters: {
    systemLabel: "gutter / drainage system",
    urgency: "Check water flow and fastener damage",
    advice: [
      "Look for dented runs, pulled hangers, crushed downspouts, loose outlets, and water dumping near the foundation.",
      "Gutter damage is often connected to roofline, fascia, or drainage issues, so the whole water path should be checked.",
    ],
    ageNote:
      "For older gutters, document storm dents, sagging, seal failures, and drainage problems separately so replacement versus repair is easier to discuss.",
  },
};

const faqs = [
  [
    "Should I call Barneys before or after I call insurance?",
    "You can call us first for an exterior check so you understand what damage is visible. You are still responsible for contacting your insurance provider, meeting policy deadlines, and following your policy requirements.",
  ],
  [
    "Do you handle the claim for me?",
    "We do not act as your insurance company, public adjuster, or attorney. We help with exterior inspection, photo documentation, construction details, repair information, and professional work after approvals and project choices are made.",
  ],
  [
    "What areas do you inspect after storms?",
    "We commonly look at shingles, roof accessories, siding, gutters, downspouts, trim, flashing, and other exterior areas that may have been affected by hail, wind, falling limbs, or flying debris.",
  ],
];

function Insurance() {
  const [damageType, setDamageType] = useState("hail");
  const [roofAge, setRoofAge] = useState(12);
  const [claimStatus, setClaimStatus] = useState("notFiled");
  const guidance = guidanceMap[damageType];
  const selectedSystemLabel = guidance.systemLabel;

  return (
    <>
      <Seo {...routeSeo.insurance} />
      <MotionPage>
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center"
          >
            <div>
              <motion.p
                variants={fadeUp}
                className="text-xs font-black uppercase tracking-[0.3em] text-amber-300"
              >
                Storm Damage & Insurance Support
              </motion.p>
              <motion.h1
                variants={fadeUp}
                className="mt-4 max-w-4xl text-5xl font-black leading-tight tracking-[-0.055em] text-white md:text-7xl"
              >
                Struggling with storm damage or an exterior claim?
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-2xl text-base leading-8 text-zinc-300"
              >
                Missouri storms can be stressful. Barneys Supply helps
                homeowners slow the process down, understand the visible damage,
                document the exterior correctly, and make informed repair
                decisions for roofing, siding, gutters, and related exterior
                work.
              </motion.p>
              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <a
                  href={SITE.phones.office.href}
                  className="rounded-full bg-gradient-to-r from-red-600 to-amber-400 px-7 py-4 text-center text-sm font-black uppercase tracking-[0.18em] text-white shadow-[0_24px_55px_rgba(185,28,28,0.35)] transition hover:scale-[1.03] hover:brightness-110"
                >
                  Call {SITE.phones.office.label}
                </a>
                <Link
                  to="/contact"
                  className="rounded-full border border-white/15 bg-white/8 px-7 py-4 text-center text-sm font-black uppercase tracking-[0.18em] text-white backdrop-blur transition hover:border-amber-300/50 hover:bg-amber-300/12 hover:text-amber-100"
                >
                  Request Inspection
                </Link>
              </motion.div>
            </div>

            <motion.div variants={fadeUp}>
              <ProCard hover={false} className="p-6 md:p-8">
                <p className="text-xs font-black uppercase tracking-[0.25em] text-red-300">
                  Important first step
                </p>
                <h2 className="mt-3 text-3xl font-black text-white">
                  Do not guess from the ground.
                </h2>
                <p className="mt-4 text-sm leading-7 text-zinc-300">
                  After hail, wind, or falling limbs, the safest next move is a
                  careful exterior inspection. We look for visible signs of
                  storm impact and help you separate cosmetic concerns from
                  issues that can affect water protection.
                </p>
                <div className="mt-6 grid gap-3 text-sm font-bold text-zinc-200">
                  {[
                    "Roofing and shingle damage",
                    "Vinyl siding and trim damage",
                    "Gutter and downspout impact",
                    "Leak-prone flashing areas",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-3"
                    >
                      <span className="size-2 rounded-full bg-amber-300" />
                      {item}
                    </div>
                  ))}
                </div>
              </ProCard>
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-14 grid gap-5 md:grid-cols-3"
          >
            {frictionPoints.map((item, index) => (
              <motion.div variants={fadeUp} key={item.title}>
                <ProCard className="h-full p-6">
                  <p className="text-xs font-black uppercase tracking-[0.24em] text-amber-300">
                    Claim issue 0{index + 1}
                  </p>
                  <h2 className="mt-3 text-2xl font-black text-white">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-zinc-400">
                    {item.body}
                  </p>
                </ProCard>
              </motion.div>
            ))}
          </motion.div>

          <section className="mt-10 grid gap-5 lg:grid-cols-[.85fr_1.15fr]">
            <ProCard hover={false} className="p-6 md:p-8">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-amber-300">
                Claim blueprint helper
              </p>
              <h2 className="mt-3 text-3xl font-black text-white">
                Build your next-step checklist.
              </h2>
              <p className="mt-3 text-sm leading-7 text-zinc-400">
                Select the closest situation and use this as a practical
                starting point before your inspection or claim conversation.
                This helper is construction-focused, not insurance or legal
                advice.
              </p>

              <div className="mt-6 space-y-5">
                <label className="block">
                  <span className="text-xs font-black uppercase tracking-[0.18em] text-zinc-400">
                    Visible damage profile
                  </span>
                  <select
                    value={damageType}
                    onChange={(event) => setDamageType(event.target.value)}
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-zinc-950 px-4 py-3 text-sm font-bold text-zinc-100 outline-hidden focus:border-amber-300/60"
                  >
                    <option value="hail">Hail marks / granule loss</option>
                    <option value="wind">
                      Wind lifted or missing shingles
                    </option>
                    <option value="leak">Active leak or ceiling stain</option>
                    <option value="siding">
                      Cracked siding / exterior impact
                    </option>
                    <option value="gutters">
                      Gutter dents / drainage damage
                    </option>
                  </select>
                </label>

                <label className="block">
                  <span className="flex justify-between gap-4 text-xs font-black uppercase tracking-[0.18em] text-zinc-400">
                    <span>Approximate {selectedSystemLabel} age</span>
                    <span className="shrink-0 text-amber-300">
                      {roofAge} years
                    </span>
                  </span>
                  <input
                    type="range"
                    min="0"
                    max="30"
                    value={roofAge}
                    onChange={(event) => setRoofAge(event.target.value)}
                    className="mt-3 w-full accent-red-600"
                  />
                </label>

                <label className="block">
                  <span className="text-xs font-black uppercase tracking-[0.18em] text-zinc-400">
                    Claim status
                  </span>
                  <select
                    value={claimStatus}
                    onChange={(event) => setClaimStatus(event.target.value)}
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-zinc-950 px-4 py-3 text-sm font-bold text-zinc-100 outline-hidden focus:border-amber-300/60"
                  >
                    <option value="notFiled">Not filed yet</option>
                    <option value="waiting">
                      Filed and waiting on adjuster
                    </option>
                    <option value="underpaid">Denied or underpaid</option>
                  </select>
                </label>
              </div>
            </ProCard>

            <ProCard hover={false} className="p-6 md:p-8">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-red-300">
                Recommended focus
              </p>
              <h2 className="mt-3 text-3xl font-black text-white">
                {guidance.urgency}
              </h2>
              <div className="mt-5 grid gap-3">
                {guidance.advice.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-amber-300/12 bg-amber-300/8 p-4 text-sm leading-7 text-zinc-200"
                  >
                    {item}
                  </div>
                ))}
                {Number(roofAge) > 15 && (
                  <div className="rounded-2xl border border-red-400/20 bg-red-500/10 p-4 text-sm leading-7 text-red-100">
                    {guidance.ageNote} Older materials may also involve wear,
                    matching, or depreciation details, so clear photos and
                    plain-language notes are especially important.
                  </div>
                )}
                {claimStatus === "underpaid" && (
                  <div className="rounded-2xl border border-red-400/20 bg-red-500/10 p-4 text-sm leading-7 text-red-100">
                    Ask for a full written scope from your carrier, then compare
                    it against the visible exterior damage and required repair
                    items before accepting the project plan.
                  </div>
                )}
              </div>
            </ProCard>
          </section>

          <section className="mt-10 grid gap-5 lg:grid-cols-2">
            <ProCard hover={false} className="p-6 md:p-8">
              <h2 className="text-3xl font-black text-white">
                How we help during the process.
              </h2>
              <div className="mt-6 space-y-5">
                {blueprint.map(([step, label, body]) => (
                  <div key={step} className="flex gap-4">
                    <div className="grid size-11 shrink-0 place-items-center rounded-2xl border border-amber-300/20 bg-amber-300/10 text-sm font-black text-amber-200">
                      {step}
                    </div>
                    <div>
                      <h3 className="text-base font-black text-white">
                        {label}
                      </h3>
                      <p className="mt-1 text-sm leading-7 text-zinc-400">
                        {body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ProCard>

            <ProCard hover={false} className="p-6 md:p-8">
              <h2 className="text-3xl font-black text-white">
                Common questions.
              </h2>
              <div className="mt-6 space-y-4">
                {faqs.map(([question, answer]) => (
                  <div
                    key={question}
                    className="rounded-2xl border border-white/10 bg-black/25 p-4"
                  >
                    <h3 className="text-sm font-black text-amber-100">
                      {question}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-zinc-400">
                      {answer}
                    </p>
                  </div>
                ))}
              </div>
            </ProCard>
          </section>

          <ProCard hover={false} className="mt-10 overflow-hidden p-0">
            <div className="grid gap-8 bg-[linear-gradient(135deg,rgba(127,29,29,0.42),rgba(0,0,0,0.32),rgba(251,191,36,0.12))] p-6 md:p-10 lg:grid-cols-[1fr_.7fr] lg:items-center">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.28em] text-amber-300">
                  Need help after a storm?
                </p>
                <h2 className="mt-3 text-3xl font-black text-white md:text-5xl">
                  Let Barneys Supply look over the exterior before small damage
                  becomes a bigger repair.
                </h2>
                <p className="mt-4 text-sm leading-7 text-zinc-300 md:text-base">
                  We keep the conversation practical, honest, and
                  construction-focused. No pressure — just a clear look at the
                  condition of your roofline and exterior systems.
                </p>
              </div>
              <div className="grid gap-3">
                <a
                  href={SITE.phones.office.href}
                  className="rounded-full bg-gradient-to-r from-red-600 to-amber-400 px-7 py-4 text-center text-sm font-black uppercase tracking-[0.18em] text-white shadow-[0_24px_55px_rgba(185,28,28,0.35)] transition hover:scale-[1.03] hover:brightness-110"
                >
                  Call Office
                </a>
                <Link
                  to="/contact"
                  className="rounded-full border border-white/15 bg-black/30 px-7 py-4 text-center text-sm font-black uppercase tracking-[0.18em] text-white backdrop-blur transition hover:border-amber-300/50 hover:bg-amber-300/12 hover:text-amber-100"
                >
                  Request Insurance Help
                </Link>
              </div>
            </div>
          </ProCard>
        </section>
      </MotionPage>
    </>
  );
}

export default Insurance;
