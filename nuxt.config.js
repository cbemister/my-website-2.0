const pkg = require("./package");
const bodyParser = require("body-parser");
const axios = require("axios");

module.exports = {
  mode: "universal",

  /*
  ** Headers of the page
  */
  head: {
    title: "ChrisBemister.com",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-title", content: "My Website" },
      { name: "apple-mobile-web-app-status-bar-style", content: "default" },
      {
        hid: "description",
        name: "description",
        content: "My cool Web Development Blog"
      }
    ],
    link: [
      { rel: "apple-touch-startup-image", sizes: "1125x2436", media: "(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)", href: "/apple-launch-1125x2436.png" },
      { rel: "apple-touch-startup-image", sizes: "750x1334", media: "(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)", href: "/apple-launch-750x1334.png" },
      { rel: "apple-touch-startup-image", sizes: "1242x2208", media: "(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3)", href: "/apple-launch-1242x2208.png" },
      { rel: "apple-touch-startup-image", sizes: "640x1136", media: "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)", href: "/apple-launch-640x1136.png" },
      { rel: "apple-touch-startup-image", sizes: "1536x2048", media: "(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)", href: "/apple-launch-1536x2048.png" },
      { rel: "apple-touch-startup-image", sizes: "1668x2224", media: "(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)", href: "/apple-launch-1668x2224.png" },
      { rel: "apple-touch-startup-image", sizes: "2048x2732", media: "(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)", href: "/apple-launch-2048x2732.png" },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Open+Sans"
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#222", height: "4px", duration: 5000 },
  loadingIndicator: {
    name: "circle",
    color: "#222"
  },

  /*
  ** Global CSS
  */
  css: ["~assets/styles/main.css", "~assets/css/bundled.min.css"],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ["~plugins/core-components.js", "~plugins/date-filter.js"],

  /*
  ** Nuxt.js modules
  */
  modules: [
            "@nuxtjs/axios",
            "@nuxtjs/onesignal", 
            ["@nuxtjs/pwa", { icon: true }],
            ['@nuxtjs/google-tag-manager', { id: 'GTM-5S5FK6M' }],
            "@nuxtjs/dotenv",
            '@nuxtjs/vuetify'
          ],
  axios: {
    baseURL: process.env.BASE_URL || "https://chrisbemister83.firebaseio.com",
    credentials: false
  },
  workbox: {
    importScripts: [
        'custom-sw.js'
    ],
  },
  oneSignal: {
    init: {
      appId: 'c27fb998-d28a-46b5-a35b-7ddf63756c09',
      allowLocalhostAsSecureOrigin: true,
      welcomeNotification: {
          disable: true
      }
    }
  },
  vuetify: {
    // Vuetify options
    //  theme: { }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {}
  },
  env: {
    baseUrl: process.env.BASE_URL || "https://chrisbemister83.firebaseio.com",
    apiKey: process.env.apiKey
  },
  transition: {
    name: "fade",
    mode: "out-in"
  },
  // router: {
  //   middleware: 'log'
  // }
  serverMiddleware: [bodyParser.json(), "~/api"],
  generate: {
    routes: function() {
      return axios
        .get("https://chrisbemister83.firebaseio.com/posts.json")
        .then(res => {
          const routes = [];
          for (const key in res.data) {
            routes.push({
              //route: "/posts/" + key,
              route: res.data[key].slug,
              payload: {postData: res.data[key]}
            });
          }
          return routes;
        });
    }
  }
};
