import React, { useContext } from 'react';
import { Link } from "gatsby";
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import gear from 'assets/illustrations/gear.svg';
import election from 'assets/illustrations/election.svg';
import politics from 'assets/illustrations/politics.svg';
import firewall from 'assets/illustrations/firewall.svg';
import { Wrapper, SkillsWrapper, Details, DetailsText, Thumbnail, Pointernail } from './styles';

{/*<div class="tooltip"><u class="dotting"><i>plöt economics</i></u><span class="tooltiptext"><b>a form of decentralized, collectivist, market economy</b><br/>
woah, that’s a word soup. let’s break it down:<br/><br/>

decentralized - the community decides on its own course of action, not top-down unaccountable bureaucrats
<br/><br/>
collectivist - we just mean that plöt communities are worker-owned and operated.
<br/><br/>
planned - we’re producing for-need, never for-profit while ensuring equitable distribution
<br/><br/>
doesn’t sound so bad, does it?
</span></div>

a complementary system to plötecon.

*/}


// HEIGHT OF TWO INFO BOXES ISN'T EQUAL. FIXED HEIGHT??? (INTRODUCES NEW ISSUES)

export const FoundationSkills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Details theme={theme}>
        <Thumbnail theme={theme}>
          <img src={gear} alt="bank looking building" />
        </Thumbnail>
          <h1>plötecon<h4>(short for <i>plöt economics</i>)</h4></h1>
          <p>
          the system separates basic living necessities (like food, water, clothing, and utilities) from unstable market forces. meanwhile, healthy competition continues in "optional" categories (like entertainment, luxury, and technology).
          </p><Pointernail theme={theme} ><img src={firewall} alt="illustration of division between essentials like water and luxuries like entertainment" /></Pointernail>
          <p1><ul>
<li>a firewall develops between the two sectors.</li><li>in both sectors, strict <font color="lightgreen">environmental</font> and <font color="lightblue">social</font> rules guide development.
</li><li>as industries mature, they become increasingly <font color="red">worker-owned</font>.</li></ul><a class="linkstyle" href="https://en.wikipedia.org/wiki/Degrowth" target="_blank" rel="noreferrer"><font color="#BBBB1A"><u>degrowth</u></font></a> is central to plötecon.</p1>
          <br/><br/><br/><p>the image above shows a firewall example.</p>
        </Details>
        <Details theme={theme}>
        <Thumbnail theme={theme}>
          <img src={election} alt="ballot indicating elections" />
        </Thumbnail>
          <h1>plötpolity<h4>(short for <i>plöt politics</i>)</h4></h1>
          <p>
          the system is grounded in <u>true democracy</u>, free from lobbying and granting an equal voice to each plötizen. the basics are simple enough, centering around "councils":<br/>
          </p><Pointernail theme={theme} ><img src={politics} alt="tiered electoral system representation" /></Pointernail>
          <p1>1. <font color="#AC87BB">local councils</font> (each containing ~17 plötizens) send a representative to the higher council.<br/>
          2. <font color="#FF9188">higher councils</font>, (each containing ~17 local representatives) send a representive to the interplöt council.<br/>
          3. this continues until <font color="#E5A2FF">everybody</font> is represented.<br/>
          <br/></p1><p>the image above shows the nesting process.</p>
        </Details>
      </SkillsWrapper>


        {/*<DetailsText theme={theme}>
          <h1>Justice 🚓</h1>
          <p>
          info coming soon...
          </p>
        </DetailsText>
        <DetailsText theme={theme}>
          <h1>Climate 🌎</h1>
          <p>
          info coming soon...
          </p>
        </DetailsText>
        <DetailsText theme={theme}>
          <h1>Equality ❤️</h1>
          <p>
          info coming soon...
          </p>
        </DetailsText>*/}


    </Wrapper>
  );
};
