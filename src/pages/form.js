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
    <form name="desktopwaitlist" method="POST" data-netlify="true">
      <h1>
      plöt waitlist
      </h1>
      <SubLine>
      <span role="img" aria-label="pencil emoji">✏️</span> enter your email for updates on developments!
      </SubLine>
            <Input type="email" name="email" placeholder="name@example.com"/>
            <Link to="/formsubmitted"><Button type="submit">submit</Button></Link>
    </form>


    <form name="simpleContactForm" method="POST" data-netlify="true" action="/formsubmitted" id="simple-contact-form" class="contact-form">
        <p class="form-row">
            <label id="contact-form-name-label" for="contact-form-name" class="form-label">Name</label>
            <input type="text" name="name" id="contact-form-name" aria-labelledby="contact-form-name-label" class="form-input" />
        </p>
        <p class="form-row">
            <label id="contact-form-email-label" for="contact-form-email" class="form-label">Email address</label>
            <input type="email" name="email" id="contact-form-email" aria-labelledby="contact-form-email-label" class="form-input" />
        </p>
        <p class="form-row">
            <label id="contact-form-message-label" for="contact-form-message" class="form-label">Message</label>
            <textarea
                name="message"
                id="contact-form-message"
                aria-labelledby="contact-form-message-label"
                class="form-textarea"
                rows="7"
            ></textarea>
        </p>
        <p class="form-row form-submit">
            <button type="submit" class="button">Send Message</button>
        </p>
    </form>



    </DesktopFormInner>
    </DesktopForm>
    <MobileForm>
    <Link to="/">
    <MobileBackButton src="/leftarrow.svg" /></Link>
    <MobileFormInner>
    <MobileLogo src="/logo.png"/>
    <form name="contact" method="POST" data-netlify="true">
      <h1>
      plöt waitlist
      </h1>
      <SubLine>
      <span role="img" aria-label="pencil emoji">✏️</span> enter your email for updates on developments!
      </SubLine>
            <h1><Input type="email" name="email" placeholder="name@example.com"/></h1>
      <Link to="/formsubmitted"><Button type="submit">submit</Button></Link>
    </form>
    </MobileFormInner>
    </MobileForm>
  </Layout>
)

export default plotStore
