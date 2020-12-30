import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components";

const DesktopValues = styled.header`
  @media (max-width: 575px) {
   display:none;
  }
`;

//768px was original mobileheader value.
const MobileValues = styled.header`
  @media (min-width: 575px) {
   display:none;
  }
  @media (max-width: 575px) {
   display:initial;
  }
`;

const Art = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
  @media only screen and (max-width: 575px) {
    position: auto;
    width: 40%;
  {/*@media only screen and (min-width: 1250px) {
    position: auto;
    width: 40%;
  }
  @media only screen and (max-width: 767px) {
    position: auto;
    width: 65%;
  }
  @media only screen and (min-width: 1200px) {
    position: auto;
    width: 40%;
  }
  @media only screen and (max-width: 100px) {
  content:url("/logosmall.png");
    position: auto;
    width: 65%;
  }*/}
`;

const MobileArt = styled.img`
  display: block;
  margin: auto;
  margin-top: 50%;
  width: 100%;
`;

const Call = styled.h2`
  margin: 0;
  padding: 0;
  font-size: ${props => props.size};
  color: ${props => props.color};
  @media only screen and (max-width: 1024px) {
      font-size: 25px;
    }
`;

const BackButton = styled.h1`
  display: flex;
  justify-content: center;
  width: 100px;
  margin-left: auto;
  margin-right: auto;
  padding: 6px;
  border: 5px solid;
  border-radius: 10px;
  font-size: 30px;
  color: #000000;
  transition: all 300ms ease;
  &:hover {
    background: #cccccc;
  }
`;

const plotStore = () => (
  <Layout>
    <SEO title="plot values" keywords={[`plot`, `values`]}/>
    <DesktopValues>
    <Art src="/valueswip.svg" />
    <Call color="#333" className="center" size="30px">
      they're coming soon...
    </Call>
    <Link to="/">
    <BackButton>back</BackButton></Link></DesktopValues>
    <MobileValues>
    <MobileArt src="/valueswip.svg" />
    <Call color="#333" className="center" size="30px">
      they're coming soon...
    </Call>
    <Link to="/">
    <BackButton>back</BackButton></Link></MobileValues>
  </Layout>
)

export default plotStore
