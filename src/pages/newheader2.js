import React, { Component } from "react";
import { Link } from "gatsby";
import { Row, Col} from "react-grid-system";
import styled from "styled-components";
import { slide as Menu } from 'react-burger-menu';
import './navbar.css';

const Background = styled.body`
  background: linear-gradient(to right, #FFFFFF, #B2FEFA);
  height: 110vh;
`;

const DesktopHeader = styled.body`
  @media (max-width: 768px) {
   display:none;
  }
`;

class NavBar extends Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <Menu width={ '30%' }>
        <Link id="home" className="menu-item" to="/home">
        <div class="newnavhover">
          <NavButton1 src="/house.png"/>
          <div class="newnavoverlay">
            <NavHover>plöt │ home</NavHover>
          </div>
        </div>
        </Link>

        <Link id="home" className="menu-item" to="/school">
        <div class="newnavhover">
          <NavButton2 src="/school.png"/>
          <div class="newnavoverlay">
            <NavHover>plöt │ school</NavHover>
          </div>
        </div>
        </Link>

        <Link id="home" className="menu-item" to="/store">
          <div class="newnavhover">
            <NavButton src="/store.png"/>
            <div class="newnavoverlay">
              <NavHover>plöt │ store</NavHover>
            </div>
          </div>
        </Link>
      </Menu>
    );
  }
}

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
  margin-left: 15%;
  margin-top: 5%;
  width: 20%;
`;

const Render = styled.img`
  display: block;
  margin-left: 55%;
  margin-top: -33%;
  width: 40%;
  transition: all 0.5s ease;
  :hover {
    transform: scale(1.1) rotate(5deg);
  }
  @media only screen and (max-width: 1350px) {
    margin-left: 58%;
    margin-top: -33%;
    width: 36%;
  }
  @media only screen and (max-width: 1050px) {
    margin-left: 31%;
    margin-top: -59%;
    width: 36%;
  }
  @media only screen and (max-width: 960px) {
    margin-left: 33%;
    margin-top: -62%;
    width: 36%;
  }
  @media only screen and (max-width: 870px) {
    margin-left: 33%;
    margin-top: -64%;
    width: 36%;
  }
  @media only screen and (max-width: 830px) {
    margin-left: 35%;
    margin-top: -65%;
    width: 36%;
  }
  @media only screen and (max-width: 780px) {
    margin-left: 36%;
    margin-top: -67%;
    width: 36%;
  }
`;

const MobileRender = styled.img`
  display: block;
  margin-left: 30%;
  margin-top: -45%;
  width: 40%;
  transition: all 0.5s ease;
  :hover {
    transform: scale(1.1) rotate(5deg);
  }
`;

const MobileLogo = styled.img`
  display: block;
  margin-top: 10%;
  width: 160%;
`;

const MobileSubLogo = styled.img`
  display: block;
  margin-left: 70%;
  width: 65%;
  padding: 8px;
  border: 6px solid #000000;
  border-radius: 25px;
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
  margin-left: 10%;
  font-size: 46px;
  white-space: nowrap;
  overflow: hidden;
  @media only screen and (max-width: 768px) {
    font-size: 33px;
  }
  @media only screen and (max-width: 1350px) {
    margin-left: 7%;
    font-size: 43px;
  }
  @media only screen and (max-width: 1050px) {
    margin-left: 25%;
    margin-top: 12%;
  }
