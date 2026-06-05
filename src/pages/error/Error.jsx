import { Link, useRouteError } from "react-router-dom";
import Seo from "../../components/seo/Seo";
import MotionPage from "../../components/ui/MotionPage";
import ProCard from "../../components/ui/ProCard";
import { routeSeo } from "../../config/seo";

function getErrorDetails(error) {
  if (!error) {
    return {
      status: 404,
      statusText: "Page Not Found",
      message:
        "The requested URL does not match a page inside the Barneys Supply website.",
      source: "React Router",
    };
  }

  return {
    status: error.status || "App Error",
    statusText: error.statusText || error.name || "Unexpected Site Error",
    message:
      error.message ||
      (typeof error === "string"
        ? error
        : "An unexpected rendering or routing issue interrupted this page."),
    source: error.data ? "Route response" : "Client application",
    stack: error.stack,
  };
}

function Error() {
  const error = useRouteError();
  const details = getErrorDetails(error);

  return (
    <>
      <Seo {...routeSeo.error} />
      <MotionPage>
        <section className="mx-auto flex min-h-[68svh] max-w-6xl items-center px-4 py-16 sm:px-6 lg:px-8">
          <ProCard hover={false} className="w-full overflow-hidden p-0">
            <div className="grid gap-0 lg:grid-cols-[.82fr_1.18fr]">
              <div className="border-b border-white/10 bg-gradient-to-br from-red-950/80 via-zinc-950 to-amber-950/40 p-7 md:p-10 lg:border-b-0 lg:border-r">
                <p className="text-xs font-black uppercase tracking-[0.3em] text-amber-300">
                  Site Diagnostic Reader
                </p>
                <h1 className="mt-4 text-4xl font-black leading-tight tracking-[-0.045em] text-white md:text-6xl">
                  Something did not load the way it should.
                </h1>
                <p className="mt-5 text-sm leading-7 text-zinc-300 md:text-base md:leading-8">
                  This page catches routing problems and unexpected app errors
                  so the issue is easier to understand. You can return home,
                  contact Barneys, or use the diagnostic card to see what
                  happened.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                  <Link
                    to="/"
                    className="rounded-full bg-gradient-to-r from-red-700 via-red-600 to-amber-400 px-6 py-3 text-center text-sm font-black uppercase tracking-[0.16em] text-white shadow-[0_18px_42px_rgba(185,28,28,0.3)] transition hover:scale-[1.02] hover:brightness-110"
                  >
                    Return Home
                  </Link>
                  <Link
                    to="/contact"
                    className="rounded-full border border-white/15 bg-white/[0.08] px-6 py-3 text-center text-sm font-black uppercase tracking-[0.16em] text-white transition hover:border-amber-300/45 hover:bg-amber-300/10"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-zinc-950/85 shadow-[0_30px_80px_rgba(0,0,0,.4)]">
                  <div className="flex items-center gap-2 border-b border-white/10 bg-black/55 px-5 py-4">
                    <span className="h-3 w-3 rounded-full bg-red-500/80" />
                    <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400/70" />
                    <span className="ml-3 text-[10px] font-black uppercase tracking-[0.24em] text-zinc-500">
                      Diagnostic Report
                    </span>
                  </div>

                  <div className="grid gap-4 p-5 font-mono text-xs leading-6 text-zinc-400 md:p-6">
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                        <p className="text-zinc-600">// Code</p>
                        <p className="mt-1 text-2xl font-black text-red-300">
                          {details.status}
                        </p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                        <p className="text-zinc-600">// Status</p>
                        <p className="mt-1 break-words text-lg font-black text-amber-200">
                          {details.statusText}
                        </p>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-black/35 p-4">
                      <p className="text-zinc-600">// Source</p>
                      <p className="mt-1 text-zinc-200">{details.source}</p>
                    </div>

                    <div className="rounded-2xl border border-red-400/15 bg-red-500/10 p-4">
                      <p className="text-red-300">Error Exception:</p>
                      <p className="mt-2 whitespace-pre-wrap break-words text-zinc-200">
                        {details.message}
                      </p>
                    </div>

                    {details.stack && (
                      <details className="rounded-2xl border border-white/10 bg-black/35 p-4">
                        <summary className="cursor-pointer font-black uppercase tracking-[0.18em] text-zinc-400 transition hover:text-amber-200">
                          View stack trace
                        </summary>
                        <pre className="mt-4 max-h-56 overflow-auto whitespace-pre-wrap break-words text-[10px] leading-5 text-zinc-500">
                          {details.stack}
                        </pre>
                      </details>
                    )}

                    <div className="rounded-2xl border border-amber-300/15 bg-amber-300/10 p-4 font-sans text-sm leading-6 text-amber-100">
                      If this happened after clicking an old link or refreshing
                      a deployed route, use Return Home. If it keeps happening,
                      send a screenshot of this diagnostic card with your
                      project details.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ProCard>
        </section>
      </MotionPage>
    </>
  );
}

export default Error;
