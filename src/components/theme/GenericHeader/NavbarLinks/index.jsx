import React, {useContext} from 'react';
import { Link } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Wrapper } from './styles';
import back from 'assets/illustrations/leftarrow.svg';
import styled from "styled-components";

const NavButton = styled.img`
  width: 6vw;
  cursor: pointer;
  padding: 10px;
  transition: all 0.5s ease;
  filter: ${({ theme }) => (theme === 'dark' ? 'invert(1)' : 'invert(0)')};
  :hover {
    transform: scale(1.2);
    opacity: 0.45;
  }
  @media (max-width: 960px) {
    width: 12vw;
  }
`;

const NavbarLinks = ({ desktop }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Wrapper desktop={desktop} theme={theme}>
      <Link to="/" theme={theme}>
        <NavButton theme={theme} src={back}/>
      </Link>
    </Wrapper>
  )

};

export default NavbarLinks;