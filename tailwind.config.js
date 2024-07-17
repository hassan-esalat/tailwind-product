/** @type {import('tailwindcss').Config} */
module.exports = {
  // plugins: {
  //   "postcss-import": {},
  // },
  content: ["./public/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["vazir"],
    },
    extend: {
      spacing: {
        hsn: "5px",
      },
    },
  },
  plugins: [],
};
