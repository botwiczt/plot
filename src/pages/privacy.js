import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components";

const DesktopPrivacy = styled.header`
  @media (max-width: 672px) {
   display:none;
  }
`;

const DesktopPrivacyInner = styled.header`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 672px) {
   display:none;
  }
`;

const MobilePrivacy = styled.header`
  @media (min-width: 672px) {
   display:none;
  }
  @media (max-width: 672px) {
   display:initial;
  }
`;

const MobilePrivacyInner = styled.header`
  @media (min-width: 672px) {
   display:none;
  }
  @media (max-width: 672px) {
   display:initial;
   text-align: center;
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
    <SEO title="plöt privacy" keywords={[`plot`, `privacy`]}/>
    <DesktopPrivacy>
    <Link to="/">
    <BackButton src="/leftarrow.svg" /></Link>
    <DesktopPrivacyInner>
    <Logo src="/logo.png"/>
    <h1>
    privacy policy:
    </h1>
    <h3>
    last updated february 1st, 2021
    </h3>
    <h3>
    > we do not automatically collect any personal information from site visitors.
    <br/>> we collect your email if entered into the waitlist.
    <br/>> we store all collected emails along with a timestamp of collection on a secure server.
    <br/>> we do not use any analytical software.
    </h3>
    <br/><br/><br/><br/>
    </DesktopPrivacyInner>
    </DesktopPrivacy>
    <MobilePrivacy>
    <Link to="/">
    <MobileBackButton src="/leftarrow.svg" /></Link>
    <MobilePrivacyInner>
    <MobileLogo src="/logo.png"/>
    <h1>
    privacy policy:
    </h1>
    <h3>
    last updated february 1st, 2021
    </h3>
    <br/>
    <h3>
    > we do not automatically collect any personal information from site visitors.
    <br/>  <br/>> we collect your email if entered into the waitlist.
    <br/>  <br/>> we store all collected emails along with a timestamp of collection on a secure server.
    <br/>  <br/>> we do not use any analytical software.
    </h3>
    </MobilePrivacyInner>
    </MobilePrivacy>
  </Layout>
)

export default plotStore
