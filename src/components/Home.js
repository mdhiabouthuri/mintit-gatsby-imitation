import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.css"
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css"
import { Button, Col, Row } from "reactstrap"
import Carousel2 from "./Carousel2"
import Cards from "./Cards"

class Home extends Component {
  constructor(prop) {
    super(prop)

    this.state = {}
  }

  render() {

    return (
      <div>
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
              OUR VISION
            </h1>
            <hr style={{
              marginTop: "20px",
              marginLeft: "47% ",
              marginRight: "47%",
              border: "2px solid #4a4a4a",
            }}/>
            {this.props.windowsSize >= 768 ?
              <Row className="no-gutters" style={{ marginTop: "70px", marginRight: "7.6%", marginLeft: "7.6%" }}>
                <Col md={6}>
                  <div style={{ marginTop: "70px" }}>
                    <div style={{ fontSize: "24px" }}>Fresh ideas</div>
                    <br/>
                    <h1 style={{
                      fontFamily: "\"anton\", sans-serif",
                      letterSpacing: "3px", color: "#4a4a4a",
                    }}> DESIGN</h1>
                    <div style={{ letterSpacing: "3.5px", fontSize: "20px" }}>
                      We conceptualize applications with delicacy, we design them with considerable attention to
                      details,
                      from within and from without. Our apps mirror our visions for futurist technology.. a mint fresh
                      vision
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <img width="100%"
                       src="https://mintit.io/wp-content/themes/minty-company/img/assets_landing_mint/icecubes.png"
                       alt="#"/>
                </Col>
                <br/>
                <Col md={6}>
                  <img width="100%"
                       src="https://mintit.io/wp-content/themes/minty-company/img/assets_landing_mint/mintwater.png"
                       alt="#"/>
                </Col>
                <Col md={6}>
                  <div style={{ marginTop: "100px" }}>
                    <div style={{ fontSize: "24px" }}>Perfect ingredients</div>
                    <br/>
                    <h1 style={{
                      fontFamily: "\"anton\", sans-serif",
                      letterSpacing: "3px", color: "#4a4a4a",
                    }}> WIREFRAMING</h1>
                    <div style={{ letterSpacing: "3.5px", fontSize: "20px" }}>
                      Mint.IT vouches for an updated outlook of app creation. Our team watches on the first seeds of the
                      subject matter. We meticulously look after the process of the plannings from the scratch!
                    </div>
                  </div>
                </Col>
                <br/>
                <Col md={6}>
                  <div style={{ marginTop: "100px" }}>
                    <div style={{ fontSize: "24px" }}>Selected technologies</div>
                    <br/>
                    <h1 style={{
                      fontFamily: "\"anton\", sans-serif",
                      letterSpacing: "3px", color: "#4a4a4a",
                    }}> DEVELOPMENT</h1>
                    <div style={{ letterSpacing: "3.5px", fontSize: "20px" }}>
                      With an active and a fresh spirit, we build up applications. We develop with passion and a batch
                      of
                      energy. We engage for the best interest of our clients; our perception for the future is
                      unquestionable and persistent. We are developing, we are minting it!
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <img width="60%"
                       src="https://mintit.io/wp-content/themes/minty-company/img/assets_landing_mint/mojito_img.png"
                       alt="#"/>
                </Col>
              </Row> : <div className="no-gutters" style={{
                backgroundImage: "url(\"https://cdn.discordapp.com/attachments/442248513632468994/630723023883993098/telechargement_4.png\")",
                marginTop: "120px",
                paddingBottom: "60px",
              }}>
                <div style={{}}>
                  <div style={{ fontSize: "24px" }}>Fresh ideas</div>
                  <br/>
                  <h1 style={{
                    fontFamily: "\"anton\", sans-serif",
                    letterSpacing: "3px", color: "#4a4a4a",
                  }}> DESIGN</h1>
                  <div style={{ letterSpacing: "3.5px", fontSize: "20px" }}>
                    We conceptualize applications with delicacy, we design them with considerable attention to details,
                    from within and from without. Our apps mirror our visions for futurist technology.. a mint fresh
                    vision
                  </div>
                </div>

                <br/>

                <div>
                  <div style={{ marginTop: "100px" }}>
                    <div style={{ fontSize: "24px" }}>Perfect ingredients</div>
                    <br/>
                    <h1 style={{
                      fontFamily: "\"anton\", sans-serif",
                      letterSpacing: "3px", color: "#4a4a4a",
                    }}> WIREFRAMING</h1>
                    <div style={{ letterSpacing: "3.5px", fontSize: "20px" }}>
                      Mint.IT vouches for an updated outlook of app creation. Our team watches on the first seeds of the
                      subject matter. We meticulously look after the process of the plannings from the scratch!
                    </div>
                  </div>
                </div>
                <br/>
                <div>
                  <div style={{ marginTop: "100px" }}>
                    <div style={{ fontSize: "24px" }}>Selected technologies</div>
                    <br/>
                    <h1 style={{
                      fontFamily: "\"anton\", sans-serif",
                      letterSpacing: "3px", color: "#4a4a4a",
                    }}> DEVELOPMENT</h1>
                    <div style={{ letterSpacing: "3.5px", fontSize: "20px" }}>
                      With an active and a fresh spirit, we build up applications. We develop with passion and a batch
                      of
                      energy. We engage for the best interest of our clients; our perception for the future is
                      unquestionable and persistent. We are developing, we are minting it!
                    </div>
                  </div>
                </div>
              </div>}
          </div>
        </div>
        <div style={{ marginBottom: "40px" }} className='SecondBackGround'>
          <Carousel2 windowsSize={this.props.windowsSize}/>
        </div>
        <Cards/>
        <h1 style={{
          position: "relative",
          marginTop: "40px",
          fontFamily: "\"anton\", sans-serif",
          letterSpacing: "5px", textAlign: "center", color: "#4a4a4a",
        }}>
          CONTACT US
        </h1>
        <Row className="no-gutters">
          <Col md={2}/>
          <Col>
            <div style={{
              position: "relative",
              marginTop: "40px",
              fontSize: "20px",
              fontFamily: "\"anton\", sans-serif",
              letterSpacing: "5px", textAlign: "center", color: "#4a4a4a",
            }}>
              We collaborate with ambitious brands and people; we’d love to build something really great together.
            </div>
            <div style={{ textAlign: "center" }}>
              <input style={{ marginTop: "50px", height: "38px", width: "100%", textIndent: "10px" }}
                     placeholder="Full Name" type="text"/>
              <br/>
              <input style={{ marginTop: "30px", height: "38px", width: "100%", textIndent: "10px" }}
                     placeholder="Email Address" type="text"/>
              <br/>
              <input style={{ marginTop: "30px", height: "38px", width: "100%", textIndent: "10px" }}
                     placeholder="Company/Organization" type="text"/>
              <br/>
              <input style={{ marginTop: "30px", height: "80px", width: "100%", textIndent: "10px" }}
                     placeholder="Project Details" type="text"/>
              <br/>
              <Button style={{ marginTop: "100px", width: "200px" }} color="success">SEND</Button>
            </div>
          </Col>
          <Col md={2}/>
        </Row>
      </div>
    )
  }

}

export default Home
