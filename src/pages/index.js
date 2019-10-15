import React from "react"
import Home from "../components/Home"
import Layout from "../components/Layout"

class index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isScrolled: false,
      windowsSize: 0,
      dropdownOpen: false,
    }
  }


  componentDidMount() {
    this.handleWindowSizeChange()
    this.handleWindowSizeChange()
    window.addEventListener("scroll", this.handleScroll)
    window.addEventListener("resize", this.handleWindowSizeChange)

  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
    window.removeEventListener("resize", this.handleWindowSizeChange)

  }

  handleScroll = () => {
    window.requestAnimationFrame(() => {
      if (this.state.isScrolled === false && window.scrollY > 1)
        this.setState({ isScrolled: true })
      else if (this.state.isScrolled === true && window.scrollY < 1)
        this.setState({ isScrolled: false })
    })
  }
  handleWindowSizeChange = () => {
    if (this.state.dropdownOpen && this.state.windowsSize > 915) {
      this.setState({
        dropdownOpen: false,
      })
    }
    this.setState({
      windowsSize: window.innerWidth,
    })
  }
  dropdownToggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    })
  }

  render() {

    return (
      <Layout windowsSize={this.state.windowsSize}
              dropdownToggle={this.dropdownToggle.bind(this)}
              dropdownOpen={this.state.dropdownOpen}
              isScrolled={this.state.isScrolled}
              backGround={"https://cdn.discordapp.com/attachments/442248513632468994/630738100737409034/Capture.PNG"}>
        <Home
          windowsSize={this.state.windowsSize}
          isScrolled={this.state.isScrolled}
        />

      </Layout>
    )

  }
}

export default index