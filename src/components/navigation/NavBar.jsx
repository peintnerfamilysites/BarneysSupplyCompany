import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import MainSitesLogo from "../../assets/main-sites-logo.webp";
import NavOpen from "../../assets/nav-open.webp";
import CallUs from "../../assets/call-us.webp";
import ContactUs from "../../assets/contact-us.webp";
import { NAV_ITEMS } from "./navItems";
import { SITE } from "../../config/site";

const navButtonBase =
  "group relative isolate flex h-11 w-[7.35rem] items-center justify-center overflow-hidden rounded-full border px-2 text-center text-[11px] font-black uppercase leading-none tracking-[0.08em] whitespace-nowrap transition-all duration-300 before:absolute before:inset-0 before:-z-10 before:translate-x-[-120%] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-transform before:duration-700 hover:before:translate-x-[120%] 2xl:w-32 2xl:text-xs";

const navLinkClass = ({ isActive }) =>
  `${navButtonBase} ${
    isActive
      ? "border-amber-300/80 bg-[linear-gradient(135deg,rgba(251,191,36,0.96),rgba(245,158,11,0.82),rgba(127,29,29,0.56))] text-red-950 shadow-[0_0_0_1px_rgba(255,255,255,0.18)_inset,0_12px_32px_rgba(251,191,36,0.26)]"
      : "border-white/10 bg-white/[0.045] text-zinc-200 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset] hover:-translate-y-0.5 hover:border-amber-300/45 hover:bg-amber-300/[0.08] hover:text-amber-100 hover:shadow-[0_14px_34px_rgba(0,0,0,0.28),0_0_24px_rgba(251,191,36,0.12)]"
  }`;

const mobileNavLinkClass = ({ isActive }) =>
  `group relative isolate flex min-h-14 items-center justify-center overflow-hidden rounded-2xl border px-5 py-4 text-center text-sm font-black uppercase tracking-[0.16em] transition-all duration-300 before:absolute before:inset-y-3 before:left-3 before:w-1 before:rounded-full before:bg-amber-300 before:transition-opacity sm:text-base ${
    isActive
      ? "border-amber-300/75 bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 text-red-950 shadow-[0_16px_38px_rgba(251,191,36,0.26)] before:opacity-100"
      : "border-white/12 bg-white/[0.06] text-zinc-100 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset] hover:border-amber-300/40 hover:bg-white/10 hover:text-amber-200 before:opacity-0"
  }`;

const imageCtaBase =
  "group relative flex h-14 w-36 items-center justify-center overflow-visible rounded-xl border border-amber-300/10 bg-black/10 p-0 shadow-[0_10px_26px_rgba(0,0,0,0.22),0_0_0_1px_rgba(255,255,255,0.035)_inset] transition-[border-color,background-color,box-shadow,filter] duration-300 hover:border-amber-300/35 hover:bg-amber-300/[0.04] hover:shadow-[0_16px_34px_rgba(0,0,0,0.32),0_0_26px_rgba(251,191,36,0.13)] active:brightness-95 2xl:w-40";

