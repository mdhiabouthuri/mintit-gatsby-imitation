import React from "react"
import PropTypes from "prop-types"

import { Col, Row } from "reactstrap"
import Footer from "./Footer"
import Header from "./Header"
import Carousel1 from "./Carousel1"

const Layout = ({ children, isScrolled, windowsSize, backGround, dropdownToggle, dropdownOpen }) => {

  return (
    <div>
      <Header dropdownOpen={dropdownOpen}
              windowsSize={windowsSize}
              isScrolled={isScrolled}
              dropdownToggle={dropdownToggle}/>
      <div style={{
        backgroundImage: `url(${backGround})`,
        backgroundAttachment: "fixed",
      }} className='FirstBackGround'>
        <Row style={{ height: "100vh" }} className="no-gutters">
          <Col
            style={isScrolled ? { marginTop: "120px" } : dropdownOpen ? { marginTop: "44px" } : { marginTop: "160px" }}>
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
                  .catLinks:hover{
                 text-decoration: none;
                 }  
                  .menu-btn {
                   background-color: none; 
                   background: none;
                    border: none;
                  }
                  .menu-btn:focus {
                  outline:0;
                  background-color: #ddd;
                  background: #ddd;
                  }       
                  .menu-btn:hover {
                   background-color: #ddd;
                  background: #ddd;
                  }
                  .HrAnimation1 {
                  webkit-animation: pulse 1s cubic-bezier(.25,.46,.45,.94) infinite both; 
                  animation: pulse 1s cubic-bezier(.25,.46,.45,.94) infinite both;
                    animation-direction: alternate;
                  }  
                  @keyframes pulse {
                     from {
                        width: 100%;
                      }
                    
                      to {
                        width: 20%;
                      }
                  }    
                  @keyframes pulse2 {
                     from {
                        width: 50px;
                      }
                    
                      to {
                        width: 10%;
                      }
                  }
                  .HrAnimation2 {
                      -webkit-animation: pulse2 1s cubic-bezier(.25,.46,.45,.94) infinite both;
                      animation: pulse2 1s cubic-bezier(.25,.46,.45,.94) infinite both;
                      animation-direction: alternate;
                  }       
                     `}
      </style>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
