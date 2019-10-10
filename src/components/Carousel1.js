import React, { Component } from "react"
import RBCarousel from "react-bootstrap-carousel"
import "bootstrap/dist/css/bootstrap.css"
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css"
import { Col, Row } from "reactstrap"

class Carousel1 extends Component {
  constructor(prop) {
    super(prop)

    this.state = {}
  }

  render() {
//#57b14f
    return (
      <div style={{marginLeft:'7%', marginTop:'10%'}}>
        {/*<div style={this.props.windowsSize <= 991 ? { marginLeft: "20px" } : null}>*/}

        <RBCarousel
          animation={true}
          autoplay={true}
          slideshowSpeed={3000}
          defaultActiveIndex={0}
          version={4}
          className='carousel1'
          indicators={false}
        >
          <div style={{ height: 400, width: "700px", color: "white" }}>
            <Row className="no-gutters">
              <Col>
                <h1 style={{ fontFamily: "\"anton\", sans-serif" }}>IT’S ABOUT TIME! </h1>
                <p style={{ fontSize: "19px" }}> It’s never too late to start! Since you’re here, you just have to cross
                  the
                  line! You think you’re too
                  late? Just walk the line and break the chains! Dare to seize the day!</p>
              </Col>
              {this.props.windowsSize >= 991 ? <Col style={{ transform: "rotate(90deg)" }} md={1}>
                <h1 style={{ color: "White", fontSize: "19px", whiteSpace: "nowrap" }}>GET SOCIAL!</h1>
              </Col> : null}
            </Row>
          </div>

          <div style={{ height: 400, width: "700px", color: "white" }}>
            <Row className="no-gutters">
              <Col>
                <h1 style={{ fontFamily: "\"anton\", sans-serif", letterSpacing: "3px" }}>TOGETHER WE MOVE ! </h1>
                <p style={{ fontSize: "19px" }}> At every step of the way, we listen carefully to your ideas, to your
                  needs,
                  and we work hard to make them true! At every step of the way, we listen carefully to you; we invest in
                  your consulting for the success of your projects!</p>
              </Col>
              <Col style={{ transform: "rotate(90deg)" }} md={1}>
                <h1 style={{ color: "White", fontSize: "19px", whiteSpace: "nowrap" }}>GET SOCIAL!</h1>
              </Col>
            </Row>
          </div>

          <div style={{ height: 400, width: "700px", color: "white" }}>
            <Row className="no-gutters">
              <Col>
                <h1 style={{ fontFamily: "\"anton\", sans-serif", letterSpacing: "3px" }}>THE RIGHT ADDRESS! </h1>
                <p style={{ fontSize: "19px" }}> Here we successfully transform your ideas to application! Here, we
                  emerge
                  from ideas to applications! Here, We Do APPs! Welcome at Mint TI!</p>
              </Col>
              <Col style={{ transform: "rotate(90deg)" }} md={1}>
                <h1 style={{ color: "White", fontSize: "19px", whiteSpace: "nowrap" }}>GET SOCIAL!</h1>
              </Col>
            </Row>
          </div>
        </RBCarousel>
      </div>
    )
  }

}

export default Carousel1
