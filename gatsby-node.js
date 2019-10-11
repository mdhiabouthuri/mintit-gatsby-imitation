const path = require("path")

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  return new Promise((resolve, reject) => {
    // Remove trailing slash
    const newPage = Object.assign({}, page, {
      path: page.path === `/` ? page.path : page.path.replace(/\/$/, ``),
    })

    if (newPage.path !== page.path) {
      // Remove the old page
      deletePage(page)
      // Add the new page
      createPage(newPage)
    }

    resolve()
  })
}

// Create slides from WordPress.
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const pagesTemplate = path.resolve(`./src/templates/pages/page.js`)
  const categoriesTemplate = path.resolve(`./src/templates/categories/category.js`)
  const postsTemplate = path.resolve(`./src/templates/archives/archive.js`)

  return graphql(`
    {
      allWordpressPage {
        edges {
          node {
            id
            path
          }
        }
      }
      allWordpressCategory {
        edges {
          node {
            id
            path
          }
        }
      }
      allWordpressPost {
        edges {
          node {
            id
            path
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    //creating page per post
    result &&
    result.data &&
    result.data.allWordpressPost &&
    result.data.allWordpressPost.edges.map(edge => {
      createPage({
        path: `${edge.node.path.replace("//localhost:8000", "")}`,
        component: postsTemplate,
        context: {
          id: `${edge.node.id}`,
        },
      })
    })

    result &&
    result.data &&
    result.data.allWordpressPage &&
    result.data.allWordpressPage.edges.map(edge => {
      createPage({
        path: `${edge.node.path.replace("//localhost:8000", "")}`,
        component: pagesTemplate,
        context: {
          id: `${edge.node.id}`,
        },
      })
    })
    result &&
    result.data &&
    result.data.allWordpressCategory &&
    result.data.allWordpressCategory.edges.map(edge => {
      createPage({
        path: `${edge.node.path.replace("//localhost:8000", "")}`,
        component: categoriesTemplate,
        context: {
          id: `${edge.node.id}`,
        },
      })
    })
  })
}
