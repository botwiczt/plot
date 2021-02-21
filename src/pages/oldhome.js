import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components";
{/*import { Container, Row, Col } from "react-grid-system";
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';*/}

const DesktopHome = styled.header`
  @media (max-width: 575px) {
   display:none;
  }
`;

const DesktopHomeInner = styled.header`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 575px) {
   display:none;
  }
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
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  @media only screen and (max-width: 575px) {
    position: auto;
    width: 40%;
  @media only screen and (max-width: 100px) {
  content:url("/logosmall.png");
    position: auto;
    width: 65%;
  }*/}
`;

const MobileArt = styled.img`
  display: block;
  margin: auto;
  margin-top: 50%;
  width: 100%;
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


const plotHome = () => (
  <Layout>
    <SEO title="plöt home" keywords={[`plot`, `home`, `house`]}/>
    <DesktopHome>
    <Link to="/">
    <BackButton src="/leftarrow.svg" /></Link>
    <DesktopHomeInner>
    {/*<br/>
    <Row>
      <Col sm={4}>
        <Link to="/">
          <Logo src="/logo.png" />
        </Link>
        <br/>
        <Link to="/">
        <BackButton src="/leftarrow.svg" /></Link>
      </Col>
      <Col sm={8}>
      </Col>
    </Row>*/}
    <Art src="/houseart.png"/>
    <Call color="#333" className="center" size="30px">
      we're 3D-printing recycled, optimized homes for sustainable life...
    </Call>
    </DesktopHomeInner>
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