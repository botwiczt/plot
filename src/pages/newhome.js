import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components";
import { Container, Row, Col } from "react-grid-system";

const DesktopHome = styled.header`
  @media (max-width: 575px) {
   display:none;
  }
`;

const CardShrink = styled.div`
  margin: 4%;
`;

//768px was original mobileheader value.
const MobileHome = styled.header`
  @media (min-width: 575px) {
   display:none;
  }
  @media (max-width: 575px) {
   display:initial;
  }
`;

const Art = styled.img`
  display: block;
  margin-left: -30%;
  margin-top: -20%;
  width: 150%;
  @media only screen and (max-width: 575px) {
    position: auto;
    width: 40%;
  @media only screen and (max-width: 100px) {
  content:url("/logosmall.png");
    position: auto;
    width: 65%;
  }

`;

const MobileArt = styled.img`
  display: block;
  margin: auto;
  margin-top: 50%;
  width: 100%;
`;

const Logo = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;

const Header = styled.h1`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  font-size: 50px;
  color: #000000;
  @media only screen and (max-width: 2000px) {
    font-size: 75px;
  }
  @media only screen and (max-width: 1600px) {
    font-size: 60px;
  }
  @media only screen and (max-width: 1200px) {
    font-size: 54px;
  }
  @media only screen and (max-width: 1024px) {
    font-size: 40px;
  }
  @media only screen and (max-width: 860px) {
    font-size: 30px;
  }
  @media only screen and (max-width: 800px) {
    font-size: 25px;
  }
`;

const Title = styled.h1`
  text-align: left;
  margin-left: auto;
  margin-right: auto;
  font-size: 50px;
  color: #000000;
  @media only screen and (max-width: 2000px) {
    font-size: 75px;
  }
  @media only screen and (max-width: 1600px) {
    font-size: 60px;
  }
  @media only screen and (max-width: 1200px) {
    font-size: 54px;
  }
  @media only screen and (max-width: 1024px) {
    font-size: 40px;
  }
  @media only screen and (max-width: 860px) {
    font-size: 30px;
  }
  @media only screen and (max-width: 800px) {
    font-size: 25px;
  }
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

const ScheduleButton = styled.h1`
  display: table;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 6px;
  padding-bottom: 6px;
  border: 5px solid;
  border-radius: 10px;
  font-size: 30px;
  color: #000000;
  transition: all 300ms ease;
  &:hover {
    background: #cccccc;
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
`;



{/*const Description = styled.p`
  font-size: ${props => props.size};
  font-weight: 400;
  color: #333;
  padding: 0;
  line-height: 1.3;
  color: ${props => props.color};
`;

const Counter = styled.h1`
  letter-spacing: 2px;
  text-align: center;
  text-transform: uppercase;
    }
`;

const Logo = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
`;

const BackButton = styled.img`
  display: block;
  width: 10%;
  margin-left: auto;
  margin-right: auto;
  transform: translate(-10px);
  cursor: pointer;
  animation: 1s Zoom linear infinite,
  1s Always ease alternate infinite;
  }
`;*/}

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

