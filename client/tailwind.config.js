/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(214.3, 31.8%, 91.4%)", // Yeh jo --border hai, usko yahan define kar diya
        background: "hsl(0, 0%, 100%)", // Tumhare background color ke liye
        foreground: "hsl(222.2, 84%, 4.9%)",
      },
    },
  },
  plugins: [],
};
