import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components";
import { Container, Row, Col } from "react-grid-system";
import Dashboard from "./Dashboard.js";

const DesktopHome = styled.header`
  @media (max-width: 768px) {
   display:none;
  }
`;

const CardShrink = styled.div`
  display: flex;
  justify-content: center;
`;

//575px was other mobileheader value.
const MobileHome = styled.header`
  @media (min-width: 768px) {
   display:none;
  }
  @media (max-width: 768px) {
   display:initial;
  }
`;

const Art = styled.img`
  display: block;
  margin-left: -30%;
  margin-top: -10%;
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

const Icon = styled.img`
  display: block;
  width: 100%;
  @media only screen and (max-width: 575px) {
    position: auto;
    width: 40%;
`;

const MobileIcon = styled.img`
  width: 100%;
  @media only screen and (max-width: 575px) {
    position: auto;
    width: 30%;
`;

const MobileArt = styled.img`
  display: block;
  margin-left: 5%;
  margin-top: 10%;
  width: 100%;
`;

const Logo = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;

const MobileLogo = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
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
    font-size: 68px;
  }
  @media only screen and (max-width: 1600px) {
    font-size: 52px;
  }
  @media only screen and (max-width: 1300px) {
    font-size: 50px;
  }
  @media only screen and (max-width: 1200px) {
    font-size: 44px;
  }
  @media only screen and (max-width: 1100px) {
    font-size: 43px;
  }
  @media only screen and (max-width: 1050px) {
    font-size: 38.5px;
  }
  @media only screen and (max-width: 1024px) {
    font-size: 39px;
  }
  @media only screen and (max-width: 945px) {
    font-size: 37px;
  }
  @media only screen and (max-width: 900px) {
    font-size: 35px;
  }
  @media only screen and (max-width: 860px) {
    font-size: 30px;
  }
  @media only screen and (max-width: 800px) {
    font-size: 25px;
  }
`;

const MobileTitle = styled.h1`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  font-size: 40px;
  color: #000000;
  @media only screen and (max-width: 320px) {
      font-size: 35px;
    }
  @media only screen and (max-width: 232px) {
      font-size: 30px;
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
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  @media only screen and (max-width: 1024px) {
      font-size: 18px;
    }
  @media only screen and (max-width: 800px) {
        font-size: 16px;
    }
  @media only screen and (max-width: 320px) {
        font-size: 14px;
    }
`;

const Card = styled.div`
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

const Center = styled.div`
 margin-left:30%;
`;

const plotHome = () => (
  <Layout>
    <SEO title="plöt home" keywords={[`plot`, `home`, `house`]}/>
    <DesktopHome>
    <Link to="/">
    <BackButton src="/leftarrow.svg" /></Link>
    <br/>
    <Logo src="/plotstore.png"/>
      <br/><br/><br/>
    <Row>
      <Col sm={1.5}/>
      <Col sm={4}>
      <Title>
      local. <br/>zero waste. <br/>plant-based <span role="img" aria-label="plant emoji">🌱</span>️.
      </Title>
      </Col>
      <Col sm={1}/>
      <Col sm={4}>
          <Art src="/store.svg" />
      </Col>
      <Col sm={1.5}/>
    </Row>

              <Card bg="#F9BEBE;">
                <br/><br/><br/>
                <Row>
                <Col sm={1.5}/>
                <Col sm={2.33}>
                <Icon src="/recycle.svg"/>
                </Col>
                <Col sm={1}/>
                <Col sm={2.33}>
                <Icon src="/cow.svg"/>
                </Col>
                <Col sm={1}/>
                <Col sm={2.33}>
                <Icon src="/sticker.svg"/>
                </Col>
                <Col sm={1.5}/>
                </Row>

                <Row>
                <Col sm={1.5}/>
                <Col sm={2.75}>
                <CardText>
                <b>minimal packaging</b>
                </CardText>
                <CardText>
                homemade essentials, bulk bins, and the <div class="tooltip"><u class="dotting">reUSE system</u><span class="tooltiptext"><b><a class="linkstyle" href="/reUSE" rel="noreferrer">learn more ></a></b></span></div>. no packaging means no waste!
                </CardText>
                </Col>
                <Col sm={0.375}/>
                <Col sm={2.75}>
                <CardText>
                <b>cruelty free</b>
                </CardText>
                <CardText>
                all of the products in our stores are certified vegan. healthier for you, the animals, and the earth.
                </CardText>
                </Col>
                <Col sm={0.375}/>
                <Col sm={2.75}>
                <CardText>
                <b>produce stickers: nope!</b>
                </CardText>
                <CardText>
                easier to wash and no sticky residue from those <i>pesky</i> stickers. we saved you the hassle.
                </CardText>
                </Col>
                <Col sm={1.5}/>
                </Row>

                <br/>
                <LargeTitle>
                  more info coming soon...
                </LargeTitle>
              </Card>


{/*}<CardShrink>
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

    </CardShrink>*/}
    </DesktopHome>


    <MobileHome>
    <Link to="/">
    <MobileBackButton src="/leftarrow.svg" /></Link>

    <MobileLogo src="/plotstore.png"/>
    <MobileArt src="/store.svg"/>
    <MobileTitle>
    local. <br/>zero waste. <br/>plant-based <span role="img" aria-label="plant emoji">🌱</span>️.
    </MobileTitle>
    <MobileCard bg="#F9BEBE;">
                <br/>

                <Row>
                <Col sm={6}>
                <MobileIcon src="/recycle.svg"/>
                </Col>
                <Col sm={6}>
                <CardText>
                <b>minimal packaging</b>
                </CardText>
                <CardText>
                homemade essentials, bulk bins, and the <div class="tooltip"><u class="dotting">reUSE system</u><span class="tooltiptext"><b><a class="linkstyle" href="/reUSE" rel="noreferrer">learn more ></a></b></span></div>. no packaging means no waste!
                </CardText>
                </Col>
                </Row>

                <Row>
                <Col sm={6}>
                <MobileIcon src="/cow.svg"/>
                </Col>
                <Col sm={6}>
                <CardText>
                <b>cruelty free</b>
                </CardText>
                <CardText>
                all of the products in our stores are certified vegan. healthier for you, the animals, and the earth.
                </CardText>
                </Col>
                </Row>

                <Row>
                <Col sm={6}>
                <MobileIcon src="/sticker.svg"/>
                </Col>
                <Col sm={6}>
                <CardText>
                <b>produce stickers: nope!</b>
                </CardText>
                <CardText>
                easier to wash and no sticky residue from those <i>pesky</i> stickers. we saved you the hassle.
                </CardText>
                </Col>
                </Row>

                <br/>
                <LargeTitle>
                  more info coming soon...
                </LargeTitle><br/><br/>
              </MobileCard>

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
