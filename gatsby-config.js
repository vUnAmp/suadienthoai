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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        importWorkboxFrom: `cdn`,
        precachePages: [`/shop/`, `/about/*`, `/termin/`],
      },
    },
  ],
}
