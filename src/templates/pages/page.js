import React, { Component } from "react"
import Body from "./components/body"
import Layout from "../../components/Layout"

class PageTemplate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isScrolled: false,
      windowsSize: 0,
      dropdownOpen: false,
    }
  }


  handleState = (state, newState) => {
    this.setState({ [state]: newState })
  }


  render() {

    return (
      <Layout handleState={this.handleState.bind(this)}
              backGround={"https://cdn.discordapp.com/attachments/442248513632468994/631911135519571988/unknown_1.png"}
      >

        <Body
          currentPage={this.props.data}
        />
      </Layout>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
    query currentPageQuery($id: String!) {
        wordpressPage(id: { eq: $id }) {
            id
            slug
            path
            title
        }
        allWordpressPost {
            nodes {
                title
                excerpt
                path
                date
                categories {
                    path
                }
                featured_media {
                    localFile {
                        url
                    }
                }
                tags {
                    name
                    path
                }
            }
        }
    }
`