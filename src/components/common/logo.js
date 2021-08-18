import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(sourceInstanceName: { eq: "logo" }, name: { eq: "axle logo" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          },
          fixed(height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <Img fixed={data.file.childImageSharp.fixed} />
}

export default Logo
