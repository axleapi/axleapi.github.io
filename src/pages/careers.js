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
import { navigate } from "gatsby"

const isBrowser = () => typeof window !== "undefined"

const CareersPage = () => {
  if(isBrowser())
    window.location.href = "https://axleapi.notion.site/Careers-at-Axle-df4daa9afb064b20b94acc2c4c4417bc"

    return (<>Redirecting...</>)
  }

export default CareersPage