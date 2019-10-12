import React, { useState } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap"

const Header = ({ isScrolled, windowsSize }) => {
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
  const [dropdownOpen, setDropdownOpen] = useState(false)

  function toggle() {
    setDropdownOpen(!dropdownOpen)
  }

  const titles = ["The Agency", "WorkProcess", "Services", "Carreers", "Blog"]

  const queriedTitles = titles.map(e => {
    return {
      titlesData: data.allWordpressPage.nodes.filter(data => {
        return data.title.toLowerCase() === e.toLowerCase()
      }),
      titleStr: e,
    }
  })
  console.log(windowsSize)
  return (
    <div style={isScrolled || dropdownOpen ?
      { backgroundColor: "#333", height: "12vh", position: "sticky", top: "0", zIndex: "1000" }
      : { height: "12vh", position: "absolute", width: "100%" }}>
      <div style={{ paddingTop: "30px", position: "relative", marginRight: "7.6%", marginLeft: "7.6%" }}
           className="no-gutters">
        <Link to="/">
          <h3
            style={{ textAlign: "left", float: "left", color: "white", fontFamily: "\"Notable\", sans-serif" }}>
            MINT.IT
          </h3>
        </Link>


        {windowsSize > 915 ?
          <div>
            <Button
              style={Object.assign({
                position: "relative",
                bottom: "10px",
                height: "50px",
                fontFamily: "\"Notable\", sans-serif",
                textAlign: "center",
                float: "right",
                backgroundColor: "white",
                color: "#57b14f",
                border: "red",
              }, windowsSize > 1125 ? { fontSize: "12px" } : { fontSize: "8px" })}>
              <div style={{ marginTop: "7px", float: "left" }}>
                WORK WITH US
                <div style={Object.assign({
                  float: "right",
                  position: "relative",
                  transform: "translateY(-30%)",
                  marginLeft: "6px",
                }, windowsSize > 1125 ? { fontSize: "20px" } : { fontSize: "14px" })}>
                  →
                </div>
              </div>
            </Button>
            {queriedTitles.reverse().map((e, i) => {
              return <Link key={i}
                           to={e.titlesData[0] && e.titlesData[0].path ? e.titlesData[0].path.replace("//localhost:8000", "") : "/"}>
                <div
                  style={Object.assign({
                    marginRight: "20px",
                    marginTop: "5px", textAlign: "right",
                    float: "right",
                    color: "white",
                    fontFamily: "\"Notable\", sans-serif",
                  }, windowsSize < 1125 ? { fontSize: "12px" } : null)}>
                  {e.titleStr}
                </div>
              </Link>
            })}
          </div> :
          <div>
            <button style={{ float: "right" }} onClick={toggle}>x</button>

          </div>
        }

      </div>
      {dropdownOpen ?
        <div style={{ backgroundColor: "#333", position: "static", width:'100%' }}>
          <div style={{ paddingTop: "40px" }}/>
          <hr style={{ border: "1px solid #4a4a4a", marginLeft: "2%", marginRight: "2%" }}/>
          <div style={{ color: "white", textAlign: "center", backgroundColor: "#333" }}> azeqsd</div>
        </div> : null}
    </div>
  )
}
export default Header
