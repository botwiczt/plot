import { Link } from "gatsby";
import React from "react";
import Particles from "react-particles-js";
import styled from "styled-components";
import { Container} from "react-grid-system";
import "./layout.css"

const Background = styled.header`
  height: 100vh;
  margin: 0;
  padding: 0;
  color: #215f00;
  margin: 0;
  background: linear-gradient(to right, #215f00, #e4e4d9);
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

const ParticleContainer = styled.div`
  position: absolute;
`;

const Logo = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 58%;
  @media only screen and (max-width: 767px) {
    position: auto;
    width: 65%;
  }
  @media only screen and (min-width: 1200px) {
    position: auto;
    width: 50%;
  }
`;

{/*content:url("/logosmall.png");*/}

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

const Tagline = styled.h1`
  text-align: center;
  max-width: 900px;
  font-size: 3rem;
  margin-left: auto;
  margin-right: auto;
  color: #215f00;
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

const SubTagline = styled.h1`
  text-align: center;
  max-width: 700px;
  font-size: 24px;
  margin-left: auto;
  margin-right: auto;
  color: #215f00;
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
  width: 200px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0px;
  padding: 10px;
  border: 5px solid #215f00;
  border-radius: 10px;
  font-size: 40px;
  color: #215f00;
  transition: all 300ms ease;
  &:hover {
    background: #98ccb0;
  }
  @media only screen and (max-width: 1024px) {
    font-size: 24px;
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

const ButtonSpacerContainer = styled.div`
@media only screen and (max-width: 1024px) {
  ;
}
`;

const Header = ({ siteTitle }) => (
  <Background>
  <ParticleContainer>
  <Particles
    height="100vh"
    width="100vw"
    params={{
      particles: {
        number: {
          value: 300,
        },
        size: {
          value: 5,
          random: true,
          anim: {
            speed: 5,
            size_min: 0.3
          }
        },
        line_linked: {
          enable: false
        },
        move: {
          random: true,
          speed: 8,
          direction: "bottom",
          out_mode: "out"
        }
      },
    }}
  /></ParticleContainer><br/><br/><br/>
    <Container><Link
      to="/"
      style={{
        color: `white`,
        textDecoration: `none`
      }}
    >
      <Logo src="/logo.png" />
    </Link></Container>
    <Tagline> The Future of Living </Tagline>
    <SubTagline>Join the community that's right for you.</SubTagline>
    <br></br>
      <Date>Under Construction</Date>
    {/*<Container>
      <a href="" target="_blank" rel="noreferrer">

      </a>
    </Container><Register></Register>
      <ButtonSpacerContainer><br></br></ButtonSpacerContainer>
      <footer>
        © 2020, plot corporation
      </footer>*/}
  </Background>
);

export default Header;
