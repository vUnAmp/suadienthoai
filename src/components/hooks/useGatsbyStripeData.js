import { useStaticQuery, graphql } from "gatsby"

const useGatsbyStripeData = () => {
  const data = useStaticQuery(graphql`
    query GatsbyStripeData {
      allStripePrice {
        edges {
          node {
            unit_amount
            id
            currency
            fields {
              name
              slug
            }
            product {
              id
              description
              localFiles {
                childImageSharp {
                  fluid(maxWidth: 460, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  return data.allStripePrice.edges
}
export default useGatsbyStripeData
