import Seo from "../../components/seo/Seo";
import MotionPage from "../../components/ui/MotionPage";
import ProCard from "../../components/ui/ProCard";
import { routeSeo } from "../../config/seo";
import { SITE } from "../../config/site";

const termsSections = [
  {
    title: "1. What this website is for",
    body: "This website provides general information about Barneys Supply Company, including roofing, siding, seamless gutter, storm damage, and exterior construction services. Website content is not a final estimate, contract, warranty, or guarantee of availability.",
  },
  {
    title: "2. Estimate requests and communication",
    body: "Submitting a contact form, sending an email, or calling us does not automatically create a contractor-client relationship or guarantee that we can accept a project. Final scope, pricing, scheduling, materials, and project terms depend on inspection, property conditions, location, weather, and written agreement where applicable.",
  },
  {
    title: "3. Project photos and examples",
    body: "Photos, galleries, and project examples are used to show the type of work Barneys Supply Company may perform. Every property is different, so results, materials, colors, timelines, and installation details may vary from one project to another.",
  },
  {
    title: "4. Insurance-related information",
    body: "Insurance content on this website is general information only. Barneys Supply Company is not an insurance company, attorney, or public adjuster. Your insurance carrier and policy documents control claim decisions, coverage, deductibles, and payment terms.",
  },
  {
    title: "5. Third-party tools and links",
    body: "This website may use third-party tools for email forms, hosting, maps, analytics, or external links. Barneys Supply Company is not responsible for the content, security, privacy practices, or availability of third-party websites or services.",
  },
  {
    title: "6. Website use and limitations",
    body: "You agree to use this website lawfully and responsibly. To the fullest extent allowed by law, Barneys Supply Company is not liable for damages related to website use, temporary outages, third-party issues, or reliance on general website information without a direct inspection or written agreement.",
  },
];

function TermsOfUse() {
  return (
    <>
      <Seo {...routeSeo.terms} />
      <MotionPage>
        <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_12%,rgba(251,191,36,0.14),transparent_30%),radial-gradient(circle_at_88%_16%,rgba(185,28,28,0.16),transparent_28%),linear-gradient(180deg,rgba(24,24,27,0.94),rgba(0,0,0,0.98))]" />
          <div className="mx-auto max-w-5xl">
            <ProCard hover={false} className="overflow-hidden p-0">
              <div className="border-b border-white/10 bg-gradient-to-r from-red-950/70 via-zinc-950 to-amber-950/50 p-6 md:p-10">
                <p className="text-xs font-black uppercase tracking-[0.28em] text-amber-300">
                  Website Terms
                </p>
                <h1 className="mt-3 text-4xl font-black tracking-tight text-white md:text-6xl">
                  Terms of Use
                </h1>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-300">
                  These terms explain how this website should be used and what
                  the website information does, and does not, mean. Last
                  updated: June 5, 2026.
                </p>
              </div>

              <div className="grid gap-4 p-5 md:p-8">
                {termsSections.map((section) => (
                  <section
                    key={section.title}
                    className="rounded-3xl border border-white/10 bg-black/30 p-5 md:p-6"
                  >
                    <h2 className="text-xl font-black text-white">
                      {section.title}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-zinc-300">
                      {section.body}
                    </p>
                  </section>
                ))}
              </div>

              <div className="border-t border-white/10 bg-white/[0.035] p-5 md:p-8">
                <h2 className="text-2xl font-black text-white">
                  Questions about these terms?
                </h2>
                <p className="mt-3 text-sm leading-7 text-zinc-300">
                  Contact {SITE.name} at{" "}
                  <a
                    className="font-bold text-amber-200 transition hover:text-amber-100"
                    href={`mailto:${SITE.email}`}
                  >
                    {SITE.email}
                  </a>{" "}
                  or call{" "}
                  <a
                    className="font-bold text-amber-200 transition hover:text-amber-100"
                    href={SITE.phones.office.href}
                  >
                    {SITE.phones.office.label}
                  </a>
                  .
                </p>
              </div>
            </ProCard>
          </div>
        </section>
      </MotionPage>
    </>
  );
}

export default TermsOfUse;
