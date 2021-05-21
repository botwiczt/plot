import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Wrapper2 = styled.div`
 margin-top: 5%;
`;

export const NavButton = styled.img`
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

export const Brand = styled.a`
  color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
  width: 25%;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  position: absolute;
  filter: ${({ theme }) => (theme === 'dark' ? 'invert(1)' : 'invert(0)')};
  @media (max-width: 960px) {
    width: 30%;
  }
`;
