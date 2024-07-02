// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      title: "NuxtJs Admin & Dashboard Template",
      htmlAttrs: { dir: "ltr", lang: "en" },
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Steex is a modern and responsive Nuxt.js admin & dashboard template that is perfect for building powerful and user-friendly web applications. It comes with a wide range of features, including a built-in CMS, a user management system, and a variety of pre-built pages and components."
        },
        {
          name: "keywords",
          content:
            "steex, nuxt.js, admin template, dashboard template, web application, cms, user management"
        },
        { name: "author", content: "Themesbrand" }
      ],
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }]
    }
  },
  build: {
    // standalone: true,
    // chunkSizeWarningLimit: 5000,
  },
  runtimeConfig: {
    // Public keys that are exposed to the client
    public: {
      VUE_APP_I18N_LOCALE: "en",
      VUE_APP_I18N_FALLBACK_LOCALE: "en",
      VUE_APP_DEFAULT_AUTH: "authapi"
    }
  },

  // middleware: ["auth"],

  alias: {
    assets: "/assets",
    public: "/public"
  },
  modules: [
    "@nuxt/content",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"]
      }
    ],
    "@nuxtjs/google-fonts"
  ],

  plugins: [
    "~/plugins/vue-bootstrap.client.js",
    "~/plugins/vue-i18n.js",
    "~/plugins/SimpleBar.js",
    { src: "~/plugins/VueApexCharts.js", mode: "client" },
    { src: "~/plugins/maska.js", mode: "client" }
  ],
  css: [
    "bootstrap-vue-next/dist/bootstrap-vue-next.css",
    "~/assets/scss/app.scss",
    "simplebar/dist/simplebar.min.css"
  ],
  imports: {
    dirs: ["stores"]
  },
  googleFonts: {
    families: {
      Poppins: [300, 400, 500, 600, 700],
      Inter: [300, 400, 500, 600, 700],
      "Open+Sans": [300, 400, 500, 600, 700],
      Nunito: [300, 400, 500, 600, 700],
      Karla: [300, 400, 500, 600, 700],
      Gantari: [300, 400, 500, 600, 700]
    },
    display: "swap"
  }
});
