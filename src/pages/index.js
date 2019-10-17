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


  handleState = (state, newState) => {
    this.setState({ [state]: newState })
  }


  render() {
    console.log('index',this.state.windowsSize)
    return (
      <Layout handleState={this.handleState.bind(this)}
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