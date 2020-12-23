import React from "react";
import Header from "../components/header";
import Landing from "../components/landing";
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="plot" keywords={[`plot`,`future`]}/>
    <Header/>
    <Landing/>
  </Layout>
)
export default IndexPage
