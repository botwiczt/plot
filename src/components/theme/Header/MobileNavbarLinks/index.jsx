import React, {useContext} from 'react';
import { Link } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Wrapper } from './styles';
import house from 'assets/illustrations/homeicon.svg';
import school from 'assets/illustrations/schoolicon.svg';
import store from 'assets/illustrations/storeicon.svg';
import styled from "styled-components";

// FIX navbuttons: can active hover when slightly under and around button

const NavButton = styled.img`
  text-align: center;
  width: 12vw;
  filter: ${({ theme }) => (theme === 'dark' ? 'invert(0)' : 'invert(1)')};
  margin-top: 20%;
  cursor: pointer;
  border: 6px solid #000000;
  box-shadow: 5px 5px #000000;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 30px;
  transition: all 0.5s ease;
  :hover {
    background: #CCCCCC;
    transform: scale(1.2);
    opacity: 0.45;
  }
  @media only screen and (max-width: 1000px) {
    box-shadow: 0px 0px;
  }
  @media (max-width: 960px) {
    mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
  }
  @media (max-width: 600px) {
    width: 20vw;
    margin-top: 10%;
  }
  @media (max-width: 600px) {
    width: 20vw;
    margin-top: 10%;
  }
  @media (max-width: 600px) {
    width: 15vw;
    margin-top: 0;
  }
`;

const NavHover = styled.h1`
  color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};
  font-size: 1.5rem;
  margin-left: auto;
  margin-right: auto;
  overflow: show;
  white-space: nowrap;
  text-align: center;
  pointer-events: none;
`;

const NavbarLinks = ({ desktop }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper desktop={desktop} theme={theme}>

    <Link to="/home" theme={theme}>
            <NavButton src={house}/>
              <NavHover theme={theme}>plöt │ home</NavHover>
          </Link>
    <Link to="/school" theme={theme}>
            <NavButton  src={school}/>
              <NavHover theme={theme}>plöt │ school</NavHover>
          </Link>
    <Link to="/store" theme={theme}>
            <NavButton src={store}/>
              <NavHover theme={theme}>plöt │ store</NavHover>
          </Link>
    </Wrapper>
  )

};

export default NavbarLinks;
