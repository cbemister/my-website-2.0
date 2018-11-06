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
      {
        hid: "description",
        name: "description",
        content: "My cool Web Development Blog"
      }
    ],
    link: [
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
            "@nuxtjs/dotenv"
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
              route: "/posts/" + key,
              payload: {postData: res.data[key]}
            });
          }
          return routes;
        });
    }
  }
};
