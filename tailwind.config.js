module.exports = {
  content: ["./**/*.liquid", "./**/*.js"], // all files Tailwind should scan
  safelist: [
    "bg-black",
    "text-white",
    "px-8",
    "py-3",
    "border",
    "border-gray-600",
    "border-3",
    "border-4",
    "border-amber-600",
    "border-yellow-600",
    "w-32",
    "h-32",
    "rounded",
    "object-cover",
    "sm:flex-col",
    "sm:flex-row",
    "sm:flex-col",
    "sm:flex-row",
    "inline-block",
    "my-4",
    "mt-4"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a202c', // example custom color
        secondary: '#2d3748'
      },
      spacing: {
        18: '4.5rem', // example custom spacing
      }
    },
  },
  plugins: [
    // e.g., require('@tailwindcss/forms'), // optional plugin
  ],
};
