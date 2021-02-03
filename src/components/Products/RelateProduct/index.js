import React from "react"
import useGatsbyStripeData from "../../hooks/useGatsbyStripeData"

// Gatsby
import Img from "gatsby-image"
import { Link } from "gatsby"

// React Slick Carousel
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

// Material UI
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardContent from "@material-ui/core/CardContent"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    // flexDirection: "row",
    maxWidth: "72.5rem",
    margin: "0 auto",
    paddingTop: 100,
    boxShadow: "none",
  },

  maxWidth: {
    maxWidth: 445,
    margin: "0 auto",
    position: "relative",
    boxShadow: "none",
    // marginBottom: 20,
    // backgroundColor: "#fbf4f4",
  },
  headerTitle: {
    fontSize: 16,
  },
  link: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 2,
  },
  itemscarousel: {
    display: "flex !important",
    flexDirection: "row",
    margin: 0,
  },
  relatedWrap: {
    border: "1px solid #ededed",
    paddingBottom: "1rem",
    marginBottom: "1rem",
  },
  title: {
    paddingLeft: "1rem",
    fontSize: 20,
    fontWeight: 400,
  },
}))

const RelateProduct = ({ data }) => {
  const classes = useStyles()
  console.log(data)
  const n = data.length
  let newData = []
  for (let i = 0; i < n; i += 6) {
    newData = [...newData, data.slice(i, i + 6)]
  }
  console.log(newData)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  }
  return (
    <div className={classes.relatedWrap}>
      <p className={classes.title}>Das könnte dir auch gefallen</p>
      <Slider {...settings}>
        {/* <Grid container className={classes.root} spacing={5}> */}
        {newData.map((item, index) => {
          return (
            <Grid
              className={classes.itemscarousel}
              key={index}
              container
              spacing={3}
            >
              {item.map((product, i) => {
                const price = (product.node.unit_amount / 100).toFixed(2)
                return (
                  <Grid item xs={12} md={2} key={(product, i)}>
                    <Card className={classes.maxWidth}>
                      <Link
                        className={classes.link}
                        to={`/product/${product.node.fields.slug}`}
                      ></Link>
                      <Img
                        fluid={
                          product.node.product.localFiles[0].childImageSharp
                            .fluid
                        }
                        alt=""
                      />
                      <p>{product.node.fields.name}</p>
                      {/* <CardHeader
                        title={product.node.fields.name}
                        /////   Overriden CSS /////
                        classes={{
                          title: classes.headerTitle,
                        }}
                        /////   Overriden CSS /////
                      /> */}

                      {/* <CardContent style={{}}>
                    <p style={{ color: "#00000073", marginTop: "-14px" }}>
                      {product.node.product.description}
                    </p>

                    <p style={{ fontWeight: 700 }}> €{price} </p>
                  </CardContent> */}
                    </Card>
                  </Grid>
                )
              })}
            </Grid>
          )
        })}
        {/* </Grid> */}
      </Slider>
    </div>
  )
}

export default RelateProduct
