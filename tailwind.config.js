/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        custom: 'bg-slate-600',
      },
    },
  },
  plugins: [require("rippleui"), require("daisyui")],
};
