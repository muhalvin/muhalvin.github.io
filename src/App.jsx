import { motion } from "framer-motion";

const links = [
  {
    number: "01",
    title: "Technical writings",
    description: "Articles and engineering notes",
    href: "https://muhalvin.medium.com/",
    external: true,
  },
  {
    number: "02",
    title: "Personal thoughts",
    description: "A quieter corner of the internet",
    href: "https://muhalvin.my.id/",
    external: true,
  },
  {
    number: "03",
    title: "Say hello",
    description: "contact@muhalvin.my.id",
    href: "mailto:contact@muhalvin.my.id",
  },
];

function Arrow() {
  return (
    <span aria-hidden="true" className="link-arrow">
      ↗
    </span>
  );
}

function App() {
  const palestineBannerSrc = `${import.meta.env.BASE_URL}StandWithPalestine.svg`;

  return (
    <main className="page-shell">
      <motion.div
        className="portfolio"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <header className="site-header">
          <a
            className="wordmark"
            href="#home"
            aria-label="Muhammad Alvin, home"
          >
            ma<span>.</span>
          </a>
          <span className="availability">
            <i /> independent developer
          </span>
        </header>

        <aside className="solidarity" aria-label="A message of solidarity">
          <img src={palestineBannerSrc} alt="Stand with Palestine" />
          <p>
            Solidarity with people in Palestine, Iran, Yemen, Syria, Lebanon,
            Iraq, and Ukraine—and with all communities enduring genocide and
            war.
          </p>
        </aside>

        <section className="intro" id="home" aria-labelledby="intro-title">
          <p className="eyebrow">Web developer · Indonesia</p>
          <h1 id="intro-title">
            Hello, I’m <span>Muhammad Alvin.</span>
          </h1>
          <p className="intro-copy">
            I build thoughtful, dependable web experiences for people and
            businesses. As an independent developer, I take projects from first
            idea to polished launch.
          </p>
        </section>

        <section className="links-section" aria-labelledby="links-title">
          <div className="section-heading">
            <h2 id="links-title">Elsewhere</h2>
            <span>A few places to find me</span>
          </div>
          <nav aria-label="More from Muhammad Alvin">
            <ul className="link-list">
              {links.map((link, index) => (
                <motion.li
                  key={link.number}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.16 + index * 0.09, duration: 0.45 }}
                >
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noreferrer" : undefined}
                  >
                    <span className="link-number">{link.number}</span>
                    <span className="link-copy">
                      <span className="link-title">{link.title}</span>
                      <span className="link-description">
                        {link.description}
                      </span>
                    </span>
                    <Arrow />
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>
        </section>

        <footer className="site-footer">
          <span>Made with care, somewhere in Indonesia.</span>
          <span className="footer-mark">
            © 2023 - {new Date().getFullYear()} Muhalvin
          </span>
        </footer>
      </motion.div>
    </main>
  );
}

export default App;
