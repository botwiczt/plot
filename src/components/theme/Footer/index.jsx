import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { Container } from 'components/common';
import { Wrapper, Flex, Links, Details, Privacy } from './styles';
import ToggleTheme from 'components/theme/Header/ToggleTheme';
import { ThemeContext } from 'providers/ThemeProvider';
import social from './social.json';
import lock from 'assets/illustrations/privacyicon.svg';

export const Footer = () => {

  const { theme } = useContext(ThemeContext);

  return (

  <Wrapper>
    <Flex as={Container}>
      {/*<Details theme={theme}>
        <span>
          © {new Date().getFullYear()} plöt co.  {/*| made with{' '}
          <span aria-label="love" role="img">
            💖
          </span></span>*/}
      {/*</Details>
      <Links>
        {social.map(({ id, name, link, icon }) => (
          <a key={id} href={link} target="_blank" rel="noopener noreferrer" aria-label={`email me at ${name}`}>
            <img width="24" src={icon} alt={name} />
          </a>
        ))}
      </Links>*/}
      <Link to="/privacy"><Privacy theme={theme}><img src={lock} alt="privacy policy" /></Privacy></Link>
      <ToggleTheme />
    </Flex>
  </Wrapper>
)
};
