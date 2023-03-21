import * as React from "react"
import {graphql, Link} from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Bio from "../components/bio";
import AerobicSpeedCalculator from "../components/vma-calculator";

const VmaPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Maximal Aerobic Speed Calculator" />
        <Bio />
      <h1>Maximal Aerobic Speed Calculator</h1>
      <p>Maximal Aerobic Speed (MAS) is the speed at which we run when our oxygen consumption (VO2) hits its maximal value (VO2max) during a progressive maximal test. It is a useful index of aerobic capacity, on which to rely to set optimized running training sessions.</p>
      <AerobicSpeedCalculator/>
    </Layout>
  )
}

export default VmaPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
