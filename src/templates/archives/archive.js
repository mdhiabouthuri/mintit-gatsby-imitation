import React, { Component } from "react"
import Layout from "../../components/Layout"
import { Button, Row, Col } from "reactstrap"
import { Link } from "gatsby"
import moment from "moment"
import Cards from "../../components/Cards"
import CategoryNav from "../../components/CategoryNav"

class PostTemplate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isScrolled: false,
      windowsSize: 0,
      dropdownOpen: false,
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
    if (this.state.dropdownOpen && this.state.windowsSize > 915) {
      this.setState({
        dropdownOpen: false,
      })
    }
    this.setState({
      windowsSize: window.innerWidth,
    })
  }
  dropdownToggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    })
  }

  render() {

    return (
      <Layout windowsSize={this.state.windowsSize}
              dropdownToggle={this.dropdownToggle.bind(this)}
              dropdownOpen={this.state.dropdownOpen}
              isScrolled={this.state.isScrolled}
              backGround={"https://cdn.discordapp.com/attachments/442248513632468994/631911135519571988/unknown_1.png"}
      >

        <CategoryNav/>


        <div style={{
          marginRight: "7.6%",
          marginLeft: "7.6%",
          marginTop: "50px",
        }}>
          {this.props.data.wordpressPost && this.props.data.wordpressPost.featured_media && this.props.data.wordpressPost.featured_media.localFile.url ?
            <img
              src={this.props.data.wordpressPost && this.props.data.wordpressPost.featured_media && this.props.data.wordpressPost.featured_media.localFile.url}
              width="100%" alt="#"/>
            : null
          }
          <h1 style={{
            position: "relative",
            marginTop: "40px",
            fontFamily: "\"anton\", sans-serif",
            letterSpacing: "5px", color: "#4a4a4a",
          }}>
            {this.props.data.wordpressPost.title}
          </h1>
          <div style={{
            color: "#4a4a4a", fontSize: "20px",
          }}
               dangerouslySetInnerHTML={{
                 __html:
                   this.props.data.wordpressPost && this.props.data.wordpressPost.content ? this.props.data.wordpressPost.content : "",
               }}
          />
          <hr style={{ marginTop: "50px" }}/>
          <div>
            <img style={{ borderRadius: "50%", marginBottom: "15px", float: "left" }}
                 src="https://secure.gravatar.com/avatar/cc1792ed99fcdaf4ef4bad219dd76876?s=45&d=mm&r=g"
                 alt="#"/>
            <div style={{ float: "left", marginLeft: "10px", color: "#9e9e9e" }}>
              <h5>The Team</h5>
              <p style={{ fontSize: "15px", position: "relative", bottom: "7px" }}>
                {moment(this.props.data.wordpressPost.date).format("MMMM D, YYYY")}
              </p>
            </div>
          </div>
          <div style={{ clear: "both", position: "relative", right: "10px" }}>{this.props.data.wordpressPost.tags ?

            this.props.data.wordpressPost.tags.map((tag, tagIndex) => {
              return <Link key={tagIndex} to={tag.path.replace("//localhost:8000", "")}>
                <Button key={tagIndex} style={{
                  backgroundColor: "#e6e5e5", border: "#e6e5e5",
                  color: "#9e9e9e", fontSize: "20px", marginLeft: "10px",
                }}>
                  <h5>
                    {tag.name}
                  </h5>
                </Button>
              </Link>
            })

            : null}</div>
          <hr/>
        </div>
        <Cards/>
      </Layout>
    )
  }
}

export default PostTemplate
export const pageQuery = graphql`
    query currentPostQuery($id: String!) {
        wordpressPost(id: { eq: $id }) {
            id
            title
            content
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
`
