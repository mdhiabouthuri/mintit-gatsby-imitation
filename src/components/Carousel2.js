import React, { Component } from "react"
import RBCarousel from "react-bootstrap-carousel"
import "bootstrap/dist/css/bootstrap.css"
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css"
import { Col, Row } from "reactstrap"

class Carousel2 extends Component {
  constructor(prop) {
    super(prop)

    this.state = {}
  }

  render() {
    return (
      <div style={this.props.windowsSize >= 768 ? { marginTop: "100px" } : null}>
        <Row className="no-gutters">
          <Col md={2}/>
          <Col>
            <h2 style={{
              marginTop: "40px",
              fontFamily: "\"anton\", sans-serif",
              letterSpacing: "3px", textAlign: "center", color: "white",
            }}>
              WE ARE VALUABLE DEVELOPERS WHO BUILT TECH SOLUTIONS FOR COMPANIES LIKE
            </h2>
            <RBCarousel
              animation={true}
              autoplay={true}
              slideshowSpeed={1500}
              defaultActiveIndex={0}
              version={4}
            >
              <Row className="no-gutters">
                <Col style={{ marginTop: "150px", color: "white" }} md={7}>
                  <h4>01</h4>
                  <h1> HEALUP </h1>
                  <br/>
                  <div style={{ fontSize: "18px" }}>
                    Do you have a problem remembering your medications? your medical checkups? Mint IT have developed
                    HealUp
                    for you. we innovated a well equipped application with various features, helping patients to look
                    after their health. HealUp is a wholesome entity that guarantees a vivid design, punctual
                    medications, checkups reminder and a mobile medical folder! we are now creating technology that
                    keeps up with your health!

                    <div style={{ float: "right", marginTop: "20px" }}>
                      <a href="https://play.google.com/store/apps/details?id=io.mintit.healup">
                        <img width='150px'
                             src="https://mintit.be/wp-content/uploads/2018/06/playstore_logo.png" alt="#"/>
                      </a>
                    </div>
                  </div>
                </Col>
                {this.props.windowsSize >= 768 ? <Col style={{ float: "right" }} md={5}>
                  <img
                    width='300px'
                    src="https://mintit.io/wp-content/uploads/2018/06/healup_site.png" alt="#"
                  />
                </Col> : null}
              </Row>

              <Row className="no-gutters">
                <Col style={{ marginTop: "150px", color: "white" }} md={7}>
                  <h4>02</h4>
                  <h1> Jobi </h1>
                  <br/>
                  <div style={{ fontSize: "18px" }}>
                    Thanks to a collaborative spirit at Mint IT, Jobi is now between your hands! A diversified App,
                    granting
                    you fancy designs and polyvalent features at a time. Wherever you are, this application brightens
                    your professional meetings with summer-ish colors, a bouquet of updated options, and high-standards
                    Techs! With Jobi, we raised higher the bar of service-digitized pubs!
                    <div style={{ float: "right", marginTop: "20px" }}>
                      <a href="https://apps.apple.com/us/app/jobi/id1383319808?l=fr&ls=1">
                        <img width='150px'
                             src="https://mintit.be/wp-content/uploads/2018/06/playstore_logo.png"
                             alt="#"/>
                      </a>
                      <a href="https://play.google.com/store/apps/details?id=io.mintit.jobi">
                        <img style={{ marginLeft: "25px" }} width='150px'
                             src="https://mintit.be/wp-content/uploads/2018/06/appstore_logo.png" alt="#"/>
                      </a>
                    </div>
                  </div>
                </Col>
                {this.props.windowsSize >= 768 ? <Col style={{ float: "right" }} md={5}>
                  <img
                    width='300px'
                    src="https://mintit.io/wp-content/uploads/2018/06/jobi_site.png" alt="#"
                  />
                </Col> : null}

              </Row>

              <Row className="no-gutters">
                <Col style={{ marginTop: "150px", color: "white" }} md={7}>
                  <h4>03</h4>
                  <h1> CORP </h1>
                  <br/>
                  <div style={{ fontSize: "18px" }}>
                    With CORP we have blurred the distance between unemployed youth and job Market in Tunisia! Now on
                    Google Apps, CORP application is the fruit of a strong will of Mint IT team to facilitate the access
                    of Job seekers to fresh news, events, trainings and the needs of the market! Presenting approachable
                    features and refined edges, this application is now one of the first to initiate a platform of
                    consulting and professional reintegration!
                    <div style={{ float: "right", marginTop: "20px" }}>
                      <a href="https://play.google.com/store/apps/details?id=io.mintit.corp">
                        <img width='150px'
                             src="https://mintit.be/wp-content/uploads/2018/06/playstore_logo.png" alt="#"/>
                      </a>
                    </div>
                  </div>
                </Col>
                {this.props.windowsSize >= 768 ? <Col style={{ float: "right" }} md={5}>
                  <img
                    width='300px'
                    src="https://mintit.io/wp-content/uploads/2018/06/corp_site.png"
                    alt='#'
                  />

                </Col> : null}

              </Row>
            </RBCarousel>
          </Col>
          <Col md={2}/>
        </Row>
      </div>
    )
  }

}

export default Carousel2
