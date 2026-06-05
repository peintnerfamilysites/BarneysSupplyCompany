import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Seo from "../../components/seo/Seo";
import MotionPage from "../../components/ui/MotionPage";
import { fadeUp, staggerContainer } from "../../components/ui/motionVariants";
import ProCard from "../../components/ui/ProCard";
import { localBusinessSchema } from "../../config/seo";
import { SITE } from "../../config/site";
import SpringTime from "../../assets/spring-time.webp";
import OurPromise from "../../assets/our-promise.webp";
import SomeServices from "../../assets/some-services.webp";
import ShingleRoofing from "../../assets/shingle-roofing.webp";
import VinylSiding from "../../assets/vinyl-siding.webp";
import Gutters from "../../assets/gutters.webp";

const BarneysHeroScene = lazy(
  () => import("../../components/three/BarneysHeroScene"),
);

const stats = [
  ["1944", "Established legacy"],
  ["3", "Core exterior systems"],
  ["SW MO", "Ozarks service area"],
];

const services = [
  {
    title: "Shingle Roofing",
    image: ShingleRoofing,
    description:
      "Architectural shingles, leak repair, storm diagnostics, decking checks, and full roof replacements.",
    to: "/services#roofing",
  },
  {
    title: "Vinyl Siding",
    image: VinylSiding,
    description:
      "Durable siding upgrades that sharpen curb appeal and protect your home from Missouri weather.",
    to: "/services#siding",
  },
  {
    title: "Seamless Gutters",
    image: Gutters,
    description:
      "Custom-fit gutter systems, downspout routing, and water management built to protect foundations.",
    to: "/services#gutters",
  },
];

