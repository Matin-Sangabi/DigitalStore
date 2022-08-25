module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 1s ease-in-out",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate3d(1,1,1, 360deg)" },
          "50%": { transform: "rotate(180deg)" },
        },
      },
    },
  },
  plugins: [],
};
