import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { Button, Col, Row } from "reactstrap"

const Header = ({ isScrolled }) => {
  const data = useStaticQuery(graphql`
      query {
          allWordpressPage {
              nodes {
                  path
                  content
                  title
              }
          }
      }
  `)
  const titles = ["The Agency", "WorkProcess", "Services", "Carreers", "Blog"]

  const queryTitles = titles.map(e => {
    return {
      titlesData: data.allWordpressPage.nodes.filter(data => {
        return data.title.toLowerCase() === e.toLowerCase()
      }),
      titleStr: e,
    }
  })

  return (
    <div style={isScrolled ?
      { backgroundColor: "#333", height: "12vh", position: "sticky", top: "0", zIndex: "1000" } :
      { height: "12vh", position: "absolute", width: "100%" }}>
      <Row style={{ position: "relative" }} className="no-gutters">
        <Col md={1}/>
        <Col style={{ marginTop: "30px" }}>
          <Link to="/">
            <h3
              style={{ textAlign: "left", float: "left", color: "white", fontFamily: "\"Notable\", sans-serif" }}>
              MINT.IT
            </h3>
          </Link>
          <Button
            style={{
              position: "relative",
              bottom: "10px",
              height: "50px",
              fontSize: "12px",
              fontFamily: "\"Notable\", sans-serif",
              textAlign: "center",
              float: "right",
              backgroundColor: "white",
              color: "#57b14f",
              border: "red",
            }}>
            <div style={{ marginTop: "7px" }}>
              WORK WITH US
              <div style={{
                fontSize: "20px",
                float: "right",
                position: "relative",
                bottom: "10px",
                marginLeft: "5px",
              }}>
                →
              </div>
            </div>
          </Button>
          {queryTitles.reverse().map((e, i) => {
            return <Link key={i} to={e.titlesData[0] && e.titlesData[0].path ?e.titlesData[0].path.replace("//localhost:8000", ""): "/"}>
              <div
                style={{
                  marginRight: "20px",
                  marginTop: "5px", textAlign: "right",
                  float: "right",
                  color: "white",
                  fontFamily: "\"Notable\", sans-serif",
                }}>
                {e.titleStr}
              </div>
            </Link>
          })}
        </Col>
        <Col md={1}/>
      </Row>
    </div>
  )
}
export default Header
