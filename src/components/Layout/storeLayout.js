// import React, { useState, useEffect } from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import Header from "../Header"

// const StoreLayout = ({ children }) => {
//   const GatsbyStripeData = graphql`
//     query GatsbyStripeData {
//       allStripePrice {
//         edges {
//           node {
//             unit_amount
//             id
//             currency
//             fields {
//               name
//               slug
//             }
//             product {
//               id
//               description
//               localFiles {
//                 childImageSharp {
//                   fluid(maxWidth: 460, quality: 100) {
//                     ...GatsbyImageSharpFluid_withWebp_tracedSVG
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   `

//   const data = useStaticQuery(GatsbyStripeData)
//   console.log(data)

//   return (
//     <div>
//       <Header />
//       {children}
//       <h1>Hello</h1>
//     </div>
//   )
// }

// export default StoreLayout
