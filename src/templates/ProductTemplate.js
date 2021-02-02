import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
// import StoreLayout from "../components/StoreLayout"
// import ProductPage from "../components/ProductPage"

const ItemTemplate = ({ pageContext: { id, slug }, data, location }) => {
  const siteTitle = { slug }
  return (
    // <StoreLayout>
    //   <ProductPage productId={id} />
    // </StoreLayout>
    <Layout location={location} title={siteTitle}>
      {id}
      <h3>{slug}</h3>
    </Layout>
  )
}

ItemTemplate.propTypes = {
  pageContext: PropTypes.object.isRequired,
}

export default ItemTemplate
