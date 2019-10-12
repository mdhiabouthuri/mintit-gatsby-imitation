import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { Col, Row } from "reactstrap"
import moment from "moment"

export default () => {
  const data = useStaticQuery(graphql`
      query{
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
  `)

  return (
    <div>
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
            {data.allWordpressPost.nodes.map((e, i) => {
              return <Col key={i} lg={4} md={6} sm={12} style={{ padding: "10px" }}>
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
                          {moment(e.date).format("MMMM D, YYYY")}
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
    </div>
  )
}



