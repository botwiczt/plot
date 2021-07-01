import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { StaticImage } from "gatsby-plugin-image";
import Fade from 'react-reveal/Fade'
import walking from 'assets/illustrations/walking.svg';
import moving from 'assets/illustrations/moving.svg';
import wind from 'assets/illustrations/wind.svg';
import line from 'assets/illustrations/line.png';
import { Header } from 'components/theme';
import { Wrapper, Banner, BannerBody, BannerDetails, BannerThumbnail, Content, ContentBodyLead, Line, ContentBody, ContentThumbnailLeft, ContentDetails, ContentThumbnailRight, ButtonSoon } from './styles';
import { Container, Button } from 'components/common';
import { Typing } from "typing-effect-reactjs";
import { Link } from "gatsby";
import { ArrowImage } from "./styles";
import downarrow from 'assets/illustrations/downarrow.png';
import { HideOn, HideScroll } from 'react-hide-on-scroll';

function Thumbnail() {
 return (
   <StaticImage
     src={"./render.png"}
     alt="rendering of a 3D-printed plöt house with solar panels on the roof."
   />
 )
}

export const Landing = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Banner>
        <Header/>
        <BannerBody as={Container} id="first">
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
            <Thumbnail/>
          </BannerThumbnail>
          <HideOn divID="first" showOnPageInit={true}>
          <a href="#down" aria-label="scroll down"><ArrowImage theme={theme} src={downarrow}/></a>
          </HideOn>
        </BannerBody>
      </Banner>

      <Content>

        <ContentBodyLead as={Container}>
          <ContentDetails id="down" theme={theme}>
            <Fade>
              <h1>the future of living.</h1>
              <h2>
                eco-utilitarian infrastructure melded with community-focused values<br/>to seed the first successful utopia.
              </h2>
            </Fade>
          </ContentDetails>
        </ContentBodyLead>

        <Line theme={theme}>
          <Fade>
            <img src={line} alt="squiggly line dividing up content."/>
          </Fade>
        </Line>

        <ContentBody as={Container}>
          <ContentThumbnailLeft>
            <Fade>
              <img src={walking} alt="woman walking among trees with the sun beaming down on the forest around her."/>
            </Fade>
          </ContentThumbnailLeft>
          <ContentDetails theme={theme}>
            <Fade>
              <h1>what is a plöt?</h1>
              <p>
                a plöt is a largely self-contained community of <div class="tooltip">
                    <u class="dotting">
                      ~300 individuals,
                    </u>
                    <span class="tooltiptext">
                      <b>
                        why 300?
                      </b>
                    <br/>
                    this represents the upper end of <a class="linkstyle" href="https://en.wikipedia.org/wiki/Dunbar%27s_number" target="_blank" rel="noreferrer">
                       Dunbar's number.
                    </a>
                    </span>
                  </div> all living together in a shared space designed for <b>sustainability</b>.
                <br/>
                <br/>
                each part of everyday life has been refined for symbiosis with nature, from the composting of nearly all trash to freshly crafted plant-based meals.
              </p>
              <Button theme={theme} as={Link} href="/about">
                about us →
              </Button>
            </Fade>
          </ContentDetails>
        </ContentBody>

        <ContentBody as={Container}>
          <ContentDetails theme={theme}>
            <Fade>
              <h1>what are we reforming?</h1>
              <p>
                the underlying <div class="tooltip">
                    <u class="dotting">
                      economic + political systems
                    </u>
                    <span class="tooltiptext">
                      <b>what are these like?</b>
                      <br/>
                      learn more about plötecon and plötpolity below!
                    </span>
                  </div> provide us with a solid foundation upon which to build our utopia. we've tinkered with nearly every element of modern life.
                <br/>
                <br/>
                fundamentally, we are dedicated to preserving <b>human & animal rights</b>, standing for <b>equality & community</b>, and protecting <b>our common home</b>.
              </p>
              <Button theme={theme} as={Link} href="/foundations">
                our foundations →
              </Button>
            </Fade>
          </ContentDetails>
          <ContentThumbnailRight>
            <Fade>
              <img src={wind} alt="woman looking at three wind turbines in the distance and reflecting on renewable energy sources."/>
            </Fade>
          </ContentThumbnailRight>
        </ContentBody>

        <ContentBody as={Container}>
          <ContentThumbnailLeft>
            <Fade>
              <img src={moving} alt="man holding a briefcase and wearing a beanie stands among two colorful shrubs while preparing to move into his new home." />
            </Fade>
          </ContentThumbnailLeft>
          <ContentDetails theme={theme}>
            <Fade>
              <h1>how does it work?</h1>
              <p>
                you pay a <b>small monthly fee</b> {/*<b>of $2,000</b>*/} and <div class="tooltip">
                  <u class="dotting">
                    move into your brand new community.
                  </u>
                  <span class="tooltiptext">
                    <b>pack light.</b>
                    <br/>
                    homes come with 3D-printed, built-in furniture to reduce moving costs & <a class="linkstyle" href="https://en.wikipedia.org/wiki/Volatile_organic_compound" target="_blank" rel="noreferrer">
                    offgassed VOCs.
                    </a>
                  </span>
                </div>
                  <br/>
                  <br/>
                  in the first week, we guide you through the functioning of our community and our values.
                  <br/
                  ><br/>
                  we're currently in the process of designing our first plöt. {/*in the state of <b> maine</b>.*/}
              </p>
              <ButtonSoon theme={theme}>
              details coming soon
              </ButtonSoon>
            </Fade>
          </ContentDetails>
        </ContentBody>

      </Content>
    </Wrapper>
  );
};
