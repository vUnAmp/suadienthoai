import React, { useEffect, useRef } from "react"
import PropTypes from "prop-types"
import Layout from "../components/Layout/layout"
import { Link, navigate } from "gatsby"
import Img from "gatsby-image"
// import StoreLayout from "../components/StoreLayout"
// import ProductPage from "../components/ProductPage"

import { Container, Grid, Breadcrumbs } from "@material-ui/core/"
import StarIcon from "@material-ui/icons/Star"
import HomeIcon from "@material-ui/icons/Home"
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined"
import LocalPrintshopOutlinedIcon from "@material-ui/icons/LocalPrintshopOutlined"

// import "./productDetails.scss"
import useGatsbyStripeData from "../components/hooks/useGatsbyStripeData"
import RelateProduct from "../components/Products/RelateProduct"

// React Slick Carousel
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

// REDUX

import { addCartItem } from "../redux/Cart/cart.actions"
import { useDispatch } from "react-redux"

const ItemTemplate = ({ pageContext: { id, slug }, location }) => {
  // const data = useStaticQuery(GatsbyStripeData)
  // console.log(data)
  const dispatch = useDispatch()
  const siteTitle = { slug }
  const data = useGatsbyStripeData()
  const product = data.find(item => item.node.product.id === id)
  const price = (product.node.unit_amount / 100).toFixed(2)
  const title = product.node.fields.name.slice(0, 18)
  const countRef = useRef(null)

  const addToCart = () => {
    const slide = document.querySelector(".slide-item")
    slide.style.display = "block"
    countRef.current = setTimeout(() => {
      slide.style.display = "none"
    }, 1100)

    dispatch(addCartItem({ ...product.node, price }))
  }
  // useEffect(() => {
  //   console.log(countRef.current)
  //   return () => {
  //     clearTimeout(countRef.current)
  //   }
  // }, [countRef.current])
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  }
  return (
    <Layout location={location} title={siteTitle}>
      <div className="slide-item">
        <h5 className="slide-item__title"> {title}...zu Korb </h5>
      </div>

      <Container className="product-details" maxWidth="lg">
        <Breadcrumbs className="bread-crumbs">
          <Link to="/" className="bread-crumbs__home">
            <HomeIcon fontSize="small" /> Home
          </Link>
          <Link to="/shop">Shop</Link>
          <Link to="/">Iphone</Link>
        </Breadcrumbs>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <div className="product-details__image">
              <Slider {...settings}>
                {product.node.product.localFiles.map((image, index) => (
                  <Img key={index} fluid={image.childImageSharp.fluid} />
                ))}
              </Slider>
              {/* <Img
                fluid={product.node.product.localFiles[0].childImageSharp.fluid}
                alt=""
              /> */}
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
              <div className="product-action__buy-info">
                <button className="btn btn-add" onClick={addToCart}>
                  <span className="btn-icon">
                    <ShoppingCartOutlinedIcon />
                  </span>
                  In den Warenkorb
                </button>
                <button
                  className="btn btn-checkout"
                  onClick={() => {
                    navigate("/cart")
                  }}
                >
                  <span className="btn-icon">
                    <LocalPrintshopOutlinedIcon />
                  </span>{" "}
                  Zum Warenkorb
                </button>
                <div className="product-details__info">
                  <div className="product-details__info--ship">
                    <span className="title">Abholung:</span>
                    <span className="des">
                      Lieferung an Abholstation möglich
                    </span>
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
