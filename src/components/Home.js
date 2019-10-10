import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.css"
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css"
import { Button, Col, Row } from "reactstrap"
import Carousel1 from "./Carousel1"
import Carousel2 from "./Carousel2"
import Header from "./Header"

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
              position: "relative",
              top: "40px",
              fontFamily: "\"anton\", sans-serif",
              letterSpacing: "3px", textAlign: "center", color: "#4a4a4a",
            }}>
              OUR VISION
            </h1>
            {this.props.windowsSize >= 768 ? <Row className="no-gutters" style={{ marginTop: "120px" }}>
                <Col md={2}/>
                <Col md={4}>
                  <div style={{ marginTop: "100px" }}>
                    <div style={{ fontSize: "24px" }}>Fresh ideas</div>
                    <br/>
                    <h1 style={{
                      fontFamily: "\"anton\", sans-serif",
                      letterSpacing: "3px", color: "#4a4a4a",
                    }}> DESIGN</h1>
                    <div style={{letterSpacing:'3.5px', fontSize: "20px" }}>
                      We conceptualize applications with delicacy, we design them with considerable attention to details,
                      from within and from without. Our apps mirror our visions for futurist technology.. a mint fresh
                      vision
                    </div>
                  </div>
                </Col>
                <Col md={4}>
                  <img width="100%"
                       src="https://mintit.io/wp-content/themes/minty-company/img/assets_landing_mint/icecubes.png"
                       alt="#"/>
                </Col>
                <Col md={2}/>
                <br/>
                <Col md={2}/>
                <Col md={4}>
                  <img width="100%"
                       src="https://mintit.io/wp-content/themes/minty-company/img/assets_landing_mint/mintwater.png"
                       alt="#"/>
                </Col>
                <Col md={4}>
                  <div style={{ marginTop: "100px" }}>
                    <div style={{ fontSize: "24px" }}>Perfect ingredients</div>
                    <br/>
                    <h1 style={{
                      fontFamily: "\"anton\", sans-serif",
                      letterSpacing: "3px", color: "#4a4a4a",
                    }}> WIREFRAMING</h1>
                    <div style={{letterSpacing:'3.5px', fontSize: "20px" }}>
                      Mint.IT vouches for an updated outlook of app creation. Our team watches on the first seeds of the
                      subject matter. We meticulously look after the process of the plannings from the scratch!
                    </div>
                  </div>
                </Col>
                <Col md={2}/>
                <br/>
                <Col md={2}/>
                <Col md={4}>
                  <div style={{ marginTop: "100px" }}>
                    <div style={{ fontSize: "24px" }}>Selected technologies</div>
                    <br/>
                    <h1 style={{
                      fontFamily: "\"anton\", sans-serif",
                      letterSpacing: "3px", color: "#4a4a4a",
                    }}> DEVELOPMENT</h1>
                    <div style={{letterSpacing:'3.5px', fontSize: "20px" }}>
                      With an active and a fresh spirit, we build up applications. We develop with passion and a batch of
                      energy. We engage for the best interest of our clients; our perception for the future is
                      unquestionable and persistent. We are developing, we are minting it!
                    </div>
                  </div>
                </Col>
                <Col md={4}>
                  <img width="60%"
                       src="https://mintit.io/wp-content/themes/minty-company/img/assets_landing_mint/mojito_img.png"
                       alt="#"/>
                </Col>
                <Col md={2}/>
              </Row> : <div className="no-gutters" style={{
              backgroundImage: 'url("https://cdn.discordapp.com/attachments/442248513632468994/630723023883993098/telechargement_4.png")',
              marginTop: "120px",
            paddingBottom:'60px'}}>
                <div style={{
                  }}>
                  <div style={{ fontSize: "24px" }}>Fresh ideas</div>
                  <br/>
                  <h1 style={{
                    fontFamily: "\"anton\", sans-serif",
                    letterSpacing: "3px", color: "#4a4a4a",
                  }}> DESIGN</h1>
                  <div style={{letterSpacing:'3.5px', fontSize: "20px" }}>
                    We conceptualize applications with delicacy, we design them with considerable attention to details,
                    from within and from without. Our apps mirror our visions for futurist technology.. a mint fresh
                    vision
                  </div>
                </div>

              <br/>

              <div >
                <div style={{ marginTop: "100px" }}>
                  <div style={{ fontSize: "24px" }}>Perfect ingredients</div>
                  <br/>
                  <h1 style={{
                    fontFamily: "\"anton\", sans-serif",
                    letterSpacing: "3px", color: "#4a4a4a",
                  }}> WIREFRAMING</h1>
                  <div style={{letterSpacing:'3.5px', fontSize: "20px" }}>
                    Mint.IT vouches for an updated outlook of app creation. Our team watches on the first seeds of the
                    subject matter. We meticulously look after the process of the plannings from the scratch!
                  </div>
                </div>
              </div>
              <br/>
              <div >
                <div style={{ marginTop: "100px" }}>
                  <div style={{ fontSize: "24px" }}>Selected technologies</div>
                  <br/>
                  <h1 style={{
                    fontFamily: "\"anton\", sans-serif",
                    letterSpacing: "3px", color: "#4a4a4a",
                  }}> DEVELOPMENT</h1>
                  <div style={{letterSpacing:'3.5px', fontSize: "20px" }}>
                    With an active and a fresh spirit, we build up applications. We develop with passion and a batch of
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
        <div style={{
          marginTop: "100px",
          backgroundColor: "white",
          width: "100%",
        }}>
          <h1 style={{
            position: "relative",
            marginTop: "40px",
            fontFamily: "\"anton\", sans-serif",
            letterSpacing: "5px", textAlign: "center", color: "#4a4a4a",
          }}>
            MINTY THOUGHTS
          </h1>
          <Row className="no-gutters">
            <Col md={1}/>
            <Col>
              <div style={{
                position: "relative",
                marginTop: "40px",
                fontSize: "20px",
                fontFamily: "\"anton\", sans-serif",
                letterSpacing: "5px", textAlign: "center", color: "#4a4a4a",
              }}>
                Get some minty thoughts and discover with us the last trends and technologies in UIUX Design and
                softwares
              </div>
              <Row>
                <Col md={4}>
                  <div className='Cards'>
                    <img width="100%" src="https://mintit.io/wp-content/uploads/2019/09/website-1-300x170.png" alt="#"/>
                    <div style={{
                      marginTop: "60px", fontSize: "26px", marginLeft: "10px", color: "#4a4a4a",
                    }}>
                      Ai Hackathon Tunisia 2019
                    </div>
                    <div style={{
                      marginTop: "40px", marginLeft: "10px", fontSize: "20px", color: "#4a4a4a",
                    }}>
                      Tunsia has hosted this weekend one of the remarkably biggest events of Artificial intelligence and
                      Machine learning in Africa and all the Men
                      <br/>
                      <hr style={{ marginTop: "40px" }}/>
                      <img style={{ borderRadius: "50%", marginBottom: "15px" }}
                           src="https://secure.gravatar.com/avatar/cc1792ed99fcdaf4ef4bad219dd76876?s=45&d=mm&r=g"
                           alt="#"/>
                    </div>
                  </div>
                </Col>
                <Col md={4}>
                  <div className='Cards' style={{ height: "635px" }}>
                    <img width="100%" src="https://mintit.io/wp-content/uploads/2019/03/social-300x150.jpg" alt="#"/>
                    <div style={{
                      marginTop: "60px", fontSize: "26px", marginLeft: "10px", color: "#4a4a4a",
                    }}>
                      OPENJS, THE NEW OPEN SOURCE FOUNDATION
                    </div>
                    <div style={{
                      marginTop: "40px", marginLeft: "10px", fontSize: "20px", color: "#4a4a4a",
                    }}>
                      Linux company is opening a new gate,OpenJS, which merges ReactJS and JavaScript for a new
                      experience in open source projects that will serve in the growth of
                      <br/>
                      <hr style={{ marginTop: "40px" }}/>
                      <img style={{ borderRadius: "50%", marginBottom: "15px" }}
                           src="https://secure.gravatar.com/avatar/cc1792ed99fcdaf4ef4bad219dd76876?s=45&d=mm&r=g"
                           alt="#"/>
                    </div>
                  </div>
                </Col>
                <Col md={4}>
                  <div className='Cards'>
                    <img width="100%" src="https://mintit.io/wp-content/uploads/2019/03/Artboard-4-Copy-3-1-300x168.png"
                         alt="#"/>
                    <div style={{
                      marginTop: "60px", fontSize: "26px", marginLeft: "10px", color: "#4a4a4a",
                    }}>
                      H.App.y Birthday MINT.IT!
                    </div>
                    <div style={{
                      marginTop: "40px", marginLeft: "10px", fontSize: "20px", color: "#4a4a4a",
                    }}>
                      We are H.App.y to announce our 4th birthday! We have grown, we have thrived and we have
                      prosperously achieved miles of our dreams; but
                      <br/>
                      <hr style={{ marginTop: "40px" }}/>
                      <img style={{ borderRadius: "50%", marginBottom: "15px" }}
                           src="https://secure.gravatar.com/avatar/cc1792ed99fcdaf4ef4bad219dd76876?s=45&d=mm&r=g"
                           alt="#"/>
                    </div>
                  </div>
                </Col>
              </Row>
              <hr style={{ marginTop: "6rem" }}/>

            </Col>
            <Col md={1}/>
          </Row>
          <h1 style={{
            position: "relative",
            marginTop: "40px",
            fontFamily: "\"anton\", sans-serif",
            letterSpacing: "5px", textAlign: "center", color: "#4a4a4a",
          }}>
            CONTACT US
          </h1>
          <Row className="no-gutters">
            <Col md={1}/>
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
                <input style={{ marginTop: "50px", height: "38px", width: "700px", textIndent: "10px" }}
                       placeholder="Full Name" type="text"/>
                <br/>
                <input style={{ marginTop: "30px", height: "38px", width: "700px", textIndent: "10px" }}
                       placeholder="Email Address" type="text"/>
                <br/>
                <input style={{ marginTop: "30px", height: "38px", width: "700px", textIndent: "10px" }}
                       placeholder="Company/Organization" type="text"/>
                <br/>
                <input style={{ marginTop: "30px", height: "80px", width: "700px", textIndent: "10px" }}
                       placeholder="Project Details" type="text"/>
                <br/>
                <Button style={{ marginTop: "100px", width: "200px" }} color="success">SEND</Button>
              </div>
            </Col>
            <Col md={1}/>
          </Row>
        </div>
      </div>
    )
  }

}

export default Home
