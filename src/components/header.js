import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Container} from "react-grid-system";
import { Row, Col } from "react-grid-system";
import "./layout.css"

const Background = styled.header`
  min-height: 100vh;
`;

const DesktopHeader = styled.header`
  @media (max-width: 575px) {
   display:none;
  }
`;

//768px was original mobileheader value.
const MobileHeader = styled.header`
  @media (min-width: 575px) {
   display:none;
  }
  @media (max-width: 575px) {
   display:initial;
  }
`;

const Logo = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
`;

const MobileLogo = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
`;

const SubLogo = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 5px 10px;
  width: 40%;
  padding: 10px;
  border: 6px solid #000000;
  border-radius: 40px;
  cursor: pointer;
  transition: all 300ms ease;
  &:hover {
    background: #CCCCCC;
    transform: scale(1.2);
    opacity: 0.45;
`;

const MobileSubLogo = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 18%;
  padding: 10px;
  border: 6px solid #000000;
  border-radius: 40px;
  cursor: pointer;
  transition: all 300ms ease;
  &:hover {
    background: #CCCCCC;
    transform: scale(1.2);
    opacity: 0.45;
`;

const Title = styled.h1`
  text-align: center;
  max-width: 900px;
  font-size: 3rem;
  margin-left: auto;
  margin-right: auto;
  color: #000000;
  border-right: solid 3px #000000;
  white-space: nowrap;
  overflow: hidden;
  animation: animated-text 3s steps(29) 1s 1 normal both,
             animated-cursor 600ms steps(29) infinite;
  @keyframes animated-text{
  from{width: 0;}
  to{width: 590px;}
  }
  @keyframes animated-cursor{
    from{border-right-color: #000000;}
    to{border-right-color: transparent;}
  }
  @media only screen and (max-width: 1024px) {
    font-size: 48px;
  }
  @media only screen and (max-width: 768px) {
    font-size: 33px;
    padding: 16px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 33px;
    padding: 14px;
  }
`;

const MobileTitle = styled.h1`
  text-align: left;
  max-width: 900px;
  font-size: 25px;
  margin-left: auto;
  margin-right: auto;
  color: #000000;
  border-right: solid 3px #000000;
  white-space: nowrap;
  overflow: hidden;
  animation: animated-textmobile 3s steps(26) 1s 1 normal both,
             animated-cursor 600ms steps(26) infinite;
  @keyframes animated-textmobile{
  from{width: 0;}
  to{width: 306px;}
  }
  @keyframes animated-cursor{
    from{border-right-color: #000000;}
    to{border-right-color: transparent;}
  }
`;

const Tagline = styled.h1`
  text-align: center;
  max-width: 900px;
  font-size: 3rem;
  margin-left: auto;
  margin-right: auto;
  color: #000000;
  @media only screen and (max-width: 1024px) {
    font-size: 48px;
  }
  @media only screen and (max-width: 768px) {
    font-size: 33px;
    padding: 16px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 33px;
    padding: 14px;
  }
`;

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

const SubText = styled.h1`
  text-align: center;
  max-width: 900px;
  font-size: 3rem;
  margin-left: auto;
  margin-right: auto;
  color: #000000;
`;

const SubHoverText = styled.h1`
  color: #000000;
  font-size: 24px;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  @media only screen and (max-width: 2000px) {
    font-size: 35px;
  }
  @media only screen and (max-width: 1600px) {
    font-size: 30px;
  }
  @media only screen and (max-width: 1200px) {
    font-size: 24px;
  }
  @media only screen and (max-width: 1024px) {
    font-size: 20px;
  }
  @media only screen and (max-width: 900px) {
    font-size: 18px;
  }
  @media only screen and (max-width: 800px) {
    font-size: 17px;
  }
  @media only screen and (max-width: 700px) {
    font-size: 15px;
  }
  @media only screen and (max-width: 575px) {
    font-size: 30px;
  }
`;

const MobileSubHoverText = styled.h1`
  color: #000000;
  position: absolute;
  top: 100%;
  left: 50%;
  font-size: 15px;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
`;

const SubTitle = styled.h1`
  text-align: center;
  max-width: 700px;
  font-size: 24px;
  margin-left: auto;
  margin-right: auto;
  {/*color: #215f00;*/}
  color: #000000;
  @media only screen and (max-width: 1024px) {
    max-width: 600px;
  }
  @media only screen and (max-width: 768px) {
    padding: 16px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 17px;
    max-width: 500px;
    padding: 2px;
  }
`;

const Header = ({ siteTitle }) => (
  <Background>
  <DesktopHeader>
  <br/><br/><br/><br/><br/>
      <Row>
        <Col sm={4}/>
        <Col sm={4}>
          <a href="/home" rel="noreferrer">
            <div class="overall">
              <SubLogo src="/house.png"/>
              <div class="overlay">
                  <SubHoverText>plöt │ home</SubHoverText>
              </div>
            </div>
          </a>
        </Col>
        <Col sm={4}/>
      </Row>
  <br/><br/><br/><br/>
      <Row>
        <Col sm={4}>
          <a href="/school" rel="noreferrer">
            <div class="overall">
              <SubLogo src="/school.png"/>
              <div class="overlay">
                <SubHoverText>plöt │ school</SubHoverText></div>
            </div>
          </a>
        </Col>
        <Col sm={4}>
          <a href="/" rel="noreferrer">
            <Logo src="/logo.png" />
          </a>
        </Col>
        <Col sm={4}>
          <a href="/store" rel="noreferrer">
            <div class="overall">
              <SubLogo src="/store.png"/>
              <div class="overlay">
                <SubHoverText>plöt │ store</SubHoverText>
              </div>
            </div>
          </a>
        </Col>
      </Row>
    <br/><br/>
      <Title>plöt: the future of living.</Title>
      <SubTitle>under construction.</SubTitle>

    <ArrowImage src="/downarrow.png"/>

  </DesktopHeader>
  <MobileHeader>
  <br/>
    <Row>
      <Col sm={4}/>
      <Col sm={4}>
      <a href="/" rel="noreferrer">
      <MobileLogo src="/logo.png" />
      </a>
      </Col>
    <Col sm={4}/>
    </Row>
      <MobileTitle>plöt: the future of living.</MobileTitle>
      <SubTitle>{/*Join the community that's right for you. */}under construction.</SubTitle>
      <br/>
      <Row>
        <Col sm={4}/>
        <Col sm={4}>
        <a href="/home" rel="noreferrer">
        <div class="overall">
        <MobileSubLogo src="/house.png"/>
        <div class="mobileoverlay"><MobileSubHoverText>plöt │ home</MobileSubHoverText></div>
        </div></a></Col>
        <Col sm={4}/>
      </Row><br/><br/><br/>
      <Row>
        <Col sm={4}/>
        <Col sm={4}>
        <a href="/school" rel="noreferrer">
        <div class="overall">
        <MobileSubLogo src="/school.png"/>
        <div class="mobileoverlay"><MobileSubHoverText>plöt │ school</MobileSubHoverText></div>
        </div></a></Col>
        <Col sm={4}/>
      </Row><br/><br/><br/>
      <Row>
        <Col sm={4}/>
        <Col sm={4}>
        <a href="/store" rel="noreferrer">
        <div class="overall">
        <MobileSubLogo src="/store.png"/>
        <div class="mobileoverlay"><MobileSubHoverText>plöt │ store</MobileSubHoverText></div>
        </div></a></Col>
        <Col sm={4}/>
      </Row>
  </MobileHeader>
  </Background>
);

export default Header;
