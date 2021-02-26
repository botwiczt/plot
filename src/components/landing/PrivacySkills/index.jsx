import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import { Wrapper, SkillsWrapper, Details } from './styles';

export const PrivacySkills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
      <Details theme={theme}>
      <h1>privacy policy:</h1>
      <p><b>last updated february 25th, 2021
<br/><br/>> we do not automatically collect any personal information.
<br/>> we collect any email entered into the waitlist.
<br/>> we store collected emails along with a collection timestamp on a secure server.
<br/>> we do not use analytical or tracking software.</b></p>
      </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
