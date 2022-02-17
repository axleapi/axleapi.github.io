import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"

import HeaderClimate from "../components/sections/headerClimate"
import SolutionsClimate from "../components/sections/solutionsClimate"
import Footer from "../components/sections/footer"
import GetStarted from "../components/sections/getstarted"
import ProductClimate from "../components/sections/productClimate"
import DevelopersClimate from "../components/sections/developersClimate"

const IndexPage = () => (
  <Layout>
    <SEO title="Climate" />
    <Navigation />
    <HeaderClimate />
    <ProductClimate />
    <DevelopersClimate />
    <SolutionsClimate />
    <GetStarted />
    <Footer />
  </Layout>
)

export default IndexPage
