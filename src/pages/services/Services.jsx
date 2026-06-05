import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Seo from "../../components/seo/Seo";
import MotionPage from "../../components/ui/MotionPage";
import { fadeUp, staggerContainer } from "../../components/ui/motionVariants";
import ProCard from "../../components/ui/ProCard";
import { routeSeo } from "../../config/seo";
import { SITE } from "../../config/site";
import { structuralServices } from "./data/servicesData";

const qualityPoints = [
  "Clear inspection notes before recommendations",
  "Material choices explained in plain language",
  "Property protection and cleanup taken seriously",
  "Exterior systems planned together: roof, siding, gutters, trim, and drainage",
];

function Services() {
  return (
    <>
      <Seo {...routeSeo.services} />
      <MotionPage>
        <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_15%,rgba(251,191,36,0.15),transparent_30%),radial-gradient(circle_at_86%_10%,rgba(185,28,28,0.16),transparent_28%),linear-gradient(180deg,rgba(24,24,27,0.94),rgba(0,0,0,0.98))]" />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="mx-auto max-w-5xl text-center"
          >
            <motion.p
              variants={fadeUp}
              className="text-xs font-black uppercase tracking-[0.3em] text-amber-300"
            >
              Professional Exterior Services
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="mt-4 text-5xl font-black leading-tight tracking-[-0.045em] text-white md:text-7xl"
            >
              Roofing, siding, and gutters built for real Missouri weather.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-6 max-w-3xl text-base leading-8 text-zinc-300"
            >
              Barneys Supply focuses on the exterior systems that protect the
              home. We look for the cause of the issue, explain the best repair
              or replacement path, and keep the project practical from first
              call to final cleanup.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="mx-auto mt-14 grid max-w-7xl gap-6 lg:grid-cols-3"
          >
            {structuralServices.map((service, index) => (
              <motion.div variants={fadeUp} key={service.id} id={service.id}>
                <ProCard className="h-full overflow-hidden p-0">
                  <div className="border-b border-white/10 bg-gradient-to-br from-white/[0.08] via-black/20 to-red-950/35 p-6 lg:p-7">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/8 shadow-[0_0_30px_rgba(251,191,36,0.12)]">
                      {service.icon}
                    </div>
                    <p className="text-xs font-black uppercase tracking-[0.24em] text-amber-300">
                      0{index + 1} / Core Service
                    </p>
                    <h2 className="mt-3 text-2xl font-black text-white">
                      {service.title}
                    </h2>
                    <p className="mt-1 text-sm font-bold text-red-200/80">
                      {service.subtitle}
                    </p>
                  </div>
                  <div className="p-6 lg:p-7">
                    <p className="text-sm leading-7 text-zinc-400">
                      {service.description}
                    </p>
                    <ul className="mt-6 grid gap-3">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex gap-3 text-sm font-semibold text-zinc-300"
                        >
                          <span className="mt-1 h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_14px_rgba(251,191,36,0.65)]" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ProCard>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
            <ProCard hover={false} className="p-8 md:p-10">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-amber-300">
                How we approach the work
              </p>
              <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
                A clean process from inspection to final cleanup.
              </h2>
              <div className="mt-7 grid gap-4">
                {[
                  [
                    "Inspect",
                    "We look over the roofline, siding, drainage, and visible problem areas so the recommendation is grounded in the property.",
                  ],
                  [
                    "Plan",
                    "We explain the practical repair or replacement path, material considerations, and scheduling expectations before work starts.",
                  ],
                  [
                    "Build",
                    "We install with care, protect the property, and leave the work area cleaned up.",
                  ],
                ].map(([step, body], index) => (
                  <div
                    key={step}
                    className="rounded-2xl border border-white/10 bg-black/35 p-5"
                  >
                    <p className="text-3xl font-black text-amber-300">
                      {index + 1}
                    </p>
                    <h3 className="mt-2 font-black text-white">{step}</h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-400">
                      {body}
                    </p>
                  </div>
                ))}
              </div>
            </ProCard>

            <ProCard hover={false} className="overflow-hidden p-0">
              <div className="border-b border-white/10 bg-gradient-to-br from-red-950/75 via-zinc-950 to-amber-950/45 p-8 md:p-10">
                <p className="text-xs font-black uppercase tracking-[0.28em] text-red-300">
                  Ready to talk?
                </p>
                <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
                  Get the right crew looking at the right problem.
                </h2>
                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  The cheapest quick fix can become the most expensive mistake
                  when water, wind, or poor drainage is involved. Call us with
                  what you are seeing and we will help you choose the next
                  sensible step.
                </p>
              </div>

              <div className="grid gap-4 p-6 md:p-8">
                <a
                  href={SITE.phones.office.href}
                  className="group rounded-3xl border border-amber-300/20 bg-amber-300/10 p-5 transition hover:-translate-y-1 hover:border-amber-200/70 hover:bg-amber-300 hover:text-red-950"
                >
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-amber-200 transition group-hover:text-red-950/70">
                    Call the Office
                  </p>
                  <p className="mt-2 text-3xl font-black text-white transition group-hover:text-red-950">
                    {SITE.phones.office.label}
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-zinc-300 transition group-hover:text-red-950/80">
                    Scheduling, project questions, and general service calls.
                  </p>
                </a>

                <a
                  href={SITE.phones.sales.href}
                  className="group rounded-3xl border border-red-300/20 bg-red-500/10 p-5 transition hover:-translate-y-1 hover:border-red-200/70 hover:bg-red-600 hover:text-white"
                >
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-red-200 transition group-hover:text-white/80">
                    Direct Estimate Line
                  </p>
                  <p className="mt-2 text-3xl font-black text-white">
                    {SITE.phones.sales.label}
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-zinc-300 transition group-hover:text-white/80">
                    Fast help for estimates, storm concerns, and site visits.
                  </p>
                </a>

                <div className="grid gap-3 sm:grid-cols-2">
                  {qualityPoints.slice(0, 2).map((point) => (
                    <div
                      key={point}
                      className="rounded-2xl border border-white/10 bg-white/[0.045] p-4 text-sm font-semibold leading-6 text-zinc-300"
                    >
                      {point}
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="inline-flex justify-center rounded-full border border-white/15 bg-white/[0.07] px-6 py-3 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:border-amber-300/50 hover:bg-amber-300/10 hover:text-amber-100"
                >
                  Send Project Details
                </Link>
              </div>
            </ProCard>
          </div>
        </section>
      </MotionPage>
    </>
  );
}

export default Services;
