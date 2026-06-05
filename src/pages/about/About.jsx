import { motion } from "framer-motion";
import Seo from "../../components/seo/Seo";
import MotionPage from "../../components/ui/MotionPage";
import { fadeUp, staggerContainer } from "../../components/ui/motionVariants";
import ProCard from "../../components/ui/ProCard";
import PhoneNumbers from "../../assets/phone-numbers.webp";
import { routeSeo } from "../../config/seo";
import { projectGallery, MAX_MEDIA_PER_PROJECT } from "./data/projectGallery";
import { useProjectLightbox } from "./hooks/useProjectLightbox";
import ProjectLightbox from "./components/ProjectLightbox";

const visibleProjects = projectGallery.slice(0, 6);

const reasons = [
  {
    title: "We protect the full exterior system",
    body: "A roof, siding, gutters, trim, flashing, and drainage all work together. We look at the whole problem instead of treating one small symptom like it exists by itself.",
  },
  {
    title: "Clear answers before the work starts",
    body: "You deserve to know what is urgent, what can wait, and what the cleanest path forward looks like. We explain the scope in plain language and keep the job practical.",
  },
  {
    title: "Built for Ozarks weather",
    body: "Southwest Missouri brings wind, hail, heat, freezing rain, and heavy downpours. Our work is planned around those real conditions, not just how something looks on day one.",
  },
];

function About() {
  const lightbox = useProjectLightbox(projectGallery);

  return (
    <>
      <Seo {...routeSeo.about} />
      <MotionPage>
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-end"
          >
            <div>
              <motion.p
                variants={fadeUp}
                className="text-xs font-black uppercase tracking-[0.3em] text-amber-300"
              >
                About Barneys Supply
              </motion.p>
              <motion.h1
                variants={fadeUp}
                className="mt-4 text-5xl font-black leading-tight tracking-[-0.045em] text-white md:text-7xl"
              >
                Exterior work backed by{" "}
                <motion.span
                  className="inline-block bg-[linear-gradient(90deg,#fff7ed,#fbbf24,#ef4444,#fff7ed)] bg-[length:220%_100%] bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  decades of grit.
                </motion.span>
              </motion.h1>
            </div>
            <motion.p
              variants={fadeUp}
              className="text-base leading-8 text-zinc-300"
            >
              Barneys Supply Company helps homeowners and property owners
              protect what matters most: the structure around them. We focus on
              roofing, siding, gutters, storm diagnostics, and practical
              exterior improvements across the Ozarks with honest communication
              and jobsite respect.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-14 grid gap-5 md:grid-cols-3"
          >
            {[
              [
                "Legacy",
                "Serving the area since 1944 with practical construction knowledge.",
              ],
              [
                "Exterior Focus",
                "Roofing, siding, gutters, and weather protection systems.",
              ],
              [
                "Local Care",
                "Built for Southwest Missouri homes, storms, and seasons.",
              ],
            ].map(([title, body]) => (
              <motion.div variants={fadeUp} key={title}>
                <ProCard className="h-full p-6">
                  <h2 className="text-2xl font-black text-white">{title}</h2>
                  <p className="mt-3 text-sm leading-7 text-zinc-400">{body}</p>
                </ProCard>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-amber-300">
                Our Recent Work
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-white md:text-5xl">
                Real work, clean details, modern viewer.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-zinc-400">
              Mobile shows the first 4 projects for a cleaner experience.
              Desktop shows 6. Each project supports up to{" "}
              {MAX_MEDIA_PER_PROJECT} photos or videos inside the slider.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.12 }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {visibleProjects.map((project, index) => (
              <motion.button
                variants={fadeUp}
                type="button"
                key={`${project.title}-${project.location}-${index}`}
                onClick={() => lightbox.openLightbox(index)}
                className={`group text-left ${index > 3 ? "hidden lg:block" : ""}`}
              >
                <ProCard className="h-full p-2">
                  <div className="relative h-72 overflow-hidden rounded-2xl">
                    <img
                      src={project.coverImage}
                      alt={`${project.title} in ${project.location}`}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                    <div className="absolute left-4 top-4 rounded-full border border-amber-300/25 bg-black/50 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-amber-200 backdrop-blur-md">
                      {project.media.length} media
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="text-xl font-black text-white">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-sm font-bold text-amber-200">
                        {project.location}
                      </p>
                      <p className="mt-2 text-xs leading-5 text-zinc-300 opacity-0 transition duration-300 group-hover:opacity-100">
                        {project.summary}
                      </p>
                    </div>
                  </div>
                </ProCard>
              </motion.button>
            ))}
          </motion.div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <ProCard hover={false} className="overflow-hidden p-0">
            <div className="grid gap-0 lg:grid-cols-[.9fr_1.1fr]">
              <div className="border-b border-white/10 bg-gradient-to-br from-red-950/75 via-zinc-950 to-amber-950/45 p-7 md:p-10 lg:border-b-0 lg:border-r">
                <p className="text-xs font-black uppercase tracking-[0.28em] text-amber-300">
                  Why homeowners call Barneys
                </p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-white md:text-5xl">
                  Professional work should feel clear, steady, and built to
                  last.
                </h2>
                <p className="mt-5 text-sm leading-7 text-zinc-300 md:text-base md:leading-8">
                  We are not trying to sell every homeowner the biggest project
                  possible. We are trying to find the right fix, explain it
                  clearly, and leave the property better protected than we found
                  it.
                </p>
                <div className="mt-18 flex items-center justify-center">
                  <img
                    src={PhoneNumbers}
                    alt="Barneys Supply Company phone numbers"
                    className="w-[160px] object-contain drop-shadow-[0_14px_28px_rgba(0,0,0,.5)] sm:w-50"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              <div className="grid gap-4 p-6 md:p-8">
                {reasons.map((reason, index) => (
                  <div
                    key={reason.title}
                    className="rounded-3xl border border-white/10 bg-black/35 p-5"
                  >
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-300">
                      0{index + 1}
                    </p>
                    <h3 className="mt-2 text-xl font-black text-white">
                      {reason.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-zinc-400">
                      {reason.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ProCard>
        </section>

        <ProjectLightbox {...lightbox} />
      </MotionPage>
    </>
  );
}

export default About;
