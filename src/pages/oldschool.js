import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components";

const DesktopSchool = styled.header`
  @media (max-width: 575px) {
   display:none;
  }
`;

const DesktopSchoolInner = styled.header`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 575px) {
   display:none;
  }
`;

//768px was original mobileheader value.
const MobileSchool = styled.header`
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
  width: 100%;
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

const BackButton = styled.img`
  display: table;
  position: absolute;
  width: 10%;
  margin-left: 2%;
  margin-top: 2%;
  cursor: pointer;
  @media only screen and (min-width: 1200px) {
      width: 8%;
    }
`;

const MobileBackButton = styled.img`
  display: block;
  width: 10%;
  margin-left: 2%;
  margin-top: 2%;
  cursor: pointer;
`;

const plotSchool = () => (
  <Layout>
    <SEO title="plöt school" keywords={[`plot`, `school`]}/>
    <DesktopSchool>
    <Link to="/">
    <BackButton src="/leftarrow.svg" /></Link>
    <DesktopSchoolInner>
    <Art src="/schoolart.png" />
    <Call color="#333" className="center" size="30px">
      we're reimagining the industrial-era education system for the 21st century...
    </Call>
    </DesktopSchoolInner>
    </DesktopSchool>
    <MobileSchool>
    <Link to="/">
    <MobileBackButton src="/leftarrow.svg" /></Link>
    <MobileArt src="/schoolart.png" />
    <Call color="#333" className="center" size="30px">
      we're reimagining the industrial-era education system for the 21st century...
    </Call>
    </MobileSchool>
  </Layout>
)

export default plotSchool
