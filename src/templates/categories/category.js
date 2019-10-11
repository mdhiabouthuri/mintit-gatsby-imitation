import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => {
  const currentPost = data.wordpressPost
console.log(pageQuery)
  console.log("azeaz")
  return (
    <div style={{width:'100px', height:'100000px', backgroundColor:'red'}}>
      helloqsd
      azeazeqsd
    </div>
  )
}


export const pageQuery = graphql`
  query($id: String!) {
    wordpressCategory(id: { eq: $id }) {
      slug
      id
      path
    }
  }
`
