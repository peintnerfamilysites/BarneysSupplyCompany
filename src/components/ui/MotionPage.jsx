import NavBar from "../navigation/NavBar";
import Footer from "../footer/Footer";

function MotionPage({ children, className = "" }) {
  return (
    <div
      className={`min-h-screen overflow-hidden bg-[radial-gradient(circle_at_20%_0%,rgba(220,38,38,0.34),transparent_33%),radial-gradient(circle_at_82%_12%,rgba(245,158,11,0.28),transparent_30%),linear-gradient(135deg,#030303_0%,#120202_42%,#2a0705_72%,#4b2105_100%)] text-white ${className}`}
    >
      <div className="pointer-events-none fixed inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.62)_78%)]" />
      <NavBar />
      <main className="relative z-10">{children}</main>
      <Footer />
    </div>
  );
}

export default MotionPage;
