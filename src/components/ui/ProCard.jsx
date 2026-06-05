import { motion } from "framer-motion";

function ProCard({
  children,
  className = "",
  as = "div",
  hover = true,
  ...props
}) {
  const Component = motion[as] || motion.div;
  return (
    <Component
      whileHover={hover ? { y: -6, scale: 1.01 } : undefined}
      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
      className={`relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/72 shadow-[0_24px_80px_rgba(0,0,0,0.36)] backdrop-blur-xl ${className}`}
      {...props}
    >
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[linear-gradient(135deg,rgba(255,255,255,0.12),transparent_28%,rgba(251,191,36,0.09)_58%,rgba(239,68,68,0.14))]" />
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/70 to-transparent" />
      <div className="relative z-10">{children}</div>
    </Component>
  );
}

export default ProCard;
