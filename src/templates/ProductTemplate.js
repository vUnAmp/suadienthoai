import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/Layout/layout"
import { useStaticQuery, graphql } from "gatsby"
// import StoreLayout from "../components/StoreLayout"
// import ProductPage from "../components/ProductPage"

import { Container, Box, Grid } from "@material-ui/core/"
// import StoreLayout from "../components/Layout/storeLayout"

const ItemTemplate = ({ pageContext: { id, slug }, location }) => {
  // const data = useStaticQuery(GatsbyStripeData)
  // console.log(data)
  const siteTitle = { slug }
  return (
    // <StoreLayout>
    //   <ProductPage productId={id} />
    // </StoreLayout>
    // <Layout location={location} title={siteTitle}>

    // </Layout>
    <Layout location={location} title={siteTitle}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} sm={6}>
            {id}
          </Grid>
          <Grid item xs={12} sm={6}>
            <h3>{slug}</h3>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}

ItemTemplate.propTypes = {
  pageContext: PropTypes.object.isRequired,
}

export default ItemTemplate
// const GatsbyStripeData = graphql`
//   query GatsbyStripeData {
//     allStripePrice {
//       edges {
//         node {
//           unit_amount
//           id
//           currency
//           fields {
//             name
//             slug
//           }
//           product {
//             id
//             description
//             localFiles {
//               childImageSharp {
//                 fluid(maxWidth: 460, quality: 100) {
//                   ...GatsbyImageSharpFluid_withWebp_tracedSVG
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `
