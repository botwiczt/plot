import React, { Component } from "react";
import { Link } from "gatsby";
import { Row, Col} from "react-grid-system";
import styled from "styled-components";
import { slide as Menu } from 'react-burger-menu';
import './navbar.css';

// WE'RE LOOKING GOOD DOWN TO 600PX, THEN THINGS GO BAD

const Background = styled.body`
  
`;

const DesktopHeader = styled.body`
  @media (max-width: 1200px) {
   display:none;
  }
`;

const MidsizeHeader = styled.body`
  @media (min-width: 1200px) {
    display:none;
  }

  @media (max-width: 1200px) {
    display:initial;
  }

  @media (max-width: 768px){
    display:none;
  }
`;

const MobileHeader = styled.header`
  @media (min-width: 768px) {
   display:none;
  }
  @media (max-width: 768px) {
   display:initial;
  }
`;

class NavBar extends Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <Menu width={ '100%' } noOverlay right >
        <Link id="home" className="menu-item" to="/home">
          <MobileNavButton src="/house.png"/>
        </Link>
        <MobileNavText>plöt │ home</MobileNavText>
        <Link id="home" className="menu-item" to="/school">
          <MobileNavButton2 src="/school.png"/>
        </Link>
        <MobileNavText>plöt │ school</MobileNavText>
        <Link id="home" className="menu-item" to="/store">
            <MobileNavButton3 src="/store.png"/>
        </Link>
        <MobileNavText>plöt │ store</MobileNavText>
      </Menu>
    );
  }
}

const Logo = styled.img`
  display: block;
  margin-left: 15%;
  margin-top: 5%;
  width: 100%;
`;

const Render = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  margin-top: -20%;
  width: 80%;
  transition: all 0.5s ease;
  :hover {
    transform: scale(1.1) rotate(5deg);
  }
`;

const MidRender = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  transition: all 0.5s ease;
  :hover {
    transform: scale(1.1) rotate(5deg);
  }
  @media only screen and (max-width: 1200px) {
    width: 35%;
  }
  @media only screen and (max-width: 1000px) {
    width: 40%;
  }
  @media only screen and (max-width: 860px) {
    width: 45%;
  }
  @media only screen and (max-width: 800px) {
    width: 50%;
  }
`;

const MobileRender = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 55%;
  transition: all 0.5s ease;
  :hover {
    transform: scale(1.1) rotate(5deg);
  }
`;

const MobileLogo = styled.img`
  display: block;
  width: 160%;
  margin-left: 36px;
  @media only screen and (max-width: 576px) {
    width: 20%;
  }
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
  font-size: 46px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  white-space: nowrap;
  @media only screen and (max-width: 1350px) {
    font-size: 43px;
    text-align: center;
  }
`;

const SubTitle = styled.h1`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: -3.2%;
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
`;

const MidTitle = styled.h1`
  font-size: 43px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: -2%;
  white-space: nowrap;
`;

const MidSubTitle = styled.h1`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: -3.2%;
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
`;

const MidWaitlistButton = styled.button`
  text-align: center;
  display: block;
  margin-top: -2%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
  white-space: nowrap;
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
    transform: scale(1.15) translateX(-45%);
  }
`;

const WaitlistButton = styled.button`
  text-align: center;
  display: block;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
  white-space: nowrap;
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
    transform: scale(1.15) translateX(-45%);
  }
  @media only screen and (max-width: 672px) {
      border-radius: 3px;
    }
`;

const MobileWaitlistButton = styled.button`
  text-align: center;
  display: block;
  margin-top: -2%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
  white-space: nowrap;
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
    transform: scale(1.15) translateX(-45%);
  }
