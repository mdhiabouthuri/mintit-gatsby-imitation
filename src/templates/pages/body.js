import React, { Component } from "react"
import { Button } from "reactstrap"
import { Link } from "gatsby"
import moment from "moment"

class Body extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isHovered: false,
    }
  }

  toggleBtnHover = () => {
    this.setState({ isHovered: !this.state.isHovered })
    if (this.state.isHovered)
      console.log("Hovered")
    else console.log("notHovered")
  }

  render() {

    let posts = this.props.currentPage.allWordpressPost.nodes.filter(e => {
      return e.categories && e.categories[1] ? e.categories[1].slug === "uiux" || e.categories[1].slug === "webdesign"
        || e.categories[1].slug === "news" || e.categories[1].slug === "technologies"
        : e.categories && e.categories[2] ? e.categories[2].slug === "uiux" || e.categories[2].slug === "webdesign"
          || e.categories[2].slug === "news" || e.categories[2].slug === "technologies" : e.categories[0].slug === "uiux" ||
          e.categories[0].slug === "webdesign" || e.categories[0].slug === "news" || e.categories[0].slug === "technologies"

    })

    console.log(posts.map(e => {
      return e
    }))

    return <div>

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
      {posts.map((e, i) => {
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
    </div>
  }
}

export default Body