function Home() {
  return (
    <>
      <Seo
        title="Roofing, Siding & Seamless Gutters in the Ozarks"
        description="Barneys Supply Company provides shingle roofing, vinyl siding, seamless gutters, storm damage repairs, and exterior construction services across Southwest Missouri."
        path="/"
        schema={localBusinessSchema}
      />
      <MotionPage>
        <section className="relative mx-auto grid min-h-[calc(100svh-6rem)] w-full max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-16">
          <div className="absolute inset-x-0 top-4 h-72 bg-gradient-to-r from-red-600/16 via-amber-300/10 to-transparent blur-3xl" />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="relative z-10"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex rounded-full border border-amber-300/25 bg-amber-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-amber-200 shadow-[0_0_24px_rgba(251,191,36,0.12)]"
            >
              Southwest Missouri Exterior Specialists
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="mt-7 max-w-4xl text-5xl font-black leading-[0.94] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl"
            >
              Roofing, siding, and gutters built with old-school pride and
              modern precision.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg"
            >
              Barneys Supply Company has served the Ozarks since {SITE.founded}.
              We help homeowners and property owners protect what matters with
              clean installs, honest inspections, and exterior systems made to
              last.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                to="/contact"
                className="rounded-full bg-gradient-to-r from-red-600 to-amber-400 px-7 py-4 text-center text-sm font-black uppercase tracking-[0.18em] text-white shadow-[0_24px_55px_rgba(185,28,28,0.35)] transition hover:scale-[1.03] hover:brightness-110"
              >
                Get Free Estimate
              </Link>
              <a
                href={SITE.phones.office.href}
                className="rounded-full border border-white/15 bg-white/8 px-7 py-4 text-center text-sm font-black uppercase tracking-[0.18em] text-white backdrop-blur transition hover:border-amber-300/50 hover:bg-amber-300/12 hover:text-amber-100"
              >
                Call {SITE.phones.office.label}
              </a>
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="mt-10 grid max-w-2xl grid-cols-3 gap-3"
            >
              {stats.map(([value, label]) => (
                <div
                  key={value}
                  className="rounded-2xl border border-white/10 bg-black/35 p-4 backdrop-blur"
                >
                  <p className="text-2xl font-black text-amber-300">{value}</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-zinc-400">
                    {label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-black/30 shadow-[0_35px_120px_rgba(0,0,0,0.48)] backdrop-blur-xl lg:min-h-[560px]"
          >
            <Suspense fallback={null}>
              <BarneysHeroScene />
            </Suspense>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,transparent_0%,rgba(0,0,0,0.15)_44%,rgba(0,0,0,0.76)_100%)]" />
            <div className="absolute bottom-0 left-0 right-0 z-10 p-5 sm:p-7">
              <div className="rounded-3xl border border-white/10 bg-black/64 p-5 backdrop-blur-xl">
                <p className="text-xs font-black uppercase tracking-[0.25em] text-amber-200">
                  Exterior systems that work together
                </p>
                <h2 className="mt-2 text-2xl font-black text-white">
                  Roofline protection from top to foundation.
                </h2>
                <p className="mt-2 text-sm leading-6 text-zinc-300">
                  Roofing sheds the weather, siding seals the shell, and gutters
                  move water away before it becomes a problem.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-4 md:grid-cols-3"
          >
            {[SpringTime, OurPromise, SomeServices].map((image, index) => (
              <motion.div
                variants={fadeUp}
                key={image}
                className={index === 1 ? "md:translate-y-8" : ""}
              >
                <ProCard className="p-2">
                  <img
                    src={image}
                    alt="Barneys Supply Company service banner"
                    className="h-full w-full rounded-2xl object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </ProCard>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-amber-300">
                Services We Offer
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-white md:text-5xl">
                The work people call us for most.
              </h2>
            </div>
            <Link
              to="/services"
              className="w-fit rounded-full border border-amber-300/30 bg-amber-300/10 px-6 py-3 text-sm font-black uppercase tracking-[0.16em] text-amber-100 transition hover:bg-amber-300 hover:text-red-950"
            >
              View All Services
            </Link>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.18 }}
            className="grid gap-5 md:grid-cols-3"
          >
            {services.map((service) => (
              <motion.div variants={fadeUp} key={service.title}>
                <ProCard className="h-full">
                  <Link to={service.to} className="block h-full">
                    <div className="relative h-64 overflow-hidden rounded-t-3xl">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="h-full w-full object-cover transition duration-700 hover:scale-110"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-black text-white">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-zinc-400">
                        {service.description}
                      </p>
                    </div>
                  </Link>
                </ProCard>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <ProCard hover={false} className="relative overflow-hidden p-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(251,191,36,0.16),transparent_34%),linear-gradient(135deg,rgba(127,29,29,0.38),rgba(0,0,0,0.2)_45%,rgba(24,24,27,0.52))]" />
            <div className="relative grid gap-8 p-6 md:grid-cols-[1.15fr_.85fr] md:p-8 lg:p-10">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.28em] text-amber-300">
                  Why choose Barneys
                </p>
                <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-tight text-white md:text-5xl">
                  A cleaner exterior project from the first call to the final
                  cleanup.
                </h2>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-300 md:text-base">
                  We keep the process straightforward: inspect the issue,
                  explain the options, protect the property, and complete the
                  work with the kind of detail that makes roofing, siding, and
                  gutters last.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link
                    to="/contact"
                    className="rounded-full bg-gradient-to-r from-red-600 to-amber-400 px-7 py-4 text-center text-sm font-black uppercase tracking-[0.16em] text-white shadow-[0_22px_50px_rgba(185,28,28,0.28)] transition hover:scale-[1.03] hover:brightness-110"
                  >
                    Start With An Estimate
                  </Link>
                  <Link
                    to="/insurance"
                    className="rounded-full border border-white/15 bg-white/8 px-7 py-4 text-center text-sm font-black uppercase tracking-[0.16em] text-amber-100 backdrop-blur transition hover:border-amber-300/50 hover:bg-amber-300/12"
                  >
                    Storm Damage Help
                  </Link>
                </div>
              </div>

              <div className="grid content-center gap-3">
                {[
                  "Honest inspections",
                  "Durable exterior systems",
                  "Clear communication",
                  "Jobsite respect",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/35 px-4 py-3 backdrop-blur"
                  >
                    <span className="grid size-7 place-items-center rounded-full bg-amber-300 text-sm font-black text-red-950">
                      ✓
                    </span>
                    <span className="text-sm font-black uppercase tracking-[0.12em] text-zinc-100">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ProCard>
        </section>
      </MotionPage>
    </>
  );
}

export default Home;
