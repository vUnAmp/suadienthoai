import React, { useEffect, useState } from "react"
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
    marginTop: "2rem",
    marginBottom: "1rem",
  },
  title: {
    paddingLeft: "1rem",
    fontSize: 20,
    fontWeight: 400,
  },
}))

const RelateProduct = ({ data }) => {
  const [count, setCount] = useState(3)
  const [renderData, setRenderData] = useState([])
  const classes = useStyles()
  const n = data.length
  let newData = []
  let countItems

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  }
  useEffect(() => {
    countItems = window.innerWidth > 600 ? 6 : 3
    for (let i = 0; i < n; i += countItems) {
      newData = [...newData, data.slice(i, i + countItems)]
    }
    setRenderData(newData)
    setCount(countItems)
  }, [count])
  console.log(count)
  return (
    <div className={classes.relatedWrap}>
      <p className={classes.title}>Das könnte dir gefallen</p>
      <Slider {...settings}>
        {renderData.map((item, index) => {
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
                  <Grid item xs={12 / count} key={(product, i)}>
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
                      <div className="subtitle">{product.node.fields.name}</div>
                      <p style={{ fontWeight: 600 }}> €{price} </p>
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
