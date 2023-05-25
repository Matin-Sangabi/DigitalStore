module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 1s ease-in-out",
        pulse: "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },

      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate3d(1,1,1, 360deg)" },
          "50%": { transform: "rotate(180deg)" },
        },
      },
      backgroundImage: {
        'hero-pattern' : "url(./../src/assets/images/90576.png)",
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
