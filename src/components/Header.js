import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { Button } from "reactstrap"
import { FaBars } from "react-icons/fa"


const Header = ({ isScrolled, windowsSize, dropdownOpen, dropdownToggle }) => {
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

  const queriedTitles = titles.map(e => {
    return {
      titlesData: data.allWordpressPage.nodes.filter(data => {
        return data.title.toLowerCase() === e.toLowerCase()
      }),
      titleStr: e,
    }
  })
  return (
    <div style={isScrolled || dropdownOpen ?
      { backgroundColor: "#333", height: "12vh", position: "sticky", top: "0", zIndex: "1000" }
      : { height: "12vh", position: "absolute", width: "100%", top:'40px' }}>
      <div style={{ top: "30px", position: "relative", marginRight: "7.6%", marginLeft: "7.6%" }}
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
            <button className='menu-btn'
                    style={{
                      float: "right",
                      borderRadius: "13%",
                      paddingBottom: "4px",
                      paddingTop: "2px",
                      paddingLeft: "8px",
                      paddingRight: "8px",
                    }}
                    onClick={dropdownToggle}>
              <FaBars color={"white"}
                      size='1.4em'/>
            </button>

          </div>
        }

      </div>
      {dropdownOpen ?
        <div style={{ backgroundColor: "#333", position: "static", width: "100%" }}>
          <div style={{ paddingTop: "60px" }}/>
          <hr style={{ border: "1px solid #4a4a4a", marginLeft: "2%", marginRight: "2%" }}/>
          {queriedTitles.map((e, i) => {
            return <Link className="catLinks" key={i}
                         to={e.titlesData[0] && e.titlesData[0].path ? e.titlesData[0].path.replace("//localhost:8000", "") : "/"}>
              <div
                style={{
                  fontFamily: "\"Notable\", sans-serif",
                  textAlign: "center",
                  color: "white",
                  paddingBottom: "20px",
                }}>
                {e.titleStr}
              </div>
            </Link>
          })}
          <Link className="catLinks" to='/'>
            <div
              style={{
                fontFamily: "\"Notable\", sans-serif",
                textAlign: "center",
                color: "white",
                paddingBottom: "20px",
              }}>
              WORK WITH US! <div
              style={{ marginLeft: "5px", display: "inline", fontSize: "20px", color: "#4caf50" }}>→</div>
            </div>
          </Link>
          <br/>
        </div> : null}
    </div>
  )
}
export default Header
