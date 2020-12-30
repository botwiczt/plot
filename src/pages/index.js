import React from "react";
import Header from "../components/header";
import Landing from "../components/landing";
import Layout from "../components/layout";
import styled from "styled-components";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="plöt" keywords={[`plot`,`future`]}/>
    <Header/>
    <Landing/>
  </Layout>
)
export default IndexPage
