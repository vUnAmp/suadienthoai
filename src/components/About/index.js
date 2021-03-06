import { Grid, Container } from "@material-ui/core"
import React from "react"
import Img from "gatsby-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import RelateProduct from "../Products/RelateProduct"
import useGatsbyStripeData from "../hooks/useGatsbyStripeData"

function AboutUs({ location }) {
  const data = useStaticQuery(pageQuery)
  const image = getImage(data.file)
  const stripeData = useGatsbyStripeData()
  return (
    <Grid container className="wrap-page about-page">
      <Grid item xs={6} className="about-page__wrap">
        <div className="about-image">
          {/* <Img fluid={img.file.childImageSharp.fluid} /> */}
          <GatsbyImage image={image} alt="We care your phone" />
        </div>
      </Grid>
      <Grid item xs={6} className="about-page__wrap">
        <div className="about-hero">
          <h1>We care your phone!</h1>
        </div>
      </Grid>
      <Container>
        <Grid container sx={12}>
          <div className="about-page__content">
            <h2>Willkommen bei RepairPhone24</h2>
            <p>
              Wir haben bereits zwei Handy-Geschäfte auf dem Großhandelsmarkt
              Dong Xuan Center in Berlin
            </p>

            <p>
              Aber jetzt sind wir auch online verfügbar! Wir bieten
              unterschiedliche Produkte aus dem Bereich Elektronik-Zubehör.
            </p>
            <p>
              Unsere Priorität ist das Bedürfnis unserer Kunden mithilfe eines
              schnellen und verlässlichen Service sicher zu stellen, dass Ihre
              Bestellung rasch bei Ihnen eintrifft.
            </p>
          </div>
        </Grid>
        {location.pathname === "/about/" && (
          <div className="product-related">
            <RelateProduct data={stripeData} />
          </div>
        )}
      </Container>
    </Grid>
  )
}

export const pageQuery = graphql`
  query MyQuery {
    file(absolutePath: { regex: "/bg-sdt.jpg/" }) {
      childImageSharp {
        gatsbyImageData(
          width: 600
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`
export default AboutUs