const CardSpacerContainer = styled.div`
@media only screen and (max-width: 768px) {
  ;
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


const plotHome = () => (
  <Layout>
    <SEO title="plöt home" keywords={[`plot`, `home`, `house`]}/>
    <DesktopHome>
    <Link to="/">
    <BackButton src="/leftarrow.svg" /></Link>
    <br/>
      <Logo src="/plothome.png"/>
      <br/><br/><br/>
    <Row>
      <Col sm={1.5}/>
      <Col sm={4}>
      <Title>
      3-D printed. sustainable. futuristic.
      </Title>
      </Col>
      <Col sm={1}/>
      <Col sm={4}>
          <Art src="/forest.svg" />
      </Col>
      <Col sm={1.5}/>
    </Row>
<CardShrink>
    <Row>
      <Col sm={8}>
        <CardSpacerContainer><br/><br/><br/></CardSpacerContainer>
          <Card bg="#F9BEBE;">
            <LargeTitle size="24px">
              the homes
            </LargeTitle>
            <CardText size="18px">
              1. cork insulation
              <br/>
              2. self-cleaning & self-healing concrete
              <br/>
              3.
              <br/>
            </CardText>
          </Card>
      </Col>
      <Col sm={4}>
        <Img src="/naturehome.svg"/>
      </Col>
    </Row>

    </CardShrink>
    </DesktopHome>


    <MobileHome>
    <Link to="/">
    <MobileBackButton src="/leftarrow.svg" /></Link>
    <MobileArt src="/houseart.png"/>
    <Call color="#333" className="center" size="30px">
      we're 3D-printing recycled, optimized homes for sustainable life...
    </Call>
    </MobileHome>
          {/*<div><Counter>
            <Countdown timeTillDate="10 11 2019, 2:00 pm" timeFormat="MM DD YYYY, h:mm a" />
          </Counter>
        </div>
      <Container>
          <Call color="#333" className="center" size="40px">
            Sunday Schedule
          </Call>
          <Row>
          <Col>
          <div className="schedule">
              <item>
                <span className="right">11 AM</span> <b>Reminder</b>: Prepare Presentation
              </item>
              <item>
              <span className="right">12 PM</span>
              <span classname="right"> <a href="https://us02web.zoom.us/j/82866365418?pwd=eFpOZllpNTBUQSttcHcwaTNWaEMwdz09" target="_blank" rel="noreferrer">
              <ScheduleButton><b>Workshop</b>: Pitching Your Product</ScheduleButton></a></span>
              </item>
              <item>
                <span className="right">1 PM</span> <b>Reminder</b>: Submissions Due Soon
              </item>
              <item>
                <span className="right">2 PM</span> Submissions Due
              </item>
              <item>
                <span className="right">2 PM</span> <b>Game</b>: Codenames <img height="25px" src="/discord.svg" alt="discord icon."/>
              </item>
              <item>
                <span className="right">2:30 PM</span> MEME WAR <img height="25px" src="/discord.svg" alt="discord icon."/>
              </item>
              <item>
                <span className="right">3 PM</span> <b>Game</b>: Minecraft Village Defense <img height="25px" src="/discord.svg" alt="discord icon."/>
              </item>
              <item>
                <span className="right">2-5 PM</span> Judging
              </item>
              <item>
                <span className="right">5-6 PM</span>
                <span classname="right"> <a href="https://twitch.tv/makespp2020" target="_blank" rel="noreferrer">
                <ScheduleButton>Closing Ceremony & Winners</ScheduleButton></a></span>
              </item>
          </div>
          </Col>
          </Row>
          <br/>
          <Row>
            <Col sm={0.5}/>
            <Col sm={6} className="center">
            <h2>
              Submissions are due on
              <a href="https://makespp2020.devpost.com">
                {" "}<u>Devpost</u>{" "}
              </a>
              by <br/> 2 PM on October 11th
            </h2>
            <h2>
              <a href="http://mlh.io/code-of-conduct">
              <u>MLH Code of Conduct</u>
              </a>
            </h2>
            <h2>
            <a href="https://devpost.com/software/example-template-submission"><u>Example Devpost Template Submission</u></a>
            </h2>
            <h2>
                All events (except for games on Discord) are on <i>Twitch & Zoom</i>.
            </h2>
            <br/>
            </Col>
            <Col sm={5} className="center">
            <h2>
              24/7 Minecraft Server:<br/>
              <i>Java IP:</i> 51.81.29.22:25610
              {" "}
              <i>Bedrock IP:</i> 51.81.29.22
              {" "}
              <i>Bedrock Port:</i> 25610
            </h2>
            <h2>
              The Minecraft Server includes <i>two minigames</i>: Village Defense & Build Battles
              + Survival Mode
            </h2>
            </Col>
            <Col sm={0.5}/>
            <Col className="center" sm={4}>
              <h2>
                <u> Pitch your Project Workshop @ 4 PM</u>
              </h2>

              <h2>
                <a className="blue" href="https://enlight.nyc">
                  <u> Enlight Projects</u>
                </a>
                : Web Development & Machine Learning
              </h2>

              <h2>
                <a className="blue" href="https://repl.it">
                  <u> Repl.it Cloud IDE</u>
                </a>
              </h2>

              <h2>
                <a
                  className="blue"
                  href="https://support.balsamiq.com/sales/cloudpromo/"
                >
                  <u> Balsamiq Cloud Free Trial</u>
                </a>
                <br />
                Code: BQGSWTKRC040819
              </h2>
            </Col>
          </Row>
          <Row>
          <Col sm={1.5}/>
          <Col sm={5} className="center">
          </Col>
          <Col sm={1}/>
          <Col sm={3} className="center">
          <iframe title="Discord Widget" src="https://discordapp.com/widget?id=731656931411755140&theme=light" width="350" height="400" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
          </Col>
          <Col sm={1.5}/>
          </Row>
        </Container><br/>
        <div class="center">
          <a href="https://twitter.com/makespp">
            <img height="52px" src="/twitter.svg" alt="twitter icon."/>
          </a>
          <a href="https://discord.gg/mxmsaSK">
            <img height="52px" src="/discord.svg" alt="discord icon."/>
          </a>
          <a href="https://instagram.com/sppmakes">
            <img height="50px" src="/instagram.png" alt="instagram icon."/>
          </a>
        </div>
        <Description color="#333" className="center" size="16px">
          © 2020 <a href="https://spprep.org"> Saint Peter's Prep High School</a>
        </Description>{" "}
    );*/}
  </Layout>
)

export default plotHome