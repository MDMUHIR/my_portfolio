// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  plugins: [
    "~/plugins/crisp.js", //
  ],
  app: {
    head: {
      title: "MD MUHIR",
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.png" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Playfair+Display:wght@400;700&display=swap",
        },
        {
          rel: "preload",
          href: "https://client.crisp.chat/l.js",
          as: "script",
        },
      ],
      script: [
        {
          src: "https://client.crisp.chat/l.js",
          async: true,
        },
      ],
      // script: [
      //   {
      //     src: "https://static.elfsight.com/platform/platform.js",
      //     async: true,
      //   },
      // ],
    },
  },
});
