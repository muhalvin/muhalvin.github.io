/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["'Manrope'", "sans-serif"],
        display: ["'Outfit'", "sans-serif"]
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0, 0, 0, 0.35)"
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(circle at 15% 15%, rgba(56, 189, 248, 0.12), transparent 40%), radial-gradient(circle at 85% 10%, rgba(99, 102, 241, 0.1), transparent 42%), linear-gradient(180deg, #020617 0%, #0B1120 45%, #020617 100%)"
      }
    }
  },
  plugins: []
};
