import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Established from "../../assets/established.webp";
import PfsFooter from "../../assets/pfs-footer.webp";
import { SITE } from "../../config/site";

const footerLinks = [
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/insurance", label: "Insurance" },
  { to: "/contact", label: "Contact" },
  { to: "/terms", label: "Terms" },
];

const footerLinkClass = ({ isActive }) =>
  `rounded-full border px-4 py-2 text-sm font-black uppercase tracking-[0.08em] transition ${
    isActive
      ? "border-amber-300/70 bg-amber-300 text-red-950 shadow-[0_0_24px_rgba(251,191,36,0.26)]"
      : "border-white/10 bg-white/[0.06] text-zinc-300 hover:border-amber-300/45 hover:bg-amber-300/10 hover:text-amber-100"
  }`;

function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/60 px-4 py-10 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_.85fr_.95fr] lg:items-center">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.28em] text-amber-300">
            Built for the Ozarks
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            Barneys Supply Company
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-400">
            Professional roofing, siding, seamless gutters, storm response, and
            exterior construction service across Southwest Missouri since{" "}
            {SITE.founded}.
          </p>
        </div>

        <motion.div
          className="mx-auto w-full max-w-[340px] lg:max-w-[410px]"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 220, damping: 18 }}
        >
          <img
            src={Established}
            alt="Barneys Supply Company established in 1944"
            className="h-auto w-full object-contain drop-shadow-[0_16px_28px_rgba(0,0,0,0.42)]"
            loading="lazy"
            decoding="async"
          />
        </motion.div>

        <div className="grid gap-5 lg:justify-items-end">
          <div className="grid gap-2 text-sm font-semibold text-zinc-300 lg:text-right">
            <a
              className="transition hover:text-amber-200"
              href={SITE.phones.office.href}
            >
              {SITE.phones.office.label}
            </a>
            <a
              className="transition hover:text-amber-200"
              href={SITE.phones.sales.href}
            >
              {SITE.phones.sales.label}
            </a>
            <a
              className="break-all transition hover:text-amber-200"
              href={`mailto:${SITE.email}`}
            >
              {SITE.email}
            </a>
          </div>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-center gap-3 lg:justify-end"
          >
            {footerLinks.map((link) => (
              <NavLink key={link.to} to={link.to} className={footerLinkClass}>
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Barneys Supply Company. All Rights Reserved.</p>
        <motion.img
          src={PfsFooter}
          alt="Website by PFS"
          className="h-10 w-auto object-contain opacity-80"
          whileHover={{ opacity: 1, scale: 1.04 }}
        />
      </div>
    </footer>
  );
}

export default Footer;
