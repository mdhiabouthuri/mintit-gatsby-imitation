import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { Button } from "reactstrap"

const CategoryNav = () => {
  const data = useStaticQuery(graphql`
      {
          allWordpressCategory(filter: {path: {}, parent_element: {name: {eq: "Minty Thoughts"}}}) {
              nodes {
                  path
                  name
              }
          }
      }
  `)


  return (
    <div style={{ backgroundColor: "#4b4b4b", height: "115px" }}>
      <div style={{ textAlign: "center", position: "relative", top: "22%" }}>
        {data.allWordpressCategory.nodes.map((e, i) => {
          return <Link key={i} to={e.path.replace("//localhost:8000", "")}>
            <Button className="catBtn">
              <h4>
                {e.name}
              </h4>
            </Button>
          </Link>
        })}
      </div>
      <style>{`
                  .catBtn{
                    position: relative;
                    top: 60%;
                    margin-right: 20px;
                    border: 2px solid #E8E8E8;
                    background-color: #4b4b4b;
                    box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.75);
                  }
                  .catBtn:hover {
                  border: 2px solid #E8E8E8;
                  background-color: white;
                  color: #4b4b4b;
                  box-shadow: 0px 0px 12px 1px rgba(255,255,255,1);
                  transition-duration: 0.4s;
                  }      
                     `}
      </style>
    </div>
  )
}


export default CategoryNav
