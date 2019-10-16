import React, { Component } from "react"
import Layout from "../../components/Layout"
import { Button } from "reactstrap"
import { Link } from "gatsby"
import moment from "moment"
import CategoryNav from "../../components/CategoryNav"

class TagTemplate extends Component {
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


        <CategoryNav/>
        {this.props.data.allWordpressPost.nodes.map((e, i) => {
          return <div key={i} style={{
            marginRight: "7.6%",
            marginLeft: "7.6%",
            marginTop: "50px",
          }}>
            <Link className="catLinks" to={e.path.replace("//localhost:8000", "")}>
              {e && e.featured_media && e.featured_media.localFile.url ?
                <img src={e && e.featured_media && e.featured_media.localFile.url} width="100%" alt="#"/>
                : null
              }
              <h1 style={{
                position: "relative",
                marginTop: "40px",
                fontFamily: "\"anton\", sans-serif",
                letterSpacing: "5px", color: "#4a4a4a",
              }}>
                {e.title}
              </h1>
              <div style={{
                color: "#4a4a4a", fontSize: "20px",
              }}
                   dangerouslySetInnerHTML={{
                     __html:
                       e && e.excerpt ? e.excerpt : "",
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
                  {moment(e.date).format("MMMM D, YYYY")}
                </p>
              </div>
            </div>
            <div style={{ clear: "both", position: "relative", right: "10px" }}>{e.tags ?

              e.tags.map((tag, tagIndex) => {
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
        })}



      </Layout>
    )
  }
}

export default TagTemplate
export const tagQuery = graphql`
    query currentTagQuery($id: String!) {
        allWordpressPost(filter: {tags: {elemMatch: {id: {eq: $id}}}}) {
            nodes {
                title
                content
                date
                path
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
