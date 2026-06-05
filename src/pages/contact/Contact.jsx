import { motion } from "framer-motion";
import Seo from "../../components/seo/Seo";
import MotionPage from "../../components/ui/MotionPage";
import { fadeUp, staggerContainer } from "../../components/ui/motionVariants";
import ProCard from "../../components/ui/ProCard";
import { routeSeo } from "../../config/seo";
import { SITE } from "../../config/site";
import { useEstimateForm } from "./hooks/useEstimateForm";

const contactMethods = [
  {
    label: "Call the Office",
    value: SITE.phones.office.label,
    href: SITE.phones.office.href,
    note: "Best for scheduling, quick questions, and active project updates.",
  },
  {
    label: "Direct Line",
    value: SITE.phones.sales.label,
    href: SITE.phones.sales.href,
    note: "Useful when you need faster help with an estimate or site visit.",
  },
  {
    label: "Email Us",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    note: "Send photos, addresses, insurance documents, or project details.",
  },
];

const projectTypes = [
  "Roofing",
  "Siding",
  "Gutters",
  "Storm Damage",
  "Exterior Repair",
];

function Field({ label, children }) {
  return (
    <label className="grid gap-2 text-xs font-black uppercase tracking-[0.18em] text-zinc-400">
      {label}
      {children}
    </label>
  );
}

const inputClass =
  "rounded-2xl border border-white/10 bg-black/45 px-4 py-3 text-sm font-semibold normal-case tracking-normal text-white outline-none transition placeholder:text-zinc-600 focus:border-amber-300/55";

function Contact() {
  const {
    formData,
    isSubmitting,
    submitStatus,
    handleInputChange,
    handleSubmit,
  } = useEstimateForm();

  return (
    <>
      <Seo {...routeSeo.contact} />
      <MotionPage>
        <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_15%,rgba(251,191,36,0.16),transparent_30%),radial-gradient(circle_at_85%_20%,rgba(185,28,28,0.18),transparent_28%),linear-gradient(180deg,rgba(24,24,27,0.92),rgba(0,0,0,0.96))]" />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start"
          >
            <motion.div variants={fadeUp} className="space-y-6">
              <div className="rounded-[2rem] border border-white/10 bg-black/45 p-6 shadow-[0_28px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl md:p-8">
                <p className="text-xs font-black uppercase tracking-[0.3em] text-amber-300">
                  Contact Barneys Supply
                </p>
                <h1 className="mt-4 text-4xl font-black leading-tight tracking-[-0.045em] text-white md:text-6xl">
                  Tell us what your exterior needs. We’ll help you figure out
                  the next step.
                </h1>
                <p className="mt-5 text-base leading-8 text-zinc-300">
                  Whether it is a leaking roof, siding damage, gutter drainage
                  issue, storm concern, or a bigger exterior upgrade, start with
                  the basics. Send the property location, what you are seeing,
                  and any photos you already have.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {projectTypes.map((type) => (
                    <span
                      key={type}
                      className="rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-amber-100"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid gap-4">
                {contactMethods.map((method) => (
                  <motion.a
                    key={method.label}
                    href={method.href}
                    className="group rounded-3xl border border-white/10 bg-zinc-950/70 p-5 shadow-[0_16px_45px_rgba(0,0,0,0.28)] transition hover:-translate-y-1 hover:border-amber-300/45 hover:bg-white/[0.06]"
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.22em] text-zinc-500 group-hover:text-amber-300">
                          {method.label}
                        </p>
                        <p className="mt-2 break-all text-xl font-black text-white md:text-2xl">
                          {method.value}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-zinc-400">
                          {method.note}
                        </p>
                      </div>
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-amber-300/20 bg-amber-300/10 text-lg font-black text-amber-200 transition group-hover:bg-amber-300 group-hover:text-red-950">
                        →
                      </span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-5">
              <ProCard hover={false} className="p-6 md:p-7">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-red-300">
                  Helpful before we arrive
                </p>
                <h2 className="mt-2 text-2xl font-black text-white">
                  A few details make the estimate easier.
                </h2>
                <ul className="mt-4 grid gap-3 text-sm leading-6 text-zinc-300 sm:grid-cols-3">
                  <li className="rounded-2xl border border-white/10 bg-black/30 p-4">
                    Share the property address and the best time to reach you.
                  </li>
                  <li className="rounded-2xl border border-white/10 bg-black/30 p-4">
                    Send photos of leaks, missing shingles, loose siding, gutter
                    problems, or storm damage.
                  </li>
                  <li className="rounded-2xl border border-white/10 bg-black/30 p-4">
                    Mention any insurance claim concerns, active leaks, or
                    urgent safety issues.
                  </li>
                </ul>
              </ProCard>

              <ProCard hover={false} className="overflow-hidden p-0">
                <div className="border-b border-white/10 bg-gradient-to-r from-red-950/70 via-zinc-950 to-amber-950/50 p-6 md:p-8">
                  <p className="text-xs font-black uppercase tracking-[0.28em] text-amber-300">
                    Free Estimate Request
                  </p>
                  <h2 className="mt-3 text-3xl font-black tracking-tight text-white md:text-4xl">
                    Send the details and we’ll follow up.
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-zinc-300">
                    The more detail you include, the easier it is to understand
                    the scope before we contact you.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5 p-6 md:p-8">
                  {submitStatus === "success" && (
                    <div className="rounded-2xl border border-emerald-400/25 bg-emerald-500/10 p-4 text-sm font-bold text-emerald-300">
                      Estimate request submitted successfully. Our team will
                      follow up shortly.
                    </div>
                  )}
                  {submitStatus === "error" && (
                    <div className="rounded-2xl border border-red-400/25 bg-red-500/10 p-4 text-sm font-bold text-red-300">
                      Something went wrong sending your message. Please call us
                      directly.
                    </div>
                  )}

                  <div className="grid gap-4 md:grid-cols-2">
                    <Field label="Your Name">
                      <input
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Full name"
                        className={inputClass}
                      />
                    </Field>
                    <Field label="Phone Number">
                      <input
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Best number to call"
                        className={inputClass}
                      />
                    </Field>
                  </div>

                  <Field label="Email Address">
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="name@email.com"
                      className={inputClass}
                    />
                  </Field>

                  <Field label="Service Needed">
                    <select
                      name="serviceNeeded"
                      value={formData.serviceNeeded}
                      onChange={handleInputChange}
                      className={inputClass}
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Shingle Roofing">Shingle Roofing</option>
                      <option value="Vinyl Siding">Vinyl Siding</option>
                      <option value="Seamless Gutters">Seamless Gutters</option>
                      <option value="Storm Damage Inspection">
                        Storm Damage Inspection
                      </option>
                      <option value="Exterior Repair">Exterior Repair</option>
                    </select>
                  </Field>

                  <Field label="Project Details / Message">
                    <textarea
                      name="message"
                      rows="7"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us what is going on with the roof, siding, gutters, or exterior area..."
                      className={`${inputClass} resize-none py-4`}
                    />
                  </Field>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative isolate w-full overflow-hidden rounded-full bg-gradient-to-r from-red-700 via-red-600 to-amber-400 px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-white shadow-[0_24px_55px_rgba(185,28,28,0.35)] transition hover:scale-[1.01] hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-55"
                  >
                    <span className="absolute inset-0 -z-10 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/25 to-transparent transition duration-700 group-hover:translate-x-[120%]" />
                    {isSubmitting ? "Sending..." : "Send Estimate Request"}
                  </button>
                </form>
              </ProCard>
            </motion.div>
          </motion.div>
        </section>
      </MotionPage>
    </>
  );
}

export default Contact;
