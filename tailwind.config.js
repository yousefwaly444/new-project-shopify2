module.exports = {
  content: ["./**/*.liquid", "./**/*.js"], // all files Tailwind should scan
  safelist: [
    "bg-black",
    "bg-gray-700/40",
    "bg-gray-900/50",
    "text-white",
    "text-red-900",
    "blur-sm",
    "bg-opacity-90",
    "blur-xl",
    "blur-xs",
    "grid",
    "grid-cols-1",
    "grid-cols-2",
    "grid-cols-3",
    "grid-cols-4",
    "sm:grid-cols-2",
    "lg:grid-cols-3",
    "xl:grid-cols-4",
    "gap-6",
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
    "rounded-md",
    "rounded-lg",
    "rounded-xl",
    "rounded-2xl",
    "rounded-full",
    "object-cover",
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
