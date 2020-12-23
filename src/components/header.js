import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Container} from "react-grid-system";
import { Row, Col } from "react-grid-system";
import "./layout.css"

const Background = styled.header`
  height: 100vh;
  color: #215f00;
  background: linear-gradient(to right, #FFFFFF);
  {/*@media only screen and (max-width: 1280px) {
  height: 105vh;
  }
  @media only screen and (max-width: 1024px) {
  height: 78vh;
  }
  @media only screen and (max-width: 768px) {
    height: 75vh;
  }
  @media only screen and (max-width: 540px) {
  height: 80vh;
  }
  @media only screen and (max-width: 414px) {
  height: 73vh;
  }
  @media only screen and (max-width: 411px) {
  height: 72vh;
  }
  @media only screen and (max-width: 400px) {
  height: 90vh;
  }
  @media only screen and (max-width: 375px) {
  height: 83vh;
  }
  @media only screen and (max-width: 320px) {
  height: 125vh;
  }
  @media only screen and (max-width: 280px) {
  height: 92vh;
  }*/}
`;

const DesktopHeader = styled.header`
  @media (max-width: 768px) {
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

const SmallLogo = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: auto;
  max-width: 40%;
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

const MobileLogo = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  position: auto;
  width: 90%;
  @media only screen and (max-width: 575px) {
    width: 40%;
`;

const Logo = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
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

const Img = styled.img`
  display:block;
  max-width:100px;
  min-width:60px;
  position:fixed;
  right:50px;
  top:0;
  width:7%;
  z-index:10000;
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

// BIG ISSUES HERE WITH RENDERING OF TYPING ON MOBILE SCREENS...CURSOR GOES OVER
const MobileTitle = styled.h1`
  text-align: left;
  max-width: 900px;
  font-size: 3rem;
  margin-left: 3%;
  color: #000000;
  border-right: solid 3px #000000;
  white-space: nowrap;
  overflow: hidden;
  animation: animated-text 3s steps(29) 1s 1 normal both,
             animated-cursor 600ms steps(29) infinite;
  {/*@keyframes animated-text{
  from{width: 0;}
  to{width: 390px;}
}*/}
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

const SubText = styled.h1`
  text-align: center;
  max-width: 900px;
  font-size: 3rem;
  margin-left: auto;
  margin-right: auto;
  color: #000000;
`;

const MobileSubHoverText = styled.h1`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  @media only screen and (max-width: 768px) {
    font-size: 17px;
  }
`;

const SubHoverText = styled.h1`
  color: #000000;
  font-size: 24px;
  position: absolute;
  top: 100%;
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

const SubTagline = styled.h1`
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
    padding: 14px;
  }
`;

const Date = styled.h1`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  color: #215f00;
  @media only screen and (max-width: 1024px) {
    font-size: 25px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 20px;
  }
  animation: 1s Zoom linear infinite,
  2s Always ease alternate infinite;
  }
  @keyframes Zoom {
      100% { background-position: 100vw 0px; }
  }

  @keyframes Always {
      100% { transform: scale(1.15);}
  }
`;

const Register = styled.h1`
  display: flex;
  justify-content: center;
  width: 250px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0px;
  padding: 10px;
  border: 10px solid #215f00;
  border-radius: 40px;
  font-size: 40px;
  color: #215f00;
  transition: all 300ms ease;
  &:hover {
    background: #98ccb0;
    transform: scale(1.2);
  }
  @media only screen and (max-width: 1024px) {
    font-size: 24px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 20px;
  }



`;

const ButtonSpacerContainer = styled.div`
@media only screen and (max-width: 1024px) {
  ;
}
`;

const Header = ({ siteTitle }) => (
  <Background>
  <DesktopHeader>
  <br/><br/><br/><br/><br/>
    <Row>
      <Col sm={4}/>
      <Col sm={4}>
      <a href="/home" rel="noreferrer"><div class="overall">
      <SmallLogo src="/house.png"/>
      <div class="overlay"><a href="/home" target="_blank" rel="noreferrer"/><SubHoverText>plöt │ home</SubHoverText></div>
      </div></a></Col>
      <Col sm={4}/>
    </Row>
    <br/><br/><br/><br/>
    <Row>
      <Col sm={4}>
      <a href="/school" rel="noreferrer"><div class="overall">
      <SmallLogo src="/school.png"/>
      <div class="overlay"><SubHoverText>plöt │ school</SubHoverText></div>
      </div></a>
      </Col>
      <Col sm={4}>
      <Logo src="/logo.png" />{/*<Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`
        }}
      >
      </Link>*/}
      </Col>
      <Col sm={4}>
      <a href="/store" rel="noreferrer"><div class="overall">
      <SmallLogo src="/store.png"/>
      <div class="overlay"><SubHoverText>plöt │ store</SubHoverText></div>
      </div></a>
      </Col>
    </Row>
    <br/><br/>
      <Title>plöt: the future of living.</Title>
      <SubTagline>{/*Join the community that's right for you. */}under construction.</SubTagline>
      <ArrowImage src="/downarrow.png"/>
  </DesktopHeader>
  <MobileHeader>
      <div class="reference" tabindex="0">
        <div class="hamburger-menu">
          <div class="bar top"></div>
          <div class="bar bottom"></div>
        </div>
        <div class="popout-menu"><MobileSubHoverText>plöt │ home</MobileSubHoverText></div><br/>
        <div class="popout-menu"><MobileSubHoverText>plöt │ school</MobileSubHoverText></div><br/>
        <div class="popout-menu"><MobileSubHoverText>plöt │ store</MobileSubHoverText></div>
      </div>
  <br/><br/>
    <Row>
      <Col sm={4}/>
      <Col sm={4}>
      <MobileLogo src="/logo.png" />{/*<Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`
        }}
      >
      </Link>*/}
      </Col>
    <Col sm={4}/>
    </Row>
    <br/><br/>
    <Row>
      <Col sm={4}/>
      <Col sm={4}>
      <MobileTitle>plöt: the future of living.</MobileTitle>
      </Col>
    <Col sm={4}/>
    </Row>

      <SubTagline>{/*Join the community that's right for you. */}under construction.</SubTagline>
      <ArrowImage src="/downarrow.png"/>
  </MobileHeader>
    {/*<Container>
      <a href="" target="_blank" rel="noreferrer">
      </a>
    </Container>
    <Register></Register>
      <ButtonSpacerContainer><br></br></ButtonSpacerContainer>
      <footer>
        © 2020, plot corporation
      </footer>*/}
  </Background>
);

export default Header;
