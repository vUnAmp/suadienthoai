import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import useSiteMeta from "../hooks/useSiteMeta"

const Footer = () => {
  const data = useSiteMeta()

  const picUrl = data.partners.nodes

  return (
    <footer className="boxFull footer">
      <div className="box footer-wrap">
        <div className="col-12 col-md-6">
          <span>
            Copyrights All Reserved 2018
            {/* Copyright ©{new Date().getFullYear()} */}
            <br />
            Repairphone24
            <br />
            Herzbergstraße 128-139 <br />
            Halle 6 R606 10365 Berlin
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
