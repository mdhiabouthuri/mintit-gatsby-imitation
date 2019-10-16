import React, { Component } from "react"
import BlogTemplate from "./blogTemplate"

class Body extends Component {
  constructor(props) {
    super(props)
    this.state = {
      blog: false,
      carreers: false,
      services: false,
      workprocess: false,
    }
  }


  componentWillReceiveProps() {
    this.stateHandle(this.props.currentPage.wordpressPage.title.toLowerCase())
  }

  stateHandle(state) {
    this.setState({ [state]: true })
  }

  render() {

    return <div>
      {this.state.blog ? <BlogTemplate currentPagePosts={this.props.currentPage.allWordpressPost.nodes}/> : null}

    </div>
  }
}

export default Body
