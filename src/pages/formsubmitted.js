import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components";

const DesktopForm = styled.header`
  @media (max-width: 672px) {
   display:none;
  }
`;

const DesktopFormInner = styled.header`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 672px) {
   display:none;
  }
`;

const MobileForm = styled.header`
  @media (min-width: 672px) {
   display:none;
  }
  @media (max-width: 672px) {
   display:initial;
  }
`;

const MobileFormInner = styled.header`
  @media (min-width: 672px) {
   display:none;
  }
  @media (max-width: 672px) {
   display:initial;
   text-align: center;
   position: fixed;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
  }
`;

const Logo = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;

const MobileLogo = styled.img`
  display: block;
  margin: auto;
  width: 80%;
`;

const SubLine = styled.h1`
  font-size: 16px;
`;

const Input = styled.input`
  font-size: 20px;
  padding: 10px;
  background: #DCDCDC;
  border: none;
  border-radius: 10px 0 0 10px;
  @media only screen and (max-width: 672px) {
      border-radius: 3px;
    }
`;

const Button = styled.button`
  width: auto;
  cursor: pointer;
  font-size: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  background: black;
  color: white;
  border: none;
  border-radius: 0 10px 10px 0;
  :hover {
    box-shadow: inset 0 0 100px 100px #444d56;
  }
  @media only screen and (max-width: 672px) {
      border-radius: 3px;
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
  @media only screen and (min-width: 1200px) {
      width: 8%;
    }
`;

const plotStore = () => (
  <Layout>
    <SEO title="plot waitlist" keywords={[`plot`, `waitlist`]}/>
    <DesktopForm>
    <Link to="/">
    <BackButton src="/leftarrow.svg" /></Link>
    <DesktopFormInner>
    <Logo src="/logo.png"/>
    <h1>
    <span role="img" aria-label="party popper emoji">🎉</span> added to waitlist.
    </h1>
    <br/><br/><br/><br/>
    </DesktopFormInner>
    </DesktopForm>
    <MobileForm>
    <Link to="/">
    <MobileBackButton src="/leftarrow.svg" /></Link>
    <MobileFormInner>
    <MobileLogo src="/logo.png"/>
    <h1>
      <span role="img" aria-label="party popper emoji">🎉</span> added to waitlist.
    </h1>
    </MobileFormInner>
    </MobileForm>
  </Layout>
)

export default plotStore
