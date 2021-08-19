import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"

import Header from "../components/sections/header"
import Solutions from "../components/sections/solutions"
import Footer from "../components/sections/footer"
import GetStarted from "../components/sections/getstarted"
import Product from "../components/sections/product"
import Developers from "../components/sections/developers"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navigation />
    <Header />
    <Product />
    <Developers />
    <Solutions />
    <GetStarted />
    <Footer />
  </Layout>
)

export default IndexPage
