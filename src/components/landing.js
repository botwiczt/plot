import React from "react";
import { Row, Col } from "react-grid-system";
import Fade from 'react-reveal/Fade'
import styled from "styled-components";
import "./layout.css"
import { Link } from "gatsby";

const DesktopLanding = styled.header`
  @media (max-width: 575px) {
   display: none;
  }
`;

const MobileLanding= styled.header`
  @media (min-width: 575px) {
   display: none;
  }
  @media (max-width: 575px) {
   display: initial;
  }
`;

const LargeTitle = styled.h2`
  margin: 0;
  padding: 0;
  font-size: ${props => props.size};
  color: #333;
  @media only screen and (max-width: 1024px) {
      font-size: 25px;
    }
`;

const Description = styled.p`
  font-size: ${props => props.size};
  font-weight: 400;
  color: #333;
  padding: 0;
  line-height: 1.5;
  color: ${props => props.color};
  @media only screen and (max-width: 1024px) {
      font-size: 20px;
    }
`;

const CardText = styled.p`
  font-size: ${props => props.size};
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  @media only screen and (max-width: 1024px) {
      font-size: 18px;
    }
  @media only screen and (max-width: 800px) {
        font-size: 16px;
    }
`;

const Card = styled.div`
  max-width: 400px;
  text-align: center;
  @media only screen and (max-width: 1024px) {
    height: 330px;
  }
`;

const MobileCard = styled.div`
  max-width: 400px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

const Img = styled.img`
  display: block;
  width: 100%;
`;

const ValuesImg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
`;
const ValuesArrowImg = styled.img`
  display: block;
  margin-top: 120%;
  width: 80%;
  transform: translate(+20px);
  cursor: pointer;
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

//a little jittery due to translate overlap
const MobileValuesArrowImg = styled.img`
  display: table;
  position: absolute;
  left: 44%;
  width: 10%;
  transform: translateX(-50%);
  margin-left: auto;
  margin-right: auto;
  transform: translate(+20px);
  cursor: pointer;
  animation: 1s Zoom linear infinite,
  1s Always ease alternate infinite;
  }
`;

const ValuesCall = styled.h1`
  color: ${props => props.color};
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  font-size: 35px;
  @media only screen and (max-width: 1024px) {
      font-size: 25px;
    }
`;

const MobileValuesCall = styled.h1`
  color: ${props => props.color};
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  font-size: 45px;
`;

const MobileImg = styled.img`
  display: block;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`;

const MobileValuesImg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 60%;
`;

const LineImg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 30%;
  @media only screen and (max-width: 575px) {
    width: 60%;
  }
`;

const Site = styled.div`
  max-width: 75em;
  margin: 0 auto;
`;

const CardSpacerContainer = styled.div`
@media only screen and (max-width: 768px) {
  ;
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
      100% { transform: scale(1.2);}
  }
  @media only screen and (max-width: 768px) {
    left: 44%;
    width: 12%;
  }
`;

const FooterImg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 3%;
  @media only screen and (max-width: 768px) {
    width: 6%;
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
      100% { transform: scale(1.2);}
  }
  @media only screen and (max-width: 768px) {
    left: 44%;
    width: 12%;
  }
`;

{/*const Profile = styled.img`
  margin-left: auto;
  margin-right: auto;
  height: 125px;
  width: 130px;
  display: block;
  box-shadow: rgba(0, 0, 0, 0.125) 0px 8px 16px;
  border-radius: 50%;
  margin-bottom: 20px;
`;*/}


