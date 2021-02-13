require('dotenv').config()
const fetch = require('isomorphic-fetch')
const { createHttpLink } = require('apollo-link-http')


const urljoin = require('url-join')
const path = require('path')
const config = require('./configs/SiteConfig')


const urljoin = require("url-join");
const config = require("./configs/SiteConfig");
 

module.exports = {
  pathPrefix: config.pathPrefix === '' ? '/' : config.pathPrefix,
  siteMetadata: {
    siteUrl: urljoin(config.siteUrl, config.pathPrefix),
    title: config.siteTitle,
    description: config.siteDescription,
    social: {
      twitter: `VladimirNovick`,
    },
    rssMetadata: {
      site_url: urljoin(config.siteUrl, config.pathPrefix),
      feed_url: urljoin(config.siteUrl, config.pathPrefix, config.siteRss),
      title: config.siteTitle,
      description: config.siteDescription,
      image_url: `${urljoin(
        config.siteUrl,
        config.pathPrefix
      )}/${__dirname}/assets/img/favicon.png`,
      copyright: config.copyright,
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'products',
        fieldName: 'products',
        createLink: () => {
          return createHttpLink({
            uri: 'http://localhost:8080/v1/graphql',
            headers: {
              'x-hasura-admin-secret':
                process.env.GATSBY_HASURA_GRAPHQL_ADMIN_SECRET,
            },
            fetch,
          })
        },
      },
    },
    `gatsby-transformer-yaml`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    // `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-recaptcha`,
      options: {
        async: false,
        defer: false,
        args: `?onload=onloadCallback&render=explicit`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // name: 'gatsby-starter-default',
        name: 'images',
        path: `${__dirname}/data/images`,
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/img/favicon.png', // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/content/products`,
        name: 'products',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/content/services`,
        name: 'services',
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-offline',
  ],
}