const menuVariants = {
  hidden: { opacity: 0, clipPath: "circle(0% at 94% 50%)" },
  visible: {
    opacity: 1,
    clipPath: "circle(150% at 94% 50%)",
    transition: {
      duration: 0.48,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.06,
    },
  },
  exit: {
    opacity: 0,
    clipPath: "circle(0% at 94% 50%)",
    transition: { duration: 0.32, ease: [0.7, 0, 0.84, 0] },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.34 },
  },
};

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/62 backdrop-blur-2xl supports-[backdrop-filter]:bg-black/58">
        <style>{`
        @keyframes barneysLogoPulse {
          0%, 100% { transform: scale(1); filter: drop-shadow(0 12px 18px rgba(0,0,0,.55)) drop-shadow(0 0 16px rgba(245,158,11,.2)); }
          50% { transform: scale(1.065); filter: drop-shadow(0 16px 24px rgba(0,0,0,.6)) drop-shadow(0 0 30px rgba(251,191,36,.42)); }
        }
        @keyframes wordShine {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes ctaFloat {
          0%, 100% { transform: translateY(0) rotate(-.35deg); }
          50% { transform: translateY(-3px) rotate(.35deg); }
        }
        .barneys-word-shine {
          background: linear-gradient(110deg, #fef3c7, #ffffff, #fbbf24, #ef4444, #fef3c7);
          background-size: 260% 260%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: wordShine 7s ease-in-out infinite;
          text-shadow: 0 0 28px rgba(251,191,36,.08);
        }
        .mobile-menu-logo-pulse { animation: barneysLogoPulse 2.4s ease-in-out infinite; }
        .barneys-image-cta { animation: ctaFloat 4.8s ease-in-out infinite; }
        .barneys-image-cta:hover { animation-play-state: paused; }
      `}</style>

        <div className="mx-auto flex h-24 w-full max-w-[90rem] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="group relative flex h-full shrink-0 items-center gap-2 overflow-visible xl:-ml-6 2xl:-ml-10"
            onClick={() => setIsOpen(false)}
          >
            <motion.img
              src={MainSitesLogo}
              alt="Barneys Supply Company"
              className="relative z-10 h-24 w-auto object-contain drop-shadow-[0_14px_28px_rgba(0,0,0,0.45)] sm:h-30 xl:h-38 xl:-mb-10 2xl:h-42 2xl:-mb-12"
              whileHover={{ scale: 1.06, rotate: -1.5, y: 2 }}
              transition={{ type: "spring", stiffness: 240, damping: 18 }}
            />
            <motion.div
              className="hidden h-full w-[12.75rem] shrink-0 flex-col justify-center overflow-visible xl:flex 2xl:w-[15rem]"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="barneys-word-shine block whitespace-nowrap text-base font-black uppercase leading-none tracking-[0.065em] 2xl:text-xl 2xl:tracking-[0.08em]">
                Barneys Supply
              </span>
              <span className="mt-1 block whitespace-nowrap text-[9px] font-black uppercase leading-none tracking-[0.18em] text-amber-300/85 2xl:text-[11px] 2xl:tracking-[0.22em]">
                Established {SITE.founded}
              </span>
            </motion.div>
          </Link>

          <nav className="hidden items-center gap-2 xl:flex">
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.path} to={item.path} className={navLinkClass}>
                <motion.span
                  className="relative z-10"
                  whileHover={{ y: -1 }}
                  transition={{ type: "spring", stiffness: 420, damping: 24 }}
                >
                  {item.label}
                </motion.span>
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center xl:flex">
            <Link
              to="/contact"
              className={`${imageCtaBase} barneys-image-cta`}
              aria-label="Request a free estimate from Barneys Supply Company"
            >
              <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/10 via-transparent to-amber-300/12 opacity-0 transition duration-300 group-hover:opacity-100" />
              <img
                src={ContactUs}
                alt="Free Estimate"
                className="relative z-10 h-[5.15rem] w-auto max-w-[12.75rem] object-contain drop-shadow-[0_10px_18px_rgba(0,0,0,0.5)] transition duration-300 group-hover:brightness-110 2xl:h-[5.55rem]"
                loading="lazy"
                decoding="async"
              />
            </Link>
          </div>
        </div>
      </header>

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`fixed right-0 top-[50dvh] z-[100] grid h-16 w-16 -translate-y-1/2 place-items-center rounded-l-2xl rounded-r-none transition xl:hidden ${
          isOpen
            ? "bg-black/45 shadow-[0_0_30px_rgba(251,191,36,0.22)] backdrop-blur-md"
            : "bg-black/10 shadow-[0_0_24px_rgba(251,191,36,0.15)] backdrop-blur-[1px]"
        }`}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
      >
        <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
        <motion.img
          src={NavOpen}
          alt=""
          aria-hidden="true"
          className="h-14 w-14 object-contain mobile-menu-logo-pulse"
          animate={
            isOpen ? { rotate: 90, scale: 0.92 } : { rotate: 0, scale: 1 }
          }
          transition={{ type: "spring", stiffness: 220, damping: 18 }}
          loading="lazy"
          decoding="async"
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-[80] flex min-h-[100dvh] items-center justify-center overflow-y-auto overscroll-contain bg-[radial-gradient(circle_at_92%_50%,rgba(251,191,36,0.24),transparent_24%),radial-gradient(circle_at_10%_10%,rgba(239,68,68,0.16),transparent_30%),linear-gradient(135deg,rgba(0,0,0,0.97),rgba(69,10,10,0.96),rgba(120,53,15,0.95))] px-4 py-6 backdrop-blur-2xl sm:px-6 xl:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              variants={itemVariants}
              className="my-auto w-full max-w-[34rem] rounded-[2rem] border border-white/12 bg-black/44 p-4 shadow-[0_30px_90px_rgba(0,0,0,0.55),0_0_0_1px_rgba(255,255,255,0.04)_inset] backdrop-blur-2xl sm:p-5"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col items-center text-center">
                <motion.img
                  src={MainSitesLogo}
                  alt="Barneys Supply Company"
                  className="h-24 w-auto object-contain drop-shadow-[0_18px_34px_rgba(0,0,0,0.55)] sm:h-32 md:h-36"
                  initial={{ y: 18, opacity: 0, scale: 0.9 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                />
                <motion.p
                  className="mt-1 text-[11px] font-black uppercase tracking-[0.32em] text-amber-300/90"
                  variants={itemVariants}
                >
                  Established {SITE.founded}
                </motion.p>
                <motion.h2
                  className="barneys-word-shine mt-1 text-2xl font-black sm:text-3xl"
                  variants={itemVariants}
                >
                  Barneys Supply Company
                </motion.h2>
              </div>

              <motion.div
                variants={itemVariants}
                className="mt-4 grid gap-2 sm:mt-5 sm:gap-2.5"
              >
                {NAV_ITEMS.map((item) => (
                  <motion.div key={item.path} variants={itemVariants}>
                    <NavLink
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={mobileNavLinkClass}
                    >
                      <span className="relative z-10 whitespace-nowrap">
                        {item.label}
                      </span>
                    </NavLink>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="mt-5 grid grid-cols-2 gap-3"
              >
                <a
                  href={SITE.phones.office.href}
                  className="group flex min-h-24 items-center justify-center rounded-2xl border border-amber-300/28 bg-white/[0.045] p-2 shadow-[0_0_0_1px_rgba(255,255,255,0.05)_inset] transition hover:border-amber-300/60 hover:bg-amber-300/10 active:scale-95"
                  aria-label="Call Barneys Supply Company"
                >
                  <img
                    src={CallUs}
                    alt="Call Me"
                    className="h-32 w-auto max-w-none object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.5)] transition duration-300 group-hover:scale-105 group-hover:brightness-110 sm:h-36"
                    loading="lazy"
                    decoding="async"
                  />
                </a>
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="group flex min-h-24 items-center justify-center rounded-2xl border border-amber-200/40 bg-white/[0.045] p-2 shadow-[0_0_0_1px_rgba(255,255,255,0.05)_inset] transition hover:border-amber-300/60 hover:bg-red-700/20 active:scale-95"
                  aria-label="Request a free estimate from Barneys Supply Company"
                >
                  <img
                    src={ContactUs}
                    alt="Free Estimate"
                    className="h-32 w-auto max-w-none object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.5)] transition duration-300 group-hover:scale-105 group-hover:brightness-110 sm:h-36"
                    loading="lazy"
                    decoding="async"
                  />
                </Link>
              </motion.div>

              <motion.button
                type="button"
                onClick={() => setIsOpen(false)}
                className="mt-5 w-full rounded-2xl border border-white/10 bg-white/[0.045] px-5 py-3 text-xs font-black uppercase tracking-[0.22em] text-zinc-300 transition hover:border-amber-300/40 hover:text-amber-200"
                variants={itemVariants}
                whileTap={{ scale: 0.98 }}
              >
                Close Menu
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div aria-hidden="true" className="h-24" />
    </>
  );
}

export default NavBar;
