import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#092653",
        ocean: "#075bb2",
        mist: "#eef7ff",
      },
      boxShadow: {
        glass: "0 24px 80px rgba(7, 91, 178, 0.16)",
      },
      backgroundImage: {
        "hero-radial": "radial-gradient(circle at 20% 20%, rgba(0,121,255,.18), transparent 32%), radial-gradient(circle at 80% 0%, rgba(14,165,233,.16), transparent 30%), linear-gradient(135deg, #f8fbff 0%, #eef7ff 48%, #ffffff 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
