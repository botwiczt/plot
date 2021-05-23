import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { Container } from 'components/common';
import { Wrapper, Flex, Links, Details, Privacy, Email, Creator } from './styles';
import ToggleTheme from './ToggleTheme';
import { ThemeContext } from 'providers/ThemeProvider';
import social from './social.json';
import lock from 'assets/illustrations/privacyicon.svg';
import email from 'assets/illustrations/email.svg';
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
        <div class="tooltip">
            <ToggleTheme/>
            <span class="tooltiptext">
              toggle dark mode
            </span>
          </div>

        <div class="tooltip">
            <Link to="/privacy"><Privacy theme={theme}> <img src={lock} alt="button to access privacy policy"/></Privacy></Link>
            <span class="tooltiptext">
              privacy policy
            </span>
          </div>

        <div class="tooltip">
            <a href="mailto:hello@plot.community"><Email theme={theme}> <img src={email} alt="button to email us"/></Email></a>
            <span class="tooltiptextemail">
              send us an email
            </span>
          </div>

          <div class="tooltip">
              <Link to="/creator"><Creator theme={theme}> <img src={creator} alt="button to access page about the creator of plöt"/></Creator></Link>
              <span class="tooltiptext">
                about the creator
              </span>
            </div>

        <Details theme={theme}>
          <span><b>
            © {new Date().getFullYear()} plöt co.  {/*| made with{' '}
            <span aria-label="love" role="img">
              💖
            </span>*/}</b></span>
        </Details>
      </Flex>
    </Wrapper>
)
};
