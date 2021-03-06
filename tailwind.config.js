module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#70a1ff",
          secondary: "#1e90ff",
          accent: "#747d8c",
          neutral: "#3A5392",
          "base-100": "#ffffff",
        },
      },
      "aqua",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
};
