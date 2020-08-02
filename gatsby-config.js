module.exports = {
  siteMetadata: {
    // edit below
    title: `Kaushal Mehta`,
    author: `Kaushal Mehta`,
    description: `Kaushal Mehta Computer Science Student`,
    siteUrl: `https://gatsby-starter-blog-demo.netlify.com/`,
    social: {
      twitter: `k_kaushal_`,
      // instagram: "k_kaushal",
    },
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-feed-mdx`,
    "gatsby-plugin-dark-mode",
    "gatsby-plugin-page-progress",
    "gatsby-plugin-nprogress",
    {
      resolve: "gatsby-plugin-page-progress",
      options: {
        includePaths: [{ regex: "^/blog" }],
        excludePaths: ["/", "/projects", "/about"],
        color: "#987659",
        height: 2,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },

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
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-vscode`,
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
          },
          {
            resolve: `gatsby-remark-smartypants`,
          },
        ],
        plugins: [`gatsby-remark-images`],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // edit below
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || "none",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kaushal Mehta`,
        short_name: `Kaushal Mehta`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ff4e55`,
        display: `minimal-ui`,
        // edit below
        // icon: `content/assets/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
