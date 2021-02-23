import React from "react";
import Header from "../components/header";
import Landing from "../components/landing";
import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";

{/*const Back = styled.body`
  background: linear-gradient(to right, #FFFFFF, #B2FEFA);
`;*/}

const IndexPage = () => (
  <Layout>
    <SEO title="plöt" keywords={[`plot`,`future`]}/>
    {/*<Back>*/}
    <Header/>
    <Landing/>
    {/*</Back>*/}
  </Layout>
)
export default IndexPage
