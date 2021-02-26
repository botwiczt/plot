import React, { useContext } from 'react';
import { Link } from "gatsby";
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import recycle from 'assets/illustrations/recycle.svg';
import cow from 'assets/illustrations/cow.svg';
import sticker from 'assets/illustrations/sticker.svg';
import { Wrapper, SkillsWrapper, MoreSkillsWrapper, Details, Thumbnail } from './styles';

export const StoreSkills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Details theme={theme}>
        <Thumbnail theme={theme}>
          <img src={recycle} alt="bag filled with package free goods" />
        </Thumbnail>
          <h1>minimal packaging</h1>
          <p>
          the <div class="tooltip"><u class="dotting">reUSE system</u><span class="tooltiptext"><b>learn more</b><br/><a class="linkstyle" href="/reUSE" rel="noreferrer"><span aria-label="arrow towards the right" role="img">
            →
          </span> </a></span></div>, homemade essentials, and bulk bins. no packaging means no waste!
          </p>
        </Details>
        <Details theme={theme}>
        <Thumbnail theme={theme}>
          <img src={cow} alt="cartoon cow" />
        </Thumbnail>
          <h1>cruelty free</h1>
          <p>
          all of the products in our stores are certified vegan. healthier for you, the animals, and the earth.
          </p>
        </Details>
        <Details theme={theme}>
        <Thumbnail theme={theme}>
          <img src={sticker} alt="produce sticker" />
        </Thumbnail>
          <h1>produce stickers: nope!</h1>
          <p>
          easier to wash and no sticky residue from those pesky stickers. we saved you the hassle.
          </p>
        </Details>
      </SkillsWrapper>
      <MoreSkillsWrapper>
      <Details theme={theme}>
      <p>  <br/>
        <b>more info coming soon...</b></p>
      </Details>
      </MoreSkillsWrapper>
    </Wrapper>
  );
};
