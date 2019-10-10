import React from "react"
import PropTypes from "prop-types"

import { Col, Row } from "reactstrap"
import Footer from "./Footer"
import Header from "./Header"
import Carousel1 from "./Carousel1"

const Layout = ({ children, isScrolled, windowsSize, backGround }) => (
  <div>
    <Header isScrolled={isScrolled}/>
    <div style={{
      backgroundImage: `url(${backGround})`,
      backgroundAttachment: "fixed",
    }} className='FirstBackGround'>
      <Row style={{ height: "100vh" }} className="no-gutters">
        <Col lg={2}/>
        <Col style={isScrolled ?{ marginTop: "120px" }:{marginTop:"200px"}}>
          <Carousel1 windowsSize={windowsSize}/>
        </Col>
      </Row>
    </div>
    {children}
    <Footer/>
    <style>{`
              @import url('https://fonts.googleapis.com/css?family=Anton|Notable&display=swap');
              .Cards:hover {
              box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)
              }
                  .SecondBackGround {
                    background-image: url('https://desktopwalls.net/wp-content/uploads/2014/12/Rain%20Drops%20Window%20Light%20Blur%20Desktop%20Wallpaper.jpg');
                    background-attachment: fixed;
                  }
                  .carousel1 .carousel-control-prev, .carousel1 .carousel-control-next{
                  visibility: hidden;
                  }
                  .catBtn{
                   fontSize: 24px
                    position: relative
                    top: 60%
                    margin-right: 20px
                    border: 2px solid #E8E8E8
                    background-color: #4b4b4b
                  }
                  .catBtn:hover {
                  font-size: 24px
                  position: relative
                  top: 60%
                  margin-right: 20px
                  border: 2px solid #E8E8E8
                  background-color: white
                  color: #4b4b4b
                  box-shadow: 0px 0px 12px 1px rgba(255,255,255,1)
                  }                    
                     `}
    </style>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
