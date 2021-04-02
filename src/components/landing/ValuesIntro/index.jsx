import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { ValuesHeader } from 'components/theme';
import { Container } from 'components/common';
import line from 'assets/illustrations/line.svg';
import lineright from 'assets/illustrations/lineright.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail, Thumbnail2, Line, LineRight } from './styles';

// FIX: welcome to plot typing text is buggy mess

export const ValuesIntro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <ValuesHeader />

      <IntroWrapper as={Container}>
        <Details theme={theme}>
        <Line theme={theme}>
          <img src={line} alt="bag filled with package free goods" />
        </Line>
        </Details>
        <Details theme={theme}>
          <h4>plöt is built upon <br/>two foundations:<br/><br/><font color="#707076">&emsp;plötecon </font><span aria-label="gear" role="img">
            ⚙️
          </span><br/>+
          <br/><font color="#77AFC6">&emsp;plötpolity </font><span aria-label="ballot box" role="img">
            🗳️
          </span></h4>
        </Details>
        <Details theme={theme}>
        <LineRight theme={theme}>
          <img src={lineright} alt="produce sticker" />
        </LineRight>
        </Details>
      </IntroWrapper>

    </Wrapper>
  );
};
