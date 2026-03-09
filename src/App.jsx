import { motion } from "framer-motion";

function App() {
  const palestineBannerSrc = `${import.meta.env.BASE_URL}StandWithPalestine.svg`;

  return (
    <main className="page-shell flex min-h-screen items-center justify-center bg-hero-gradient px-4 py-6">
      <motion.section
        initial={{ opacity: 0, y: 14, scale: 0.985 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-soft backdrop-blur sm:p-8"
      >
        <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-emerald-300/10 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-sky-300/10 blur-3xl" />

        <div className="relative">
          <p className="inline-flex items-center rounded-full border border-emerald-200/20 bg-emerald-300/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-emerald-200">
            Web Developer
          </p>
          <h1 className="mt-4 font-display text-2xl font-semibold tracking-tight text-white sm:text-4xl">
            Muhammad Alvin
          </h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-300">
            Web Developer <br /> Focused on building reliable and scalable web
            systems. <br />
            Currently working at{" "}
            <a href="https://nusatama.co/" target="_blank" rel="noreferrer">
              <b>NUSATAMA</b>
            </a>
          </p>
        </div>

        <ul className="relative mt-8 space-y-3.5">
          <li>
            <a
              href="https://muhalvin.medium.com/"
              target="_blank"
              rel="noreferrer"
              className="group block rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3.5 transition hover:border-emerald-200/40 hover:bg-slate-900 focus-visible:border-emerald-200/60"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-slate-100 transition group-hover:text-emerald-200">
                    Technical Writings
                  </p>
                  <p className="mt-0.5 text-xs text-slate-400">
                    Articles and engineering notes
                  </p>
                </div>
                <span className="text-slate-500 transition group-hover:translate-x-0.5 group-hover:text-emerald-200">
                  ↗
                </span>
              </div>
            </a>
          </li>
          <li>
            <a
              href="https://muhalvin.my.id/"
              target="_blank"
              rel="noreferrer"
              className="group block rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3.5 transition hover:border-emerald-200/40 hover:bg-slate-900 focus-visible:border-emerald-200/60"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-slate-100 transition group-hover:text-emerald-200">
                    Personal Thoughts
                  </p>
                  <p className="mt-0.5 text-xs text-slate-400">
                    Thoughts and reflections
                  </p>
                </div>
                <span className="text-slate-500 transition group-hover:translate-x-0.5 group-hover:text-emerald-200">
                  ↗
                </span>
              </div>
            </a>
          </li>

          <li>
            <a
              href="mailto:contact@muhalvin.my.id"
              className="group block rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3.5 transition hover:border-emerald-200/40 hover:bg-slate-900 focus-visible:border-emerald-200/60"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-slate-100 transition group-hover:text-emerald-200">
                    Contact
                  </p>
                  <p className="mt-0.5 text-xs text-slate-400">Email me</p>
                </div>
                <span className="text-slate-500 transition group-hover:translate-x-0.5 group-hover:text-emerald-200">
                  ↗
                </span>
              </div>
            </a>
          </li>
        </ul>

        <a
          href="#"
          rel="noreferrer"
          className="relative mx-auto mt-8 block w-full max-w-xs overflow-hidden rounded-xl border border-white/10 transition hover:border-emerald-200/40"
        >
          <img
            src={palestineBannerSrc}
            alt="Stand With Palestine"
            className="w-full"
          />
        </a>
      </motion.section>
    </main>
  );
}

export default App;
