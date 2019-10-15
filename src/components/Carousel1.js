import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import RBCarousel from "react-bootstrap-carousel"
import "bootstrap/dist/css/bootstrap.css"
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css"
import styled, { keyframes } from "styled-components"

import { Col, Row } from "reactstrap"

const Carousel1 = ({ windowsSize }) => {
  const data = useStaticQuery(graphql`
      {
          allWordpressPost(filter: {categories: {elemMatch: {slug: {eq: "header"}}}}) {
              nodes {
                  slug
                  title
                  content
                  categories {
                      slug
                  }
              }
          }
      }
  `)

  const [hover, setHover] = useState(true)
  const path = window.location.pathname.replace(/\//g, "").replace(/-/g, "").replace(/page/g, "")

  // console.log(path.charAt(path.length - 1) === "s" ? path.slice(0, -1) + "" : path)

  let posts = data.allWordpressPost.nodes
  posts = posts.map((element) => {
    return {
      ...element, categories: element.categories.map((subElement) => {
        return subElement.slug.replace(/-/g, "").replace(/header/g, "")
      }),
    }
  })


  const result = posts.filter((item) => {
    return (item.categories.indexOf(
      path !== "" ? path.charAt(path.length - 2) !== "s" && path.charAt(path.length - 1) === "s" ? path.slice(0, -1) + "" : path
        : "index",
    ) >= 0)
  })
  let filteredResult = result.filter(e => e.slug !== "its-about-time-2")
  console.log(filteredResult)

  // function filterByValue(array, string) {
  //   return array.filter(o =>
  //     Object.keys(o).some(k => o[k].toLowerCase().includes(string.toLowerCase())))
  // }
  //
  // const arrayOfObject = [{ name: "Paul", country: "Canada" }, { name: "Lea", country: "Italy" }, {
  //   name: "John",
  //   country: "Italy",
  // }]

  // console.log(filterByValue(arrayOfObject, 'lea')); // [{name: 'Lea', country: 'Italy'}]
// console.log(filterByValue(arrayOfObject, 'ita'));

  return (
    <div onMouseEnter={() => setHover(true)}
         onMouseLeave={() => setHover(false)}
         style={{ marginLeft: "7%", marginTop: "10%" }}>
      <RBCarousel
        animation={true}
        autoplay={true}
        slideshowSpeed={3000}
        defaultActiveIndex={0}
        version={4}
        className='carousel1'
        indicators={false}
      >
        {filteredResult.map((e, i) => {
          return <div key={i} style={Object.assign({
            height: 400,
            color: "white",
          }, windowsSize >= 991 ? { width: "80%" } : { width: "99%" })}>
            <Row className="no-gutters" style={{ paddingTop: "40px" }}>
              <Col style={{ width: "800px" }}>
                <h1 style={{
                  letterSpacing: "5px",
                  fontSize: "45px",
                  fontFamily: "\"anton\", sans-serif",
                }}>{e.title} </h1>
                <p style={{ marginTop: "40px", fontSize: "20px", wordWrap: "break-word" }}
                   dangerouslySetInnerHTML={{ __html: e && e.content ? e.content : "" }}>
                </p>
              </Col>
              {windowsSize >= 991 ?
                <Col md={1} style={{ transform: "rotate(90deg)", position: "absolute", left: "80%" }}>
                  {hover ?
                    <div style={{ transform: "rotate(-90deg)", position: "relative", left: "62px", bottom: "22px" }}>
                      <a target="_blank" href="https://www.facebook.com/MintITApps">
                        <img style={{ marginBottom: "15px" }}
                             src="https://mintit.io/wp-content/themes/minty-company/img/assets_landing_mint/facebook_icon.png"
                             alt="#"/>
                      </a>
                      <br/>
                      <a target="_blank" href="https://www.instagram.com/mintit.io">
                        <img style={{ marginBottom: "15px" }}
                             src="https://mintit.io/wp-content/themes/minty-company/img/assets_landing_mint/instagram_icon.png"
                             alt="#"/>
                      </a>
                      <br/>
                      <a target="_blank" href="https://mintit.io/">
                        <img style={{ marginBottom: "15px" }}
                             src="https://mintit.io/wp-content/themes/minty-company/img/assets_landing_mint/googleplus_icon.png"
                             alt="#"/>
                      </a>
                      <br/>
                      <a target="_blank" href="https://www.youtube.com/">
                        <img style={{ marginBottom: "15px" }}
                             src="https://mintit.io/wp-content/themes/minty-company/img/assets_landing_mint/youtube_icon.png"
                             alt="#"/>
                      </a>
                      <br/>

                    </div>
                    :
                    <h1 style={{
                      position: "relative",
                      left: "100px",
                      color: "White",
                      fontSize: "19px",
                      whiteSpace: "nowrap",
                    }}>
                      GET SOCIAL!
                    </h1>}
                  <hr className="HrAnimation1" style={Object.assign({
                    float: "left",
                    border: "0.3px solid white",
                    width: "100px",
                    position: "relative",
                  }, hover ? { top: "-69px", right: "69px" } : { marginTop: "-6px" })}/>
                  <hr className="HrAnimation2" style={Object.assign({
                    float: "left",
                    border: "0.5px solid white",
                    width: "10px",
                  }, hover ? {
                    marginTop: "-86px",
                    marginLeft: "191px",
                  } : {
                    marginTop: "-17px",
                    marginLeft: "260px",
                  })}/>
                </Col>
                : null}
            </Row>
          </div>
        })}
      </RBCarousel>
    </div>
  )
}


export default Carousel1