const Landing = () => (
  <div>
  <div className="landing">
  <br/><br/>
  <DesktopLanding>
    <Site>
      <div id="down">
      <Fade>
        <LargeTitle size="36px" className="center">
        welcome to plöt.
        </LargeTitle>
        <Description color="#333" size="28px" className="center">
        representing the future of living. eco-utilitarian infrastructure melded with community-focused values to seed the first successful utopia.{" "}
          <LineImg src="/line.png" />
        </Description>
      </Fade>
      </div>
    <br/><br/>
      <Fade>
      <Row>
        <Col sm={6}>
          <CardSpacerContainer><br/><br/><br/></CardSpacerContainer>
            <Card bg="#F9BEBE;">
              <LargeTitle size="24px">
                what is a plöt?
              </LargeTitle>
              <CardText size="18px">
                a plöt is a largely self-contained community of <div class="dunbar">~300 individuals,<div class="dunbarinfo"><b>why 300?</b><br/>this represents the upper end of<div id="linkstyle"><a href="https://en.wikipedia.org/wiki/Dunbar%27s_number" target="_blank" rel="noreferrer">Dunbar's number.</a></div></div></div> all living together in a shared space designed for <b>sustainability</b>.
                <br/><br/>
                each part of everyday life has been refined for symbiosis with nature, from the composting of nearly all trash to freshly crafted plant-based meals.
              </CardText>
            </Card>
        </Col>
        <Col sm={6}>
          <Img src="/naturehome.svg"/>
        </Col>
      </Row>
      </Fade>
    <br/>
      <Fade>
      <Row>
        <Col sm={6}>
          <Img src="/movein.svg"/>
        </Col>
        <Col sm={6}>
          <CardSpacerContainer><br/><br/><br/></CardSpacerContainer>
            <Card bg="#F9BEBE;">
              <LargeTitle size="24px">
                how does it work?
              </LargeTitle>
              <CardText size="18px">
                you exchange your old home or pay <b>$100,000</b> and move into your brand new community.
                <br/><br/>
                in the first week, we guide you through the functioning of our community and our values.
                <br/><br/>we're currently in the process of designing our first plöt in the state of <b> maine</b>.
              </CardText>
            </Card>
        </Col>
      </Row>
      </Fade>
      <Fade>
      <Row>
        <Col sm={2}/>
        <Col sm={6}>
          <ValuesCall color="#333">
            our values.
          </ValuesCall>
          <ValuesImg src="/values.svg"/>
        </Col>
        <Col sm={2}>
          <Link to="/values">
            <ValuesArrowImg src="/rightarrow.svg"/>
          </Link>
        </Col>
        <Col sm={2}/>
      </Row>
      </Fade>
    </Site>
  <br/>
  <a href="#down" aria-label="scroll down"><ArrowImage src="/downarrow.png"/></a>
  </DesktopLanding>

  <MobileLanding>
  <Site>
  <div id="mobiledown">
    <Fade>
    <Row>
      <Col sm={12}>
        <LargeTitle size="36px" className="center">
          welcome to plöt.
        </LargeTitle>
      <Description color="#333" size="28px" className="center">
        representing the future of living. eco-utilitarian infrastructure melded with community-focused values to seed the first successful utopia.{" "}
        <LineImg src="/line.png" />
      </Description>
    </Col>
  </Row></Fade>
  </div>
  <Fade><br/>
    <MobileCard bg="#F9BEBE;">
      <LargeTitle>
        what is a plöt?
      </LargeTitle>
      <CardText color="#333">
        a plöt is a largely self-contained community of <br/><div class="dunbar">~300 individuals,<div class="dunbarinfo"><b>why 300?</b><br/>this represents the upper end of<div id="linkstyle"><a href="https://en.wikipedia.org/wiki/Dunbar%27s_number" target="_blank" rel="noreferrer">Dunbar's number.</a></div></div></div> all living together in a shared space designed for <b>sustainability</b>.
        <br/><br/>
        each part of everyday life has been refined for symbiosis with nature, from the composting of nearly all trash to freshly crafted plant-based meals.
      </CardText><MobileImg src="/naturehome.svg"/>
    </MobileCard>
      <br/></Fade>
    <Fade><MobileCard>
      <LargeTitle>
          how does it work?
      </LargeTitle>
      <CardText color="#333">
              you exchange your old home or pay <b>$100,000</b> and move into your brand new community.
              <br/>
              <MobileImg src="/movein.svg" />
              in the first week, we guide you through the functioning of our community and our values.
              <br/><br/>we're currently in the process of designing our first plöt in the state of <b> maine</b>.
      </CardText>
    </MobileCard></Fade>

    <Fade><MobileValuesCall color="#333">
    our values.
    </MobileValuesCall>
    <MobileValuesImg src="/values.svg" />
    <Link to="/values">
    <MobileValuesArrowImg src="/rightarrow.svg" />
    </Link>
    <br/><br/><br/></Fade>
     <a href="#mobiledown" aria-label="scroll down"><ArrowImage src="/downarrow.png"/></a>
  </Site>
  <a href="#mobiledown" aria-label="scroll down"><ArrowImage src="/downarrow.png"/></a>
  </MobileLanding>

      {/*<LargeTitle color="#333" className="center" size="48px">
        LOCATION
      </LargeTitle>
      <Description color="#333" className="center" size="28px">
        <b>MONTH XX-XX, YEAR</b>
        <br />
        LOCATION NAME <br />
        ADDRESS
        <br /> <br />
      </Description>
      <LargeTitle color="#333" className="center" size="48px">
        Team
      </LargeTitle>
      <br /> <br />
      <Row>
        <Col sm={3}>
          <Profile src="/image.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b>Member 1</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Position
          </Description>
        </Col>
        <Col sm={3}>
          <Profile src="/image.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b>Member 2</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Position
          </Description>
        </Col>
        <Col sm={3}>
          <Profile src="/image.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b>Member 3</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Position
          </Description>
        </Col>
        <Col sm={3}>
          <Profile src="/image.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b>Member 4</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Position
          </Description>
          <br />
        </Col>
      </Row>
      <LargeTitle color="#333" className="center" size="48px">
        FAQ
      </LargeTitle>
      <br /> <br />
      <Row>
        <Col sm={4}>
          <LargeTitle className="center" color="#333" size="24px">
            QUESTION
          </LargeTitle>
          <Description className="center" color="#333" size="16px">
            {" "}
            ANSWER
          </Description>
        </Col>
        <Col sm={4}>
          <LargeTitle className="center" color="#333" size="24px">
            QUESTION{" "}
          </LargeTitle>
          <Description className="center" color="#333" size="16px">
            {" "}
            ANSWER
          </Description>
        </Col>
        <Col sm={4}>
          <LargeTitle className="center" color="#333" size="24px">
            QUESTION
          </LargeTitle>
          <Description className="center" color="#333" size="16px">
            {" "}
            ANSWER
          </Description>
        </Col>
      </Row>
      <Row>
        <Col sm={4}>
          <LargeTitle className="center" color="#333" size="24px">
            QUESTION
          </LargeTitle>
          <Description className="center" color="#333" size="16px">
            {" "}
            ANSWER
          </Description>
        </Col>
        <Col sm={4}>
          <LargeTitle className="center" color="#333" size="24px">
            QUESTION
          </LargeTitle>
          <Description className="center" color="#333" size="16px">
            {" "}
            ANSWER
          </Description>
        </Col>
        <Col sm={4}>
          <LargeTitle className="center" color="#333" size="24px">
            I have another question!
          </LargeTitle>
          <Description className="center" color="#333" size="16px">
            {" "}
            Reach out to us at <a href="mailto:name@example.com">name@example.com.
            </a>{" "}
            <br />
          </Description>
        </Col>
      </Row>
      <Row>
        <Col sm={2} />
        <Col sm={8}>
          <div className="schedule">
            <item>
              <span className="right">STEP #1</span> STEP
            </item>
            <item>
              <span className="right">STEP #2</span> <b>ALTERNATIVE FORMAT</b>: STEP{" "}
            </item>
          </div>
        </Col>
        <Col sm={2} />
      </Row>
      <br/>
      <br/>
      <LargeTitle className="center" color="#333" size="24px">
        IDEA: INCLUDE COMPANIES THAT WE PARTNER WITH IN SLIDEACROSS LOGO PRESENTATION.
      </LargeTitle>
      <Row><Col sm={12}><Description className="center" size="20px">
        {" "}
        For our  prospectus, please click <Link to = "/.pdf" style={{
          color: `black`,
          textDecoration: `underline`
        }}>here</Link>.
        {" "}
      </Description></Col></Row>
      <br /> <br />*/}
    </div>
    <footer>
    <Row>
    <Col sm={3}>
    {/*<a href="https://twitter.com/">
      <img height="52px" src="/twitter.png" alt="twitter icon."/>
    </a>*/}
    </Col>
    <Col sm={3}>
    {/*<a href="https://instagram.com/">
      <img height="50px" src="/instagram.png" alt="instagram icon."/>
    </a>*/}
    </Col>
    <Col sm={3}>
    </Col>
    <Col sm={3}>
    {/*
      <FooterText className="right">
        <Link to ="/terms" style={{
          color: `black`,
          textDecoration: `underline`
        }}> terms </Link>
      </FooterText>
      <FooterText color="#333" className="right" >
      © 2020 <a> plot co.</a>
    </FooterText>*/}
    </Col>
    </Row>
      <Link to ="/privacy">
      <FooterImg className="right" src="/lock.svg" />
      </Link>
    </footer>
    </div>
);
export default Landing;
