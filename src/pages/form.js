import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components";
import { Container, Row, Col } from "react-grid-system";

const DesktopForm = styled.header`
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

const Call = styled.h2`
  margin: 0;
  padding: 0;
  font-size: ${props => props.size};
  color: ${props => props.color};
  @media only screen and (max-width: 1024px) {
      font-size: 25px;
    }
`;

const SubLine = styled.h1`
  font-size: 16px;
`;

const Input = styled.input`
  font-size: 20px;
  padding: 10px;
  background: #DCDCDC;
  border: none;
  border-radius: 3px 0 0 3px;
  @media only screen and (max-width: 672px) {
      border-radius: 3px;
    }
`;

const BackButton = styled.img`
  display: block;
  width: 10%;
  margin-left: 2%;
  margin-top: 2%;
  cursor: pointer;
  @media only screen and (min-width: 1200px) {
      width: 8%;
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
  border-radius: 0 3px 3px 0;
  :hover {
    box-shadow: inset 0 0 100px 100px #444d56;
  }
  @media only screen and (max-width: 672px) {
      border-radius: 3px;
    }
`;

const plotStore = () => (
  <Layout>
    <SEO title="plot waitlist" keywords={[`plot`, `waitlist`]}/>
    <Link to="/">
    <BackButton src="/leftarrow.svg" /></Link>
    <DesktopForm>
    <Logo src="/logo.png"/>
    <form name="contact" method="POST" data-netlify="true">
      <h1>
      plöt waitlist
      </h1>
      <SubLine>
      ✏️ enter your email for updates on developments!
      </SubLine>
            <Input type="email" name="email" placeholder="name@example.com"/>
            <Button type="submit">submit</Button>
    </form>
    </DesktopForm>
    <MobileForm>
    <MobileLogo src="/logo.png"/>
    <form name="contact" method="POST" data-netlify="true">
      <h1>
      plöt waitlist
      </h1>
      <SubLine>
      ✏️ enter your email for updates on developments!
      </SubLine>
            <h1><Input type="email" name="email" placeholder="name@example.com"/></h1>
            <Button type="submit">submit</Button>
    </form>
    </MobileForm>
  </Layout>
)

export default plotStore
