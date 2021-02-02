// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"
// normalize CSS across browsers
import "./src/normalize.css"
// custom CSS styles
// import "./src/style.css"

// Highlighting for code blocks
import "prismjs/themes/prism.css"

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import wrapWithProvider from "./wrap-with-provider"
export const wrapRootElement = wrapWithProvider