`;

//ugly workaround to move buttons closer; figure out how to wrap

const NavButton1 = styled.img`
  width: 40%;
  margin-left: 100%;
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
  margin-left: 62%;
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
display: table;
position: absolute;
text-align: center;
  width: 7vw;
  cursor: pointer;
  border: 6px solid #000000;
  box-shadow: 5px 5px #000000;
  padding: 10px;
  border-radius: 30px;
  transition: all 0.5s ease;
  :hover {
    background: #8ECBC8;
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
  display: table;
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

const MobileNavText = styled.h1`
  color: #000000;
  font-size: 22px;
  text-align: center;
  left-margin: auto;
  right-margin: auto;
  margin-top: 28%;
  margin-bottom: 30%;
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

const MobileNavButton3 = styled.img`
display: table;
position: absolute;
margin-left: 35%;
margin-top: -20%;
width: 15vw;
cursor: pointer;
border: 6px solid #000000;
box-shadow: 5px 5px #000000;
padding: 10px;
border-radius: 30px;
transition: all 0.5s ease;
:hover {
  background: #8ECBC8;
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

const MobileNavButton2 = styled.img`
display: table;
position: absolute;
margin-left: 35%;
margin-top: -20%;
width: 15vw;
cursor: pointer;
border: 6px solid #000000;
box-shadow: 5px 5px #000000;
padding: 10px;
border-radius: 30px;
transition: all 0.5s ease;
:hover {
  background: #8ECBC8;
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

const MobileNavButton = styled.img`
  display: table;
  position: absolute;
  margin-left: 35%;
  margin-top: 5%;
  width: 15vw;
  cursor: pointer;
  border: 6px solid #000000;
  box-shadow: 5px 5px #000000;
  padding: 10px;
  border-radius: 30px;
  transition: all 0.5s ease;
  :hover {
    background: #8ECBC8;
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

const MobileTitle = styled.h1`
  font-size: 43px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: -2%;
  white-space: nowrap;
  @media only screen and (max-width: 600px) {
    font-size: 40px;
  }
`;

const MobileSubTitle = styled.h1`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: -3.2%;
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
`;

const Header = ({ siteTitle }) => (
  <Background>
  <DesktopHeader>
  <br/>
      <Row>
        <Col sm={2}>
        <Link to="/">
          <Logo src="/logo.png" />
        </Link>
        </Col>
        <Col sm={5.15}/>
        <Col sm={1.583}>
          <Link to="/home">
          <div class="navhover">
            <NavButton src="/house.png"/>
            <div class="navoverlay">
              <NavHover>plöt │ home</NavHover>
            </div>
          </div>
          </Link>
        </Col>
        <Col sm={1.583}>
          <Link to="/school">
          <div class="navhover">
            <NavButton src="/school.png"/>
            <div class="navoverlay">
              <NavHover>plöt │ school</NavHover>
            </div>
          </div>
          </Link>
        </Col>
        <Col sm={1.583}>
          <Link to="/store">
            <div class="navhover">
              <NavButton src="/store.png"/>
              <div class="navoverlay">
                <NavHover>plöt │ store</NavHover>
              </div>
            </div>
          </Link>
        </Col>
        <Col sm={0.1}/>
      </Row>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <Row>
      <Col sm={1}/>
      <Col sm={5}>
      <Title>we're creating a utopia.</Title>
      <SubTitle>welcome to plöt.</SubTitle>
      <Link to="/form">
      <WaitlistButton>join the waitlist →</WaitlistButton></Link>
      </Col>
      <Col sm={6}>
      <Render src="/render.png" />
      </Col>
      </Row>



      </DesktopHeader>

      <MidsizeHeader>
      <br/>
          <Row>
            <Col sm={2}>
            <Link to="/">
              <Logo src="/logo.png" />
            </Link>
            </Col>
            <Col sm={5.2}/>
            <Col sm={1.5}>
              <Link to="/home">
              <div class="navhover">
                <NavButton src="/house.png"/>
                <div class="navoverlay">
                  <NavHover>plöt │ home</NavHover>
                </div>
              </div>
              </Link>
            </Col>
            <Col sm={1.5}>
              <Link to="/school">
              <div class="navhover">
                <NavButton src="/school.png"/>
                <div class="navoverlay">
                  <NavHover>plöt │ school</NavHover>
                </div>
              </div>
              </Link>
            </Col>
            <Col sm={1.5}>
              <Link to="/store">
                <div class="navhover">
                  <NavButton src="/store.png"/>
                  <div class="navoverlay">
                    <NavHover>plöt │ store</NavHover>
                  </div>
                </div>
              </Link>
            </Col>
            <Col sm={0.3}/>
          </Row>
          <MidRender src="/render.png" />
          <MidTitle>we're creating a utopia.</MidTitle>
          <MidSubTitle>welcome to plöt.</MidSubTitle>
          <Link to="/form">
          <MidWaitlistButton>join the waitlist →</MidWaitlistButton></Link>
      </MidsizeHeader>

  <MobileHeader>
    <br/>
    <Row>
    <Col sm={2}>
    <Link to="/">
      <MobileLogo src="/logo.png" />
    </Link>
    </Col>
    <Col sm={8}/>
    <Col sm={2}>
    <NavBar/>
    </Col>
    </Row>
    <MobileRender src="/render.png" />
    <MobileTitle>we're creating a utopia.</MobileTitle>
    <MobileSubTitle>welcome to plöt.</MobileSubTitle>
    <Link to="/form">
    <MobileWaitlistButton>join the waitlist →</MobileWaitlistButton></Link>
  </MobileHeader>

  </Background>
);

export default Header;
