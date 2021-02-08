require("dotenv").config({
  path: `.env`,
})
module.exports = {
  siteMetadata: {
    title: `Handy repair in DongXuan`,
    author: {
      name: `stephan`,
      summary: `who lives and works in San Francisco building useful things.`,
    },
    description: `We building a small technik company.`,
    siteUrl: `https://repairphone24.de/`,
    social: {
      facebook: `stephan`,
    },
  },
  plugins: [
    // {
    //   resolve: `gatsby-plugin-layout`,
    //   options: {
    //     // component: require.resolve(`./src/components/Layout/`),
    //     component: require.resolve(`./src/pages/`),
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `image`,
      },
    },

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    // `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Handy repair in DongXuan`,
        short_name: `PhoneABC Gmbh`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#253993`,
        display: `minimal-ui`,
        icon: `content/assets/suachuaonline24.jpg`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ["Product", "Price"],
        secretKey: process.env.STRIPE_SECRET_KEY,
        downloadFiles: true,
        auth: false,
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyC16QuN5EOudPZUVFkXJgKesYAS-k4SG-s",
          authDomain: "repairphone24de-2d7d9.firebaseapp.com",
          databaseURL: "https://repairphone24de-2d7d9.firebaseio.com",
          projectId: "repairphone24de-2d7d9",
          storageBucket: "repairphone24de-2d7d9.appspot.com",
          messagingSenderId: "365447963123",
          appId: "1:365447963123:web:8488693569a5afca8e3286",
          measurementId: "G-1QP4PJ29JW",
        },
      },
    },
    // To learn more, visit: https://gatsby.dev/offline // this (optional) plugin enables Progressive Web App + Offline functionality
    // {
    //   resolve: `gatsby-plugin-offline`,
    //   options: {
    //     importWorkboxFrom: `cdn`,
    //     precachePages: [`/shop/`, `/about/*`, `/termin/`],
    //   },
    // },
    `gatsby-plugin-offline`,
    "gatsby-plugin-netlify", // make sure to keep it last in the array
  ],
}
