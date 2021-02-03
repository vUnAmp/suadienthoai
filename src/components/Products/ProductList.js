import React, { useState, useEffect } from "react"
import { graphql, Link, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import { makeStyles } from "@material-ui/core/styles"

import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardContent from "@material-ui/core/CardContent"

import { useSelector, useDispatch } from "react-redux"

// Query data
import useGatsbyStripeData from "../hooks/useGatsbyStripeData"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: "72.5rem",
    margin: "0 auto",
    paddingTop: 100,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  maxWidth: {
    maxWidth: 445,
    margin: "0 auto",
    position: "relative",
    marginBottom: 20,
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
}))

const ListProducts = () => {
  const classes = useStyles()

  const [count, setCount] = useState(2)
  const data = useGatsbyStripeData()
  //   useEffect(() => {
  //     document.addEventListener("scroll", () => {
  //       console.log("hello")
  //       setCount(count + 2)
  //     })
  //     return () => {
  //       document.removeEventListener("scroll")
  //     }
  //   })

  return (
    <Grid container className={classes.root} spacing={5}>
      {data.map((product, i) => {
        const price = (product.node.unit_amount / 100).toFixed(2)
        return (
          <Grid item xs={12} md={4} key={(product, i)}>
            <Card className={classes.maxWidth}>
              <Link
                className={classes.link}
                to={`/product/${product.node.fields.slug}`}
              ></Link>
              <Img
                fluid={product.node.product.localFiles[0].childImageSharp.fluid}
                alt=""
              />
              <CardHeader
                title={product.node.fields.name}
                /////   Overriden CSS /////
                classes={{
                  title: classes.headerTitle,
                }}
                /////   Overriden CSS /////
              />

              <CardContent style={{}}>
                <p style={{ color: "#00000073", marginTop: "-14px" }}>
                  {product.node.product.description}
                </p>

                <p style={{ fontWeight: 700 }}> €{price} </p>
              </CardContent>
            </Card>
          </Grid>
        )
      })}
    </Grid>
  )
}
export default ListProducts
