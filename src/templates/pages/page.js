import React, { Component } from "react"
import Body from "./body"
import Layout from "../../components/Layout"

class PageTemplate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isScrolled: false,
      windowsSize: 0,
    }
  }

  componentDidMount() {
    this.handleWindowSizeChange()
    this.handleWindowSizeChange()
    window.addEventListener("scroll", this.handleScroll)
    window.addEventListener("resize", this.handleWindowSizeChange)

  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
    window.removeEventListener("resize", this.handleWindowSizeChange)

  }

  handleScroll = () => {
    window.requestAnimationFrame(() => {
      if (this.state.isScrolled === false && window.scrollY > 1)
        this.setState({ isScrolled: true })
      else if (this.state.isScrolled === true && window.scrollY < 1)
        this.setState({ isScrolled: false })
    })
  }
  handleWindowSizeChange = () => {
    this.setState({
      windowsSize: window.innerWidth,
    })
  }

  render() {
    const currentPage = this.props.data
    return (
      <Layout windowsSize={this.state.windowsSize}
              isScrolled={this.state.isScrolled}
              backGround={"https://cdn.discordapp.com/attachments/442248513632468994/631911135519571988/unknown_1.png"}
      >
        <Body
          windowsSize={this.state.windowsSize}
          isScrolled={this.state.isScrolled}
          currentPage={currentPage}
        />
      </Layout>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
    query currentPageQuery($id: String!) {
        wordpressPage(id: { eq: $id }) {
            title
            id
        }
        allWordpressPost {
            nodes {
                title
                excerpt
                path
                date
                categories {
                    slug
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