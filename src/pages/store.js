import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components";

const DesktopStore = styled.header`
  @media (max-width: 575px) {
   display:none;
  }
`;

//768px was original mobileheader value.
const MobileStore = styled.header`
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
  display: table;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 6px;
  padding-bottom: 6px;
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
    <SEO title="plot store" keywords={[`plot`, `store`]}/>
    <DesktopStore>
    <Art src="/storeart.png" />
    <Call color="#333" className="center" size="30px">
      we're bringing local, circular, organic foods right next door...
    </Call>
    <Link to="/">
    <BackButton>back</BackButton></Link>
    </DesktopStore>
    <MobileStore>
    <MobileArt src="/storeart.png" />
    <Call color="#333" className="center" size="30px">
      we're bringing local, circular, organic foods right next door...
    </Call>
    <Link to="/">
    <BackButton>back</BackButton></Link>
    </MobileStore>
  </Layout>
)

export default plotStore
