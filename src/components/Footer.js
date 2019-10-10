import React, { Component } from "react"
import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap.css"
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css"
import { InputGroup, InputGroupAddon, Input, Button, Col, Row } from "reactstrap"
import position from "../images/position.png"
import phone from "../images/phone.png"

class Footer extends Component {
  constructor(prop) {
    super(prop)

    this.state = {}
  }

  render() {
    const titles = ["The Agency", "WorkProcess", "Services", "Careers", "Blog"]
    const lastTitle = titles[titles.length - 1]
    titles.pop()
    return (
      <Row className="no-gutters" style={{ marginTop: "50px", backgroundColor: "#2e2e2e" }}>
        <Col md={1}/>
        <Col>
          <h1 style={{
            position: "relative",
            marginTop: "40px",
            fontFamily: "\"anton\", sans-serif",
            letterSpacing: "5px", textAlign: "center", color: "#ffffff",
          }}>
            SUBSCRIBE
          </h1>
          <div style={{ float: "right", color: "white" }}>
            <Link to="/">
              <img
                src="https://mintit.io/wp-content/themes/minty-company/img/assets_landing_mint/back_to_top_icon.png"
                alt=""/>
            </Link>
          </div>

          <h5 style={{
            position: "relative",
            marginTop: "40px",
            fontFamily: "\"anton\", sans-serif",
            letterSpacing: "5px", textAlign: "center", color: "#ffffff", width: "700px",
            marginLeft: "auto", marginRight: "auto",
          }}>
            Do not miss our updates! Subscribe now to our newsletter
          </h5>
          <InputGroup style={{ marginTop: "60px", width: "700px", marginLeft: "auto", marginRight: "auto" }}>
            <Input className='text-light' placeholder='Email Address'
                   style={{ borderStyle: "white", backgroundColor: "#2e2e2e" }}/>
            <InputGroupAddon addonType="append">
              <Button style={{ width: "150px" }} color="success">Send</Button>
            </InputGroupAddon>
          </InputGroup>
          <hr style={{ borderStyle: "#494949", marginTop: "60px" }}/>
          <h2
            style={{ extAlign: "left", float: "left", color: "white", fontFamily: "\"Notable\", sans-serif" }}>
            MINT.IT
          </h2>
          <Link to="/">
            <div
              style={{ textAlign: "right", float: "right", color: "white", fontFamily: "\"Notable\", sans-serif" }}>
              {lastTitle}
            </div>
          </Link>
          {titles.reverse().map((e, i) => {
            return <Link key={i} to="/">
              <div
                style={{
                  marginRight: "40px",
                  textAlign: "right",
                  float: "right",
                  color: "white",
                  fontFamily: "\"Notable\", sans-serif",
                }}>
                {e}
              </div>
            </Link>
          })}
          <div style={{ fontSize: "13px", color: "white", marginTop: "70px" }}>
            <img style={{ position: "relative", bottom: "2.4px" }} width='10px' src={position} alt=""/>
            Adresse : 8 rue arabie saoudite, Tunis, Tunisia 1002
            <img style={{ marginLeft: "100px", position: "relative", bottom: "2px" }} width='10px' src={phone}
                 alt=""/>
            Téléphone : 00216 71 891 743
            <img style={{ float: "right" }}
                 src="https://mintit.io/wp-content/themes/minty-company/img/assets_landing_mint/youtube_icon.png"
                 alt=""/>
            <img style={{ float: "right", marginRight: "40px" }}
                 src="https://mintit.io/wp-content/themes/minty-company/img/assets_landing_mint/googleplus_icon.png"
                 alt=""/>
            <img style={{ float: "right", marginRight: "40px" }}
                 src="https://mintit.io/wp-content/themes/minty-company/img/assets_landing_mint/instagram_icon.png"
                 alt=""/>
            <img style={{ float: "right", marginRight: "40px" }}
                 src="https://mintit.io/wp-content/themes/minty-company/img/assets_landing_mint/facebook_icon.png"
                 alt=""/>
          </div>
          <h1
            style={{
              marginTop: "10px",
              textAlign: "left",
              float: "left",
              color: "white",
              fontFamily: "\"Notable\", sans-serif",
              fontSize: "11px",
            }}>
            ©MINTIT 2018.All rights reserved
          </h1>
          <div style={{height:'40px'}}/>
        </Col>
        <Col md={1}/>
      </Row>

    )
  }

}

export default Footer
