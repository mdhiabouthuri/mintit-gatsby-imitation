import React, { Component } from "react"
import Layout from "../../components/Layout"
import { Button, Row, Col } from "reactstrap"
import { Link } from "gatsby"
import moment from "moment"

class PostTemplate extends Component {
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
    //29 26
    const str = "Tunsia has hosted this weekend one of the remarkably biggest events of Artificial intelligence and Machine learning in Africa and all the Men"
    console.log(str.length)
    return (
      <Layout windowsSize={this.state.windowsSize}
              isScrolled={this.state.isScrolled}
              backGround={"https://cdn.discordapp.com/attachments/442248513632468994/631911135519571988/unknown_1.png"}
      >
        <div style={{ backgroundColor: "#4b4b4b", height: "115px" }}>
          <div style={{ textAlign: "center", position: "relative", top: "22%" }}>
            <Button className="catBtn">
              UI - UX
            </Button>
            <Button className="catBtn">
              Web Design
            </Button>
            <Button className="catBtn">
              Technologies
            </Button>
            <Button className="catBtn">
              News
            </Button>
          </div>
        </div>

        <div style={{
          marginRight: "7.6%",
          marginLeft: "7.6%",
          marginTop: "50px",
        }}>
          <Link className="catLinks" to={this.props.data.wordpressPost.path.replace("//localhost:8000", "")}>
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
          </Link>
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
        <div style={{
          marginTop: "100px",
          backgroundColor: "white",
          width: "100%",
        }}>
          <h1 style={{
            marginTop: "40px",
            fontFamily: "\"anton\", sans-serif",
            letterSpacing: "5px", textAlign: "center", color: "#4a4a4a",
          }}>
            MINTY THOUGHTS
          </h1>
          <hr style={{
            marginTop: "20px",
            marginLeft: "45% ",
            marginRight: "45%",
            border: "2px solid #4a4a4a",
          }}/>
          <div style={{
            marginTop: "40px",
            marginLeft: "12%",
            marginRight: "12%",
            fontSize: "20px",
            fontFamily: "\"anton\", sans-serif",
            letterSpacing: "5px", textAlign: "center", color: "#4a4a4a",
          }}>
            Get some minty thoughts and discover with us the last trends and technologies in UIUX Design and
            softwares
          </div>
          <div style={{ marginTop: "50px", marginLeft: "7.6%", marginRight: "7.6%" }}>
            <Row className="no-gutters">
              {this.props.data.allWordpressPost.nodes.map((e, i) => {
                return <Col key={i} md={4} style={{ padding: "10px" }}>
                  <div className="Cards">
                    <Link className='catLinks' to={e.path.replace("//localhost:8000", "")}>
                      <img width='100%' src={e.featured_media.localFile.url} alt={i}/>

                      <h5 style={{ marginLeft: "4% ", marginRight: "4%", marginTop: "20px", color: "#4a4a4a" }}>
                        {e.title.length > 29 ? e.title.substring(0, 26) + "..." : e.title}
                      </h5>
                      <hr style={{
                        marginLeft: "4% ",
                        marginTop: "20px",
                        marginRight: "80%",
                        border: "2px solid #4a4a4a",
                      }}/>
                      <div style={{
                        marginLeft: "4%", marginRight: "4%",
                        color: "#4a4a4a", fontSize: "20px",
                      }}
                           dangerouslySetInnerHTML={{
                             __html:
                               e && e.excerpt ? e.excerpt.length > 147 ? e.excerpt.substring(0, 144) + "..." : e.excerpt : "",
                           }}
                      />
                      <hr style={{ marginTop: "20px" }}/>
                      <div style={{ marginLeft: "4%" }}>
                        <img style={{ borderRadius: "50%", marginBottom: "15px", float: "left" }}
                             src="https://secure.gravatar.com/avatar/cc1792ed99fcdaf4ef4bad219dd76876?s=45&d=mm&r=g"
                             alt="#"/>
                        <div style={{ float: "left", marginLeft: "10px", color: "#9e9e9e" }}>
                          <h5>The Team</h5>
                          <p style={{ fontSize: "15px", position: "relative", bottom: "7px" }}>
                            {moment(this.props.data.wordpressPost.date).format("MMMM D, YYYY")}
                          </p>
                        </div>
                        <div style={{ clear: "both" }}/>
                      </div>
                    </Link>
                  </div>
                </Col>
              })}

            </Row>
          </div>
        </div>
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
        allWordpressPost(limit: 3) {
            nodes {
                title
                path
                excerpt
                date
                featured_media {
                    localFile {
                        url
                    }
                }
            }
        }
    }
`
