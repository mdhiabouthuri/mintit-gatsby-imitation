import React, { Component } from "react"
import { Col, Row } from "reactstrap"
import Footer from "./Footer"
import Header from "./Header"
import Carousel1 from "./Carousel1"
import "../assets/Layout.css"

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isScrolled: false,
      windowsSize: 0,
      dropdownOpen: false,
    }
  }

  componentWillMount() {
    window.addEventListener("scroll", this.handleScroll)
    window.addEventListener("resize", this.handleWindowSizeChange)
  }

  componentDidMount() {
    setTimeout(function () {
      this.handleWindowSizeChange()
    }.bind(this), 20)

  }


  // componentWillReceiveProps(nextProps, nextContext) {
  //     // setTimeout(() => {
  //     //   this.props.handleState("windowsSize", this.state.windowsSize)
  //     // }, 1000)
  // }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
    window.removeEventListener("resize", this.handleWindowSizeChange)
  }

  handleScroll = () => {
    window.requestAnimationFrame(() => {
      if (this.state.isScrolled === false && window.scrollY > 1) {
        this.setState({ isScrolled: true })
        this.props.handleState("isScrolled", this.state.isScrolled)
      } else if (this.state.isScrolled === true && window.scrollY < 1) {
        this.setState({ isScrolled: false })
        this.props.handleState("isScrolled", this.state.isScrolled)
      }
    })
  }
  handleWindowSizeChange = () => {
    if (this.state.dropdownOpen && this.state.windowsSize > 915) {
      this.setState({
        dropdownOpen: false,
      })
      this.props.handleState("dropdownOpen", this.state.dropdownOpen)
    }
    this.setState({
      windowsSize: window.innerWidth,
    })
    this.props.handleState("windowsSize", this.state.windowsSize)
  }
  dropdownToggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    })
    this.props.handleState("dropdownOpen", this.state.dropdownOpen)
  }

  render() {
    console.log(this.state.windowsSize)
    return <div>
      <Header dropdownOpen={this.state.dropdownOpen}
              windowsSize={this.state.windowsSize}
              isScrolled={this.state.isScrolled}
              dropdownToggle={this.dropdownToggle.bind(this)}/>
      <div style={{
        backgroundImage: `url(${this.props.backGround})`,
        backgroundAttachment: "fixed",
      }} className='FirstBackGround'>
        <Row style={{ height: "100vh" }} className="no-gutters">
          <Col
            style={this.state.isScrolled ? { marginTop: "120px" } : this.state.dropdownOpen ? { marginTop: "44px" } : { marginTop: "160px" }}>
            <Carousel1 windowsSize={this.state.windowsSize}/>
          </Col>
        </Row>
      </div>
      {this.props.children}
      <Footer/>
    </div>
  }
}

export default Layout
