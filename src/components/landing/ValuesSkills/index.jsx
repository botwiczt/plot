import React, { useContext } from 'react';
import { Link } from "gatsby";
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import gear from 'assets/illustrations/gear.svg';
import election from 'assets/illustrations/election.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

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

export const ValuesSkills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Details theme={theme}>
        <Thumbnail theme={theme}>
          <img src={gear} alt="bag filled with package free goods" />
        </Thumbnail>
          <h1>plötecon<h4>(short for <i>plöt economics</i>)</h4></h1>
          <p>
          info coming soon...
          </p>
        </Details>
        <Details theme={theme}>
        <Thumbnail theme={theme}>
          <img src={election} alt="cartoon cow" />
        </Thumbnail>
          <h1>plötpolity<h4>(short for <i>plöt politics</i>)</h4></h1>
          <p>
          info coming soon...
          </p>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
