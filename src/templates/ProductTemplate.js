import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/Layout/layout"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
// import StoreLayout from "../components/StoreLayout"
// import ProductPage from "../components/ProductPage"

import { Container, Box, Grid, Button } from "@material-ui/core/"
import StarIcon from "@material-ui/icons/Star"

// import "./productDetails.scss"
import useGatsbyStripeData from "../components/hooks/useGatsbyStripeData"
import RelateProduct from "../components/Products/RelateProduct"

// import StoreLayout from "../components/Layout/storeLayout"

const ItemTemplate = ({ pageContext: { id, slug }, location }) => {
  // const data = useStaticQuery(GatsbyStripeData)
  // console.log(data)
  const siteTitle = { slug }
  const data = useGatsbyStripeData()

  const product = data.find(item => item.node.product.id === id)
  const price = (product.node.unit_amount / 100).toFixed(2)

  const addToCart = () => {
    console.log("adding to cart")
  }
  return (
    // <StoreLayout>
    //   <ProductPage productId={id} />
    // </StoreLayout>
    // <Layout location={location} title={siteTitle}>

    // </Layout>
    <Layout location={location} title={siteTitle}>
      <Container className="product-details" maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <div className="product-details__image">
              <Img
                fluid={product.node.product.localFiles[0].childImageSharp.fluid}
                alt=""
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className="product-details__action">
              <h3> {product.node.fields.name} </h3>
              <h3> €{price} </h3>
              <div className="product_details__vote">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
              <button
                className="btn btn-add"
                color="primary"
                onClick={addToCart}
              >
                Zum Einkaufswagen hinzugefügt
              </button>
              <div className="product-details__info">
                <div className="product-details__info--ship">
                  <span className="title">Abholung:</span>
                  <span className="des">Lieferung an Abholstation möglich</span>
                </div>
                <div className="product-details__info--shipcost">
                  <span className="title">Versand:</span>
                  <span className="des">EUR 1,50 Standardversand</span>
                </div>
                <div className="product-details__info--shiptime">
                  <span className="title">Lieferung:</span>
                  <span className="des">3 tagen</span>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
        <RelateProduct data={data} />
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
