/**
 * @type {import('gatsby').GatsbyConfig}
 */

require('dotenv').config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `Sukhdev | Portfolio`,
    siteUrl: `https://sukhdev.vercel.app/`
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-dark-mode',
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `png`],
          placeholder: `none`,
        }
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/'
      },
      __key: 'images'
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        start_url: `/`,
        icon: `src/images/logo-blue-sm.png`,
      },
    },
  ]
};
