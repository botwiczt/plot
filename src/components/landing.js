import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-grid-system";


const DesktopLanding = styled.header`
  @media (max-width: 575px) {
   display:none;
  }
`;

const MobileLanding= styled.header`
  @media (min-width: 575px) {
   display:none;
  }
  @media (max-width: 575px) {
   display:initial;
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

const Sponsor = styled.img`
  display: block;
  margin: auto;
  max-width: 70%;
  padding: 30px;
`;

const Img = styled.img`
  display: block;
  width: 100%;
  @media only screen and (max-width: 575px) {
    width: 60%;
  }
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

const MobileValuesArrowImg = styled.img`
  display: block;
  width: 10%;
  margin-left: auto;
  margin-right: auto;
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


const Profile = styled.img`
  margin-left: auto;
  margin-right: auto;
  height: 125px;
  width: 130px;
  display: block;
  box-shadow: rgba(0, 0, 0, 0.125) 0px 8px 16px;
  border-radius: 50%;
  margin-bottom: 20px;
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

const FAQSpacerContainer = styled.div`
@media only screen and (min-width: 102px) {
  ;
}
`;

const Landing = () => (
  <div className="landing">
    <DesktopLanding>
    <Site><Row>
      <Col sm={12}>
        <Call color="#333" size="36px" className="center">
          welcome to plöt.
        </Call>
        <Description color="#333" size="28px" className="center">
          representing the future of living. eco-utilitarian infrastructure melded with community-focused values to seed the first successful utopia.{" "}
          <b>
            <u>
              <a href="https://mwsoi9hzsiu.typeform.com/to/IpRvruMZ" target="_blank" rel="noreferrer">join the waitlist.</a>
            </u><LineImg src="/line.png" />
          </b>
        </Description>
      </Col>
    </Row>
    <br/><br/>
      <Row>
        <Col sm={6}>
        <CardSpacerContainer><br/><br/><br/></CardSpacerContainer>
          <Card bg="#F9BEBE;">
            <Call size="24px" color="#333">
              what is a plöt?
            </Call>
            <CardText size="18px" color="#333">
              a plöt is a largely self-contained community of ~300 individuals, all living together in a shared space designed for <b>sustainability</b>.
              <br/><br/>
              each part of everyday life has been refined for symbiosis with nature, from the composting of nearly all trash to freshly crafted plant-based meals.
            </CardText>
          </Card></Col>
          <Col sm={6}>
            <Img src="/naturehome.png" />
          </Col>
      </Row><br/>
      <Row>
          <Col sm={6}>
            <Img src="/movein.png" />
          </Col>
          <Col sm={6}>
          <CardSpacerContainer><br/><br/><br/></CardSpacerContainer>
            <Card bg="#F9BEBE;">
              <Call size="24px" color="#333">
                how does it work?
              </Call>
              <CardText size="18px" color="#333">
                you exchange your old home or pay <b>$100,000</b> and move into your brand new community.
                <br/><br/>
                in the first week, we guide you through the functioning of our community and our values.
                <br/><br/>we're currently in the process of constructing our first plöt in the state of <b> maine</b>.
              </CardText>
            </Card></Col>
      </Row>

      <Row>
      <Col sm={2}/>
      <Col sm={6}>
      <ValuesCall color="#333">
        our values.
      </ValuesCall>
      <ValuesImg src="/values.svg" />
      </Col>
      <Col sm={2}>
      <a href="/values" rel="noreferrer">
      <ValuesArrowImg src="/rightarrow.svg" />
      </a>
      </Col>
      <Col sm={2}/>
      </Row>
<br/><br/><br/><br/><br/><br/>

      </Site>
      {/*<CardSpacerContainer><br/></CardSpacerContainer>
      <br/>
      <Row>
      <Col sm={4}>
        <Card bg="#F9BEBE;">
          <Call size="24px" color="#333">
            share your solutions. win prizes.
          </Call>
          <CardText size="18px" color="#333">
          whether you're working on your first <i>Hello World</i> or coding up an AI
          algorithm, makespp is a place for you to share your <b>vision with the world</b>. <br/><br/>you'll come away with your own app, website, or other project, even if you know <b>nothing going in</b>.
          </CardText>
        </Card>
      </Col>
        <Col sm={4}>
          <Img height="250px" src="/3.jpg" />
        </Col>
        <Col sm={4}>
        <CardSpacerContainer><br></br></CardSpacerContainer>
          <Card>
            <Call color="#333" size="24px">
               come for the swag. stay for the fun.
            </Call>
            <CardText size="18px" color="#333">
              with an amazing community and awesome swag (shipped to your home!) from the hottest tech
              companies, you'll have a <b>great time</b>.
<br/><br/>
              that's enough for now. so what are you doing waiting, <b><i>register now</i></b>!
            </CardText>
          </Card>
        </Col>
      </Row>
      <FAQSpacerContainer><br/><br/></FAQSpacerContainer>
      <Call color="#333" className="center" size="48px">
        Location
      </Call>
      <Description color="#333" className="center" size="28px">
        <b>October 9-11, 2020</b>
        <br />
        Saint Peter's Preparatory High School <br />
        144 Grand St, Jersey City, NJ 07302
        <br /> <br />
        <Iframe
          url="https://www.openstreetmap.org/export/embed.html?bbox=-74.13273476064207%2C40.656143375584584%2C-73.94734047353269%2C40.77584556137662&amp;layer=mapnik&amp;marker=40.71602137168535%2C-74.04003761708736
      &q=Saint+Peter's+Prep"
          width="90%"
          height="300px"
          display="initial"
          position="relative"
          allowFullScreen
        />
      </Description>
 <Call color="#333" className="center" size="48px">
        Guests
      </Call>
      <br /> <br />
      <Row>
        <Col sm={3}>
          <Profile src="/Santiago.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Santiago Siri</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Founder, Democracy Earth Foundation
          </Description>
        </Col>
        <Col sm={3}>
          <Profile src="/Joshua.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Joshua Barry</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Database Engineer, Google (SPP '10)
          </Description>
        </Col>
        <Col sm={3}>
          <Profile src="/Brendan.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Brendan Bryant</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Product Manager, Conde Nast (SPP '08)
          </Description>
        </Col>
        <Col sm={3}>
          <Profile src="/Cat.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Cat Noone</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            CEO, Iris Health
          </Description>

          <br />
        </Col>
        <Col sm={3}>
          <Profile src="/gyan.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Gyan Mishra</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Executive Director, Morgan Stanley
          </Description>

          <br />
        </Col>
        <Col sm={3}>
          <Profile src="/rachel.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Rachel Aliana </b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            CEO, <br />
            Adjacent Platform
          </Description>

          <br />
        </Col>
        <Col sm={3}>
          <Profile src="/Phil.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Phillip McGovern</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Investment Banking Associate, <br />
            Goldman Sachs (SPP '11)
          </Description>

          <br />
        </Col>
        <Col sm={3}>
          <Profile src="/JC.png" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> JC Btaiche </b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Founder, <br />
            YoungLeaders
          </Description>

          <br />
        </Col>

        <Col sm={3}>
          <Profile src="/natalia.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Natalia Dorogi</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Venture Partner, <br />
            Romulus Capital. Columbia Engineering
          </Description>

          <br />
        </Col>
        <Col sm={3}>
          <Profile src="/Abhisek.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Abhisek Vyas</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Student, <br />
            Rutgers Business School
          </Description>

          <br />
        </Col>

        <Col sm={3}>
          <Profile src="/huy.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Huy Ha</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Software Engineer, Columbia '21
          </Description>
          <br />
        </Col>
        <Col sm={3}>
          <Profile src="/frank.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Frank Beatrice</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Software Engineer (SPP '14)
          </Description>
          <br />
        </Col>
        <Col sm={3}>
          <Profile src="/allen.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Allen Hai</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Software Engineer, ZEIT
          </Description>
          <br />
        </Col>
        <Col sm={3}>
          <Profile src="/skircak.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Michael Skircak</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Entrepreneur & Teacher, SPP
          </Description>
          <br />
        </Col>
        <Col sm={3}>
          <Profile src="/Thenmozhi.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Thenmozhi Muthusamy</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Associate, Goldman Sachs
          </Description>
          <br />
        </Col>
        <Col sm={3}>
          <Profile src="/Swetha.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b>Swetha Yalamanchili</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Vice President, Goldman Sachs
          </Description>
          <br />
        </Col>
      </Row>
      <Call color="#333" className="center" size="48px">
        FAQ
      </Call>
      <br /> <br />
      <Row>
        <Col sm={4}>
          <Call className="center" color="#333" size="24px">
            What is a hackathon?
          </Call>
          <Description className="center" color="#333" size="16px">
            {" "}
            A hackathon is an event where you'll have the opportunity to turn your ideas into
            real projects. We provide skilled mentors, workshops, exclusive digital tools,
            friends, & so much more.
            MakeSPP has four tracks which you may choose to enter your project in: <b>social justice, education, healthcare, and environment.</b>
          </Description>
        </Col>
        <Col sm={4}>
          <Call className="center" color="#333" size="24px">
            Who can attend? How is the event conducted?{" "}
          </Call>
          <Description className="center" color="#333" size="16px">
            {" "}
            Any student in grades 7-12 is welcome to register. We will be conducting the hackathon primarily through Zoom & Discord.
          </Description>
        </Col>
        <Col sm={4}>
          <Call className="center" color="#333" size="24px">
            What if I don't know how to code?
          </Call>
          <Description className="center" color="#333" size="16px">
            {" "}
            MakeSPP is the best place to start. We have beginner-friendly
            workshops and skilled mentors to help you build something amazing
            each day.
          </Description>
        </Col>
      </Row>
      <Row>
        <Col sm={4}>
          <Call className="center" color="#333" size="24px">
            What does it cost?
          </Call>
          <Description className="center" color="#333" size="16px">
            {" "}
            MakeSPP is completely free thanks to our sponsors. There'll be workshops and thousands in prizes -- AirPods, Raspberry Pis, drones, software and more!
          </Description>
        </Col>

        <Col sm={4}>
          <Call className="center" color="#333" size="24px">
            What if I don’t have a team or idea?
          </Call>
          <Description className="center" color="#333" size="16px">
            {" "}
            Don't worry! There will be team formation & brainstorming sessions
            at the beginning of the event.
          </Description>
        </Col>
        <Col sm={4}>
          <Call className="center" color="#333" size="24px">
            I have another question!
          </Call>
          <Description className="center" color="#333" size="16px">
            {" "}
            Reach out to us at <a href="mailto:team@makespp.com">team@makespp.com.
            </a>{" "}
            <br />
          </Description>
        </Col>
      </Row>
      {/*<Call color="#333" className="center" size="48px">
        Schedule
      </Call><br/>
      <Call color="#333" className="center" size="40px">
        Day 1
      </Call>
      <Row>
        <Col sm={2} />
        <Col sm={8}>
          <div className="schedule">
            <item>
              <span className="right">8:00 - 8:40 AM</span> Opening Ceremony
            </item>
            <item>
              <span className="right">8:45 - 9:00 AM</span> Co-Host Opening: Hestia Academy
            </item>
            <item>
              {" "}
              <span className="right">9:05 AM</span> Team Formation
            </item>
            <item>
              {" "}
              <span className="right">9:20 AM</span> Making Starts
            </item>
            <item>
              <span className="right">10 AM</span> <b>Workshop</b>: TBD {/*Creative
              Coding w/ Upperline Code (Beginner){" "}
            </item>
            <item>
              <span className="right">10 AM</span> <b>Workshop</b>: TBD{/*Build Your
              First Website (Beginner)
            </item>
            <item>
              <span className="right">10 AM</span> <b>Workshop</b>: TBD {/*Intro to
              Python (Beginner){" "}
            </item>

            <item>
              <span className="right">11 AM</span> <b>Workshop</b>: TBD{/*Machine
              Learning w/ Upperline Code (Intermediate){" "}
            </item>

            <item>
              {" "}
              <span className="right">12 PM</span> Lunch Break
            </item>
            <item>
              <span className="right">12:30 PM</span> <b>Workshop</b>: {/*Build a
              Web App with Zeit (Intermediate){" "}
            </item>

            <item>
              <span className="right">1 PM</span> <b>Panel</b>: TBD {/*Entrepreneurship{" "}
            </item>

            <item>
              {" "}
              <span className="right">2 PM</span> <b>Activity</b>: TBD {/*Engineering
            </item>

            <item>
              <span className="right">2:30 PM</span> <b>Workshop</b>: TBD {/*Pitching
              Your Project{" "}
            </item>

            <item>
              {" "}
              <span className="right">4:00 PM</span> Snack
            </item>

            <item>
              {" "}
              <span className="right">5:30 PM</span> Making Ends & Expo Begins
            </item>

            <item>
              {" "}
              <span className="right">6:30 PM</span> Judging Ends
            </item>
            <item>
              {" "}
              <span className="right">6:30 PM</span> Dinner
            </item>

            <item>
              {" "}
              <span className="right">6:50 PM</span> Expo Ends
            </item>

            <item>
              {" "}
              <span className="right">7 PM</span> Top 5 Teams Demo & Q/A
            </item>

            <item>
              {" "}
              <span className="right">8 PM</span> Winners Announced & Closing
              Remarks{" "}
            </item>
          </div>
        </Col>
        <Col sm={2} />
      </Row><br/>
      <Call color="#333" className="center" size="40px">
        Day 2
      </Call><br/>
      <Call color="#333" className="center" size="30px">
TBD      </Call><br/>
      <Call color="#333" className="center" size="40px">
        Day 3
      </Call><br/>
      <Call color="#333" className="center" size="30px">
TBD      </Call>
      <br />
      <br />
<Call color="#333" className="center" size="48px">
        Sponsors
      </Call>
      <br />
      <Row>
      </Row>
      <Row>
        <Col sm={2.5} />
        <Col sm={7}>
            <a href="https://www.hestia.academy" target="_blank" rel="noreferrer"><Sponsor src="/sponsors/hestia.svg" /></a>
        </Col>
        <Col sm={2.5} />
      </Row>
      <Row>
        <Col sm={4}>
            <a href="https://www.thejillbiggsgroup.com" target="_blank" rel="noreferrer"><Sponsor src="/sponsors/jbg.png" /></a>
        </Col>
        <Col sm={4}>
          <a href="https://www.jdjfoundation.org" target="_blank" rel="noreferrer"><Sponsor src="/sponsors/jdj.png" /></a>
        </Col>
        <Col sm={4}>
          <a href="https://www.linode.com" target="_blank" rel="noreferrer"><Sponsor src="/sponsors/linode.png" /></a>
        </Col>
      </Row>
      <Row>
        <Col sm={4}>
          <a href="https://www.balsamiq.com" target="_blank" rel="noreferrer"><Sponsor src="/sponsors/balsamiq.png" /></a>
        </Col>
        <Col sm={4}>
          <a href="https://www.repl.it" target="_blank" rel="noreferrer"><Sponsor src="/sponsors/replit.png" /></a>
        </Col>
        <Col sm={3}>
          <a href="https://www.stickergiant.com" target="_blank" rel="noreferrer"><Sponsor src="/sponsors/stickergiant.png" /></a>
        </Col>
      </Row>
      <Call color="#333" className="center" size="48px">Support
            </Call>
      <Row>
        <Col sm={2}>
          <a href="https://www.desmos.com" target="_blank" rel="noreferrer"><Sponsor src="/sponsors/desmos.png" /></a>
        </Col>
        <Col sm={2}>
          <a href="https://www.wolfram.com/language" target="_blank" rel="noreferrer"><Sponsor src="/sponsors/wolfram.png" /></a>
        </Col>
        <Col sm={2}>
          <a href="https://www.hackerearth.com" target="_blank" rel="noreferrer"><Sponsor src="/sponsors/hackerearth.png" /></a>
        </Col>
        <Col sm={3}>
          <a href="https://www.interviewcake.com" target="_blank" rel="noreferrer"><Sponsor src="/sponsors/interviewcake.svg" /></a>
        </Col>
        <Col sm={3}>
          <a href="https://www.artofproblemsolving.com" target="_blank" rel="noreferrer"><Sponsor src="/sponsors/aops.svg" /></a>
        </Col>
      </Row>
      <Row>
        <Col sm={2.25}/>
        <Col sm={2.5}>
          <a href="https://www.taskade.com" target="_blank" rel="noreferrer"><Sponsor src="/sponsors/taskade.png" /></a>
        </Col>
        <Col sm={2.5}>
          <a href="https://www.1password.com" target="_blank" rel="noreferrer"><Sponsor src="/sponsors/1password.svg" /></a>
        </Col>
        <Col sm={1.25}>
          <a href="https://www.bugsee.com" target="_blank" rel="noreferrer"><Sponsor src="/sponsors/bugsee.svg" /></a>
        </Col>
        <Col sm={3.5}/>
      </Row>
      {/*
      <Row>
      <Col sm={3}>
        <br /> <br />
        <Sponsor src="/sponsors/hackerearth.png" />
      </Col>
      <Col sm={3}>
        <br /> <br />
        <Sponsor src="/sponsors/jpmorgan.jpg" />
      </Col>
      <Col sm={3}>
        <Sponsor className="max" src="/sponsors/yl.png" />
      </Col>


        <Col sm={3} />
        <Col sm={2}>
          <Sponsor className="max" src="/sponsors/insomnia.jpg" />
        </Col>

        <Col sm={2}>
          <Sponsor className="max" src="/sponsors/stickergiant.png" />
        </Col>

        <Col sm={3}>
          <Sponsor className="max" src="/sponsors/basiles.png" />
        </Col>
        <Col sm={2} />
      </Row>
      <Row>
        <Col sm={3}>
          <Sponsor src="/sponsors/desmos.png" />
        </Col>
        <Col sm={3}>
          <Sponsor src="/sponsors/sketch.png" />
        </Col>
        <Col sm={3}>
          <Sponsor src="/sponsors/1password.png" />
        </Col>

        <Col sm={3}>
          <Sponsor src="/sponsors/hackclub.png" />
        </Col>
      </Row>
      <Row><Col sm={12}><Description className="center" size="20px">
        {" "}
        For our sponsorship prospectus, please click <Link to = "/prospectus.pdf" style={{
          color: `black`,
          textDecoration: `underline`
        }}>here</Link>.
        {" "}
      </Description></Col></Row><br />
      <Call color="#333" className="center" size="48px">
        Leadership
      </Call>
      <br /> <br />
      <Row>
        <Col sm={1.5} />
        <Col sm={3}>
        <Profile src="/team/eli.jpg" />
        <Description className="center" color="#333" size="18px">
          {" "}
          <b> Eli Blumenfeld</b>
        </Description>
        <Description className="center" color="#333" size="16px">
          {" "}
          Senior Organizer
        </Description>
        </Col>
        <Col sm={3}>
          <Profile src="/team/tomek.jpg"/>
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Tomek Botwicz</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Director
          </Description>
          <br />
        </Col>
        <Col sm={3}>
          <Profile src="/team/shivansh.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b>Shivansh Kumar</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Senior Organizer
          </Description>
          <br />
        </Col>
      </Row>
      <Row>
        <Col sm={1} />
        <Col sm={2.5}>
          <Profile src="/team/alyssa.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Alyssa Fuentes</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Operations
          </Description>
          <br />
        </Col>
        <Col sm={2.5}>
          <Profile src="/team/max.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Max Rueda</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Operations
          </Description>
          <br />
        </Col>
        <Col sm={2.5}>
          <Profile src="/team/jason.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Jason Schreiber</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Operations
          </Description>
          <br />
        </Col>
        <Col sm={2.5}>
          <Profile src="/team/natalie.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Natalie Spiska</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Graphic Designer
          </Description>
          <br />
        </Col>
        </Row>
        <Row>
        <Col sm={1} />
        <Col sm={2.5}>
          <Profile src="/team/josh.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Josh Kover</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Outreach
          </Description>
          <br />
        </Col>
        <Col sm={2.5}>
          <Profile src="/team/vikram.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Vikram Kadyan</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Outreach
          </Description>
          <br />
        </Col>
        <Col sm={2.5}>
          <Profile src="/team/alexa.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Alexa Janeczko</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Social Media Manager
          </Description>
          <br />
        </Col>
        <Col sm={2.5}>
          <Profile src="/team/avery.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Avery Aquino</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Social Media Manager
          </Description>
          <br />
        </Col>
        </Row>
        <Row>
        <Col sm={1} />
        <Col sm={2.5}>
          <Profile src="/team/eric.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Eric Han</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Tech Crew
          </Description>
          <br />
        </Col>
        <Col sm={2.5}>
          <Profile src="/team/kevin.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Kevin Shull</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Tech Crew
          </Description>
          <br />
        </Col>
        <Col sm={2.5}>
          <Profile src="/team/andrew.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Andrew Lin</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Tech Crew
          </Description>
          <br />
        </Col>
        <Col sm={2.5}>
          <Profile src="/team/chris.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Chris Gliatto</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Tech Crew
          </Description>
          <br />
        </Col>
        <Col sm={5} />
        <Col sm={14}>
          <Profile src="/team/michael.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b>Michael Holt</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Administrator
          </Description>
          <br />
        </Col>
      </Row>
    </Site>*/}

    {/*<footer>
    <Row>
    <Col sm={3}>
    <a href="https://twitter.com/">
      <img height="52px" src="/twitter.png" alt="twitter icon."/>
    </a>
    <a href="https://instagram.com/">
      <img height="50px" src="/instagram.png" alt="instagram icon."/>
    </a>
    </Col>
    <Col sm={2}>
    <Description color="#333" className="center" size="16px">
      © 2020 <a> plot co.</a>
    </Description>
    </Col>
    <Col sm={2}>
    <Description size="10px">
      <Link to ="/tos" style={{
        color: `black`,
        textDecoration: `underline`
      }}> TOS </Link>
    </Description>
    </Col>
    </Row>
    </footer>*/}
    </DesktopLanding>
    <MobileLanding>
    <Site>
    <Row>
      <Col sm={12}>
        <Call color="#333" size="36px" className="center">
          welcome to plöt.
        </Call>
        <Description color="#333" size="28px" className="center">
          representing the future of living. eco-utilitarian infrastructure melded with community-focused values to seed the first successful utopia.{" "}
          <b>
            <u>
              <a href="https://mwsoi9hzsiu.typeform.com/to/IpRvruMZ" target="_blank" rel="noreferrer">join the waitlist.</a>
            </u><LineImg src="/line.png" />
          </b>
        </Description>
      </Col>
    </Row>
    <br/>
      <MobileCard bg="#F9BEBE;">
        <Call color="#333">
          what is a plöt?
        </Call>
        <CardText color="#333">
          a plöt is a largely self-contained community of ~300 individuals, all living together in a shared space designed for <b>sustainability</b>.
          <br/><br/>
          each part of everyday life has been refined for symbiosis with nature, from the composting of nearly all trash to freshly crafted plant-based meals.
        </CardText><MobileImg src="/naturehome.png"/>
      </MobileCard>
        <br/>
      <MobileCard>
        <Call color="#333">
            how does it work?
        </Call>
        <CardText color="#333">
                you exchange your old home or pay <b>$100,000</b> and move into your brand new community.
                <br/>
                <MobileImg src="/movein.png" />
                in the first week, we guide you through the functioning of our community and our values.
                <br/><br/>we're currently in the process of designing our first plöt in the state of <b> maine</b>.
        </CardText>
      </MobileCard>

      <MobileValuesCall color="#333">
      our values.
      </MobileValuesCall>
      <MobileValuesImg src="/values.svg" />
      <a href="/values" rel="noreferrer">
      <MobileValuesArrowImg src="/rightarrow.svg" />
      </a>
      <br/><br/><br/>
    </Site>
    </MobileLanding>
    </div>
);
export default Landing;