`;

const SubTitle = styled.h1`
  margin-left: 10%;
  margin-top: -1%;
  font-size: 65px;
  border-right: solid 3px #000000;
  white-space: nowrap;
  overflow: hidden;
  animation: animated-text 1.5s steps(29) 1s 1 normal both,
             animated-cursor 600ms steps(29) infinite;
  @keyframes animated-text{
  from{width: 0;}
  to{width: 545px;}
  }
  @keyframes animated-cursor{
    from{border-right-color: #000000;}
    to{border-right-color: transparent;}
  }
  @media only screen and (max-width: 768px) {
    font-size: 33px;
  }
  @media only screen and (max-width: 1350px) {
    margin-left: 6%;
    margin-top: -2%;
  }
  @media only screen and (max-width: 1050px) {
    margin-left: 22.5%;
  }
`;

const MobileTitle = styled.h1`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  font-size: 45px;
  border-right: solid 3px #000000;
  white-space: nowrap;
  overflow: hidden;
  animation: animated-textmobile 1.5s steps(23) 1s 1 normal both,
             animated-cursor 600ms steps(26) infinite;
  @keyframes animated-textmobile{
  from{width: 0;}
  to{width: 390px;}
  }
  @keyframes animated-cursor{
    from{border-right-color: #000000;}
    to{border-right-color: transparent;}
  }
`;

const WaitlistButton = styled.button`
  margin-left: 20%;
  text-align: center;
  cursor: pointer;
  font-size: 32px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  background: black;
  color: white;
  border: none;
  border-radius: 10px;
  transition: all 0.5s ease;
  :hover {
    box-shadow: inset 0 0 100px 100px #444d56;
    transform: scale(1.15);
  }
  @media only screen and (max-width: 672px) {
      border-radius: 3px;
    }
    @media only screen and (max-width: 1350px) {
      margin-left: 17%;
      margin-top: -1%;
    }
    @media only screen and (max-width: 1050px) {
      margin-left: 37%;

    }
`;

const MobileWaitlistButton = styled.button`
  margin-left: 30%;
  cursor: pointer;
  font-size: 32px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  background: black;
  color: white;
  border: none;
  border-radius: 10px;
  transition: all 0.5s ease;
  :hover {
    box-shadow: inset 0 0 100px 100px #444d56;
    transform: scale(1.15);
  }
`;

//ugly workaround to move buttons closer; figure out how to wrap

const NavButton1 = styled.img`
  width: 40%;
  margin-left: 20%;
  cursor: pointer;
  display: block;
  border: 6px solid #000000;
  box-shadow: 5px 5px #000000;
  padding: 10px;
  border-radius: 30px;
  transition: all 0.5s ease;
  :hover {
    background: #CCCCCC;
    transform: scale(1.2);
    opacity: 0.45;
  }
  @media only screen and (max-width: 1200px) {
    box-shadow: 3px 3px #000000;
  }
  @media only screen and (max-width: 1000px) {
    box-shadow: 0px 0px;
  }
`;

const NavButton2 = styled.img`
  width: 40%;
  margin-left: 20%;
  cursor: pointer;
  display: block;
  border: 6px solid #000000;
  box-shadow: 5px 5px #000000;
  padding: 10px;
  border-radius: 30px;
  transition: all 0.5s ease;
  :hover {
    background: #CCCCCC;
    transform: scale(1.2);
    opacity: 0.45;
  }
  @media only screen and (max-width: 1200px) {
    box-shadow: 3px 3px #000000;
  }
  @media only screen and (max-width: 1000px) {
    box-shadow: 0px 0px;
  }
`;

const NavButton = styled.img`
  width: 40%;
  margin-left: 20%;
  cursor: pointer;
  display: block;
  border: 6px solid #000000;
  box-shadow: 5px 5px #000000;
  padding: 10px;
  border-radius: 30px;
  transition: all 0.5s ease;
  :hover {
    background: #CCCCCC;
    transform: scale(1.2);
    opacity: 0.45;
  }
  @media only screen and (max-width: 1200px) {
    box-shadow: 3px 3px #000000;
  }
  @media only screen and (max-width: 1000px) {
    box-shadow: 0px 0px;
  }
`;

const NavHover = styled.h1`
  color: #000000;
  font-size: 22px;
  @media only screen and (max-width: 2000px) {
    font-size: 25px;
  }
  @media only screen and (max-width: 1600px) {
    font-size: 20px;
  }
  @media only screen and (max-width: 1200px) {
    font-size: 19px;
  }
  @media only screen and (max-width: 1024px) {
    font-size: 16px;
  }
  @media only screen and (max-width: 800px) {
    white-space: nowrap;
    font-size: 17px;
  }
`;

const Header = ({ siteTitle }) => (
  <Background>
  <DesktopHeader>
  <br/>
  <NavBar/>
      <br/><br/><br/><br/><br/><br/><br/>
      <Link to="/">
        <Logo src="/logo.png" />
      </Link>
      <Title>we're creating a utopia.</Title>
      <SubTitle>welcome to plöt.</SubTitle>
      <Link to="/form">
      <WaitlistButton>join the waitlist</WaitlistButton></Link>
      <Render src="/render.png" />
      </DesktopHeader>

  <MobileHeader>
    <br/>
    <Row>
    <Col sm={1}/>
    <Col sm={2}>
    <Link to="/">
      <MobileLogo src="/logo.png" />
    </Link>
    </Col>
    <Col sm={1.5}/>
    <Col sm={2}>
    <Link to="/home">
      <div class="overall">
        <MobileSubLogo src="/house.png"/>
          <div class="mobileoverlay">
            <MobileSubHoverText>plöt │ home</MobileSubHoverText>
          </div>
      </div>
    </Link>
    </Col>
    <Col sm={2}>
    <Link to="/school">
      <div class="overall">
        <MobileSubLogo src="/school.png"/>
          <div class="mobileoverlay">
            <MobileSubHoverText>plöt │ school</MobileSubHoverText>
          </div>
      </div>
    </Link>
    </Col>
    <Col sm={2}>
    <Link to="/store">
      <div class="overall">
        <MobileSubLogo src="/store.png"/>
          <div class="mobileoverlay">
            <MobileSubHoverText>plöt │ store</MobileSubHoverText>
          </div>
      </div>
    </Link>
    </Col>
  </Row>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <br/><br/><br/>
    <MobileRender src="/render.png" />
    <MobileTitle>welcome to plöt.</MobileTitle>
    <Link to="/form">
    <MobileWaitlistButton>join the waitlist</MobileWaitlistButton></Link>
  </MobileHeader>

  </Background>
);

export default Header;
