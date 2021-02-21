import React from "react";
import { Link } from "gatsby";
import { Row, Col} from "react-grid-system";
import styled from "styled-components";
import "./layout.css"

const Background = styled.header`
`;

const DesktopHeader = styled.header`
  @media (max-width: 768px) {
   display:none;
  }
`;

//768px was original mobileheader value.
const MobileHeader = styled.header`
  @media (min-width: 768px) {
   display:none;
  }
  @media (max-width: 768px) {
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
  width: 40%;
  border: 6px solid #000000;
  box-shadow: 5px 10px #000000;
  padding: 10px;
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

const SubHoverText = styled.h1`
  color: #000000;
  font-size: 24px;
  position: absolute;
  top: 108%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  @media only screen and (max-width: 800px) {
    white-space: nowrap;
    font-size: 17px;
  }
`;

//unoptimized
const MobileSubHoverText = styled.h1`
  position: absolute;
  font-size: 15px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  top: 106%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Title = styled.h1`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  font-size: 48px;
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
  @media only screen and (max-width: 768px) {
    font-size: 33px;
  }
`;

const MobileTitle = styled.h1`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  font-size: 25px;
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

const WaitlistButton = styled.button`
  display: table;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
  font-size: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  background: black;
  color: white;
  border: none;
  border-radius: 10px;
  :hover {
    box-shadow: inset 0 0 100px 100px #444d56;
  }
  @media only screen and (max-width: 672px) {
      border-radius: 3px;
    }
`;

const Header = ({ siteTitle }) => (
  <Background>
  <div className="headersqueeze">

  <DesktopHeader>
  <br/><br/><br/><br/><br/>
      <Row>
        <Col/>
        <Col>
          <Link to="/home">
            <div class="overall">
              <SubLogo src="/house.png"/>
              <div class="overlay">
                  <SubHoverText>plöt │ home</SubHoverText>
              </div>
            </div>
          </Link>
        </Col>
        <Col/>
      </Row>
  <br/><br/><br/><br/>
      <Row>
        <Col>
          <Link to="/school">
            <div class="overall">
              <SubLogo src="/school.png"/>
              <div class="overlay">
                <SubHoverText>plöt │ school</SubHoverText></div>
            </div>
          </Link>
        </Col>
        <Col>
          <Link to="/">
            <Logo src="/logo.png" />
          </Link>
        </Col>
        <Col>
          <Link to="/store">
            <div class="overall">
              <SubLogo src="/store.png"/>
              <div class="overlay">
                <SubHoverText>plöt │ store</SubHoverText>
              </div>
            </div>
          </Link>
        </Col>
      </Row>
    <br/><br/>
      <Title>plöt: the future of living.</Title>
      <Link to="/form">
      <WaitlistButton>join the waitlist</WaitlistButton></Link>
  </DesktopHeader>

  <MobileHeader>
    <br/>
    <Link to="/">
      <MobileLogo src="/logo.png" />
    </Link>
    <MobileTitle>plöt: the future of living.</MobileTitle>
    <Link to="/form">
    <WaitlistButton>join the waitlist</WaitlistButton></Link>
    <br/><br/><br/><br/><br/>
    <Link to="/home">
      <div class="overall">
        <MobileSubLogo src="/house.png"/>
          <div class="mobileoverlay">
            <MobileSubHoverText>plöt │ home</MobileSubHoverText>
          </div>
      </div>
    </Link>
    <br/><br/><br/>
    <Link to="/school">
      <div class="overall">
        <MobileSubLogo src="/school.png"/>
          <div class="mobileoverlay">
            <MobileSubHoverText>plöt │ school</MobileSubHoverText>
          </div>
      </div>
    </Link>
    <br/><br/><br/>
    <Link to="/store">
      <div class="overall">
        <MobileSubLogo src="/store.png"/>
          <div class="mobileoverlay">
            <MobileSubHoverText>plöt │ store</MobileSubHoverText>
          </div>
      </div>
    </Link>
  </MobileHeader>

  </div>
  </Background>
);

export default Header;
