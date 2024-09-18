/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // warn - As of Tailwind CSS v3.3, the `@tailwindcss/line-clamp` plugin is now included by default.
    // warn - Remove it from the`plugins` array in your configuration to eliminate this warning.
    // require('@tailwindcss/line-clamp'),
    require("daisyui")
  ],
}

