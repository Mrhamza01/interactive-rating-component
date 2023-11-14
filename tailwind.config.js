/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      Orange: "hsl(25, 97%, 53%)",
      White: "hsl(0, 0%, 100%)",
      "Light-Grey": "hsl(217, 12%, 63%)",
      "Medium-Grey": "hsl(216, 12%, 54%)",
      "Dark-Blue": "hsl(213, 19%, 18%)",

      "Very-Dark-Blue": "hsl(216, 12%, 8%)",
    },
    fontFamily: {
      Overpass: ["Overpass"],
    },
  },
  plugins: [],
};
