import { useStaticQuery, graphql } from "gatsby"

const useSiteMeta = () => {
  const site = useStaticQuery(graphql`
    query Parner {
      partners: allFile(filter: { relativeDirectory: { regex: "/partner/" } }) {
        nodes {
          childImageSharp {
            fluid(maxWidth: 300, quality: 100) {
              ...GatsbyImageSharpFluid
            }
            id
          }
        }
      }
    }
  `)
  return site
}

export default useSiteMeta
