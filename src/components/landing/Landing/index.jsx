import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import render from 'assets/illustrations/render.png';
import { Wrapper, Banner, BannerBody, BannerDetails, BannerThumbnail } from './styles';
import { Container, Button } from 'components/common';
import { Typing } from "typing-effect-reactjs";
import { Link } from "gatsby";
import { Scroll } from './Scroll';

import Fade from 'react-reveal/Fade'
import dev from 'assets/illustrations/skills.svg';
import moving from 'assets/illustrations/moving.svg';
import wind from 'assets/illustrations/wind.svg';
import values from 'assets/illustrations/values.svg';
import line from 'assets/illustrations/line.png';
import { SkillsWrapper, ContentBodyLead, HeaderDetails, Line, Details2, Thumbnail2, ThumbnailWind, ValueDetails, Content, ButtonSoon} from './styles';

export const Landing = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Banner>
        <Header/>
        <BannerBody as={Container}>
          <BannerDetails theme={theme}>
            <h1>we're creating a utopia.</h1>
            <Typing
              text={["welcome to plöt.",]}
              typeSpeed={80}
              disableBlinkingOnEnd={3}
            />
            <Button theme={theme} as={Link} href="/waitlist">
              join the waitlist →
            </Button>
          </BannerDetails>
          <BannerThumbnail>
            <img src={render} alt="a rendering of a plöt house."/>
          </BannerThumbnail>
          <Scroll/>
        </BannerBody>
      </Banner>

      <Content>
        <ContentBodyLead as={Container}>
          <HeaderDetails id="down" theme={theme}>
            <Fade>
              <h1>the future of living.</h1>
              <p>
                eco-utilitarian infrastructure melded with community-focused values to seed<br/> the first successful utopia.
              </p>
            </Fade>
          </HeaderDetails>
        </ContentBodyLead>

        <Line theme={theme}>
          <Fade><img src={line} alt="divider line" /></Fade>
        </Line>
        <SkillsWrapper as={Container}>
          <Thumbnail2>
            <Fade><img src={dev} alt="person walking through forest" /></Fade>
          </Thumbnail2>
          <Details2 theme={theme}>
            <Fade><h1>what is a plöt?</h1>
            <p>
            a plöt is a largely self-contained community of <div class="tooltip"><u class="dotting">~300 individuals,</u><span class="tooltiptext"><b>why 300?</b><br/>this represents the upper end of <a class="linkstyle" href="https://en.wikipedia.org/wiki/Dunbar%27s_number" target="_blank" rel="noreferrer">Dunbar's number.</a></span></div> all living together in a shared space designed for <b>sustainability</b>.
                <br/><br/>
                each part of everyday life has been refined for symbiosis with nature, from the composting of nearly all trash to freshly crafted plant-based meals.
            </p>

            <Button theme={theme} as={Link} href="/about">
              about us →
            </Button>

            </Fade>
          </Details2>
        </SkillsWrapper>

        <SkillsWrapper as={Container}>
          <Details2 theme={theme}>
            <Fade><h1>what are we reforming?</h1>
            <p>
            the underlying <div class="tooltip"><u class="dotting">economic + political systems</u><span class="tooltiptext"><b>what are these like?</b><br/>learn more about plötecon and plötpolity below!</span></div> provide us with a solid foundation upon which to build our utopia. we've tinkered with nearly every element of modern life.
                <br/><br/>
                fundamentally, we are dedicated to preserving <b>human & animal rights</b>, standing for <b>equality & community</b>, and protecting <b>our common home</b>.
            </p>

            <Button theme={theme} as={Link} href="/foundations">
            our foundations →
            </Button>

            </Fade>
          </Details2>
          <ThumbnailWind>
            <Fade><img src={wind} alt="person walking by wind turbines" /></Fade>
          </ThumbnailWind>
        </SkillsWrapper>
        <SkillsWrapper as={Container}>
          <Thumbnail2>
            <Fade><img src={moving} alt="person with briefcase moving in" /></Fade>
          </Thumbnail2>
          <Details2 theme={theme}>
          <Fade><h1>how does it work?</h1>
          <p>
            you pay a <b>small yearly fee</b> {/*<b>$100,000</b>*/} and <div class="tooltip"><u class="dotting">move into your brand new community.</u><span class="tooltiptext"><b>pack light.</b><br/>homes come with 3D-printed, built-in furniture to reduce moving costs & <a class="linkstyle" href="https://en.wikipedia.org/wiki/Volatile_organic_compound" target="_blank" rel="noreferrer">offgassed VOCs.</a></span></div>
                  <br/><br/>
                  in the first week, we guide you through the functioning of our community and our values.
                  <br/><br/>we're currently in the process of designing our first plöt. {/*in the state of <b> maine</b>.*/}
            </p>

            <ButtonSoon theme={theme}>
            details coming soon
            </ButtonSoon>

            </Fade>
          </Details2>
        </SkillsWrapper>
        {/*<SkillsWrapper as={Container}>
        <Thumbnail>
          <Fade><img src={values} alt="checklist indicating values" /></Fade>
        </Thumbnail>


          <ValueDetails theme={theme}>
            <Fade><h1>our foundations.</h1>
            <Link to="/foundations">
            <p as={AnchorLink} href="/foundations">
            <span aria-label="arrow towards the right" role="img">
              →
            </span>
            </p>
            </Link></Fade>
          </ValueDetails>


        </SkillsWrapper>*/}
      </Content>
    </Wrapper>
  );
};
