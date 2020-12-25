import React from "react";
import Header from "../components/header";
import Landing from "../components/landing";
import Layout from "../components/layout";
import styled from "styled-components";
import SEO from "../components/seo";

const ArrowImage = styled.img`
  margin-left: auto;
  margin-right: auto;
  width: 6%;
  position: fixed;
  bottom: 0;
  left: 47%;
  animation: 1s Zoom linear infinite,
  1s Always ease alternate infinite;
  }
  @keyframes Zoom {
      100% { background-position: 100vw 0px; }
  }

  @keyframes Always {
      100% { transform: scale(1.15);}
  }

`;

const IndexPage = () => (
  <Layout>
    <SEO title="plot" keywords={[`plot`,`future`]}/>
    <ArrowImage src="/downarrow.png"/>
    <Header/>
    <Landing/>
  </Layout>
)
export default IndexPage
