import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import '../styles/global.scss'

// import Seo from "../components/seo"  

const IndexPage = () => (
  <Layout>
    <div className="hero">
      <div className="container">
        <div className="hero-left">
          left
        </div>
        
        <div className="hero-left">
          right
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
