import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { Container } from 'components/common';
import { Wrapper, Flex, Links, Details, Privacy, Creator } from './styles';
import ToggleTheme from './ToggleTheme';
import { ThemeContext } from 'providers/ThemeProvider';
import social from './social.json';
import lock from 'assets/illustrations/privacyicon.svg';
import creator from 'assets/illustrations/creator.svg';

export const Footer = () => {

  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Flex as={Container}>
        {/*
        <Links>
          {social.map(({ id, name, link, icon }) => (
            <a key={id} href={link} target="_blank" rel="noopener noreferrer" aria-label={`email me at ${name}`}>
              <img width="24" src={icon} alt={name} />
            </a>
          ))}
        </Links>*/}
            <ToggleTheme/>

        <div class="tooltip">
            <Link to="/privacy"><Privacy theme={theme}> <img src={lock} alt="button to access privacy policy"/></Privacy></Link>
            <span class="tooltiptext">
              privacy policy
            </span>
          </div>

        <Link to="/creator"><Creator theme={theme}> <img src={creator} alt="button to access page about creator of plöt"/></Creator></Link>

        <Details theme={theme}>
          <span>
            © {new Date().getFullYear()} plöt co.  {/*| made with{' '}
            <span aria-label="love" role="img">
              💖
            </span>*/}</span>
        </Details>
      </Flex>
    </Wrapper>
)
};
