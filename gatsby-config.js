module.exports = {
  siteMetadata: {
    name: `Mint IT`,
    title: `Mint IT`,
    description: `A website for mintIT`,
    author: `@MedDhia`,
    date: `October 07, 2019`,
  },
  plugins: [{
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "mintit.io",
        protocol: "https",
        hostingWPCOM: false,
        useACF: false,
        excludedRoutes: ["**/settings", "**/themes", "**/users/me"],
        verboseOutput: false,
        searchAndReplaceContentUrls: {
          sourceUrl: "mintit.io",
          replacementUrl: "http://localhost:8000",
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
