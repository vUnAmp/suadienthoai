import { Grid, Container } from "@material-ui/core"
import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import RelateProduct from "../Products/RelateProduct"
import useGatsbyStripeData from "../hooks/useGatsbyStripeData"
const AboutUs = () => {
  const data = useGatsbyStripeData()
  const img = useStaticQuery(bgImg)
  console.log(img)
  return (
    <Grid container className="wrap-page about-page">
      <Grid item xs={6} className="about-page__wrap">
        <div className="about-image">
          <Img fluid={img.file.childImageSharp.fluid} />
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
        <div className="product-related">
          <RelateProduct data={data} />
        </div>
      </Container>
    </Grid>
  )
}

export default AboutUs

const bgImg = graphql`
  query MyQuery {
    file(absolutePath: { regex: "/bg-sdt.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 350, maxHeight: 300, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
