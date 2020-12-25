import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query Parner {
      partners: allFile(filter: { relativeDirectory: { regex: "/partner/" } }) {
        nodes {
          childImageSharp {
            fluid(maxWidth: 300, quality: 100) {
              ...GatsbyImageSharpFluid
            }
            id
          }
        }
      }
    }
  `)
  const picUrl = data.partners.nodes
  console.log(picUrl)
  return (
    <footer className="boxFull footer">
      <div className="box footer-wrap">
        <div className="col-12 col-md-6">
          <span>
            Copyright ©{new Date().getFullYear()}
            <br />
            PhoneABC GmbH
            <br />
            Herzbergstr. 33-34 10365 Berlin
          </span>
        </div>
        <div className="col-12 col-md-6">
          <div className="partner">
            {picUrl &&
              picUrl.map(url => (
                <Image
                  key={url.childImageSharp.id}
                  fluid={url.childImageSharp.fluid}
                />
              ))}
            <div className="partnerlogodhl partnerlogo"></div>
            <div className="partnerlogopaypal partnerlogo"></div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
