import React, {useContext} from 'react';
import { Link } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Wrapper, NavHoverDiv } from './styles';
import house from 'assets/illustrations/homeicon.svg';
import school from 'assets/illustrations/schoolicon.svg';
import store from 'assets/illustrations/storeicon.svg';
import styled from "styled-components";

const NavButton = styled.img`
  text-align: center;
  width: 5.5vw;
  cursor: pointer;
  border: 6px solid #000000;
  box-shadow: 5px 5px #000000;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 30px;
  transition: all 0.5s ease;
  filter: ${({ theme }) => (theme === 'dark' ? 'invert(1)' : 'invert(0)')};
  :hover {
    background: #CCCCCC;
    transform: scale(1.2);
    opacity: 0.45;
  }
  @media only screen and (max-width: 1200px) {
    box-shadow: 3px 3px #000000;
  }
  @media only screen and (max-width: 1000px) {
    box-shadow: 0px 0px;
  }
  @media (max-width: 960px) {
    mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
  }
`;

const NavHover = styled.h1`
  font-size: 22px;
  display: table;
  overflow: hidden;
  white-space: nowrap;
  color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
  @media only screen and (max-width: 2000px) {
    font-size: 25px;
  }
  @media only screen and (max-width: 1600px) {
    font-size: 20px;
  }
  @media only screen and (max-width: 1200px) {
    font-size: 19px;
  }
  @media only screen and (max-width: 1024px) {
    font-size: 16px;
  }
  @media only screen and (max-width: 800px) {
    white-space: nowrap;
    font-size: 17px;
  }
`;

const NavbarLinks = ({ desktop }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper desktop={desktop} theme={theme}>

    <Link to="/home" theme={theme}>
          <NavHoverDiv>
            <NavButton src={house} theme={theme}/>
            <div class="navoverlay">
              <NavHover theme={theme}>plöt │ home</NavHover>
            </div>
          </NavHoverDiv>
          </Link>
    <Link to="/school" theme={theme}>
          <NavHoverDiv>
            <NavButton src={school} theme={theme}/>
            <div class="navoverlay">
              <NavHover theme={theme}>plöt │ school</NavHover>
            </div>
          </NavHoverDiv>
          </Link>
    <Link to="/store" theme={theme}>
          <NavHoverDiv>
            <NavButton src={store} theme={theme}/>
            <div class="navoverlay">
              <NavHover theme={theme}>plöt │ store</NavHover>
            </div>
          </NavHoverDiv>
          </Link>

      {/*<AnchorLink href="#contact">plöt store</AnchorLink>*/}

    </Wrapper>
  )

};

export default NavbarLinks;
