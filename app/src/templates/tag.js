import React from "react"
import Layout from "../components/layout"
import {Link} from "gatsby"
import "./sketch.css"

export default function Tag( props ) {  
  console.log(props, props.pageContext)
  const nodes = props.pageContext.nodes
  console.log('nodes', nodes )
  return (
    
    <Layout>
      <h1>{props.pageContext.tag}</h1>


      <ul class='sketches-preview'>
        {nodes.map(n => {
          const fields = n.fields
          const thumbnailURL = new URL(n.thumbnail)
          const fullimageLink =
            thumbnailURL.protocol +
            "//" +
            thumbnailURL.host +
            thumbnailURL.pathname

          return (
            <li class='sketch-preview' key={fields.slug}>
              <Link
                to={fields.slug}
              >
                <h2>
                  עונה: {n.season} מערכון: {n.sketch} - {n.title}
                </h2>
                <img src={fullimageLink} />
              </Link>
            </li>
          )
        })}
      </ul>
      
    </Layout>
  )
}
