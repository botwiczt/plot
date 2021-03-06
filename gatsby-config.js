const config = require('./src/data/config');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: config.defaultTitle,
    description: config.defaultDescription,
    author: config.author,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`, `avif`],
          placeholder: `blurred`
        }
      }
    },
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: config.themeColor,
        showSpinner: true,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.defaultTitle,
        short_name: 'plöt',
        start_url: '/',
        theme_color: config.themeColor,
        background_color: '#FFFFFF',
        display: 'minimal-ui',
        icon: './static/favicon/favicon-512.png',
      },
    },
    'gatsby-plugin-offline',
  ],
};
