import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ArrowWrapper = styled.div`
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
    opacity: 0.5;
  }
  @media (max-width: 960px) {
    width: 12vw;
  }
`;

export const Brand = styled.img`
  position: absolute;
  width: 45%;
  margin-left: auto;
  margin-right: auto;
  margin-top: -4px;
  left: 0;
  right: 0;
  filter: ${({ theme }) => (theme === 'dark' ? 'invert(1)' : 'invert(0)')};
  @media (max-width: 960px) {
    width: 55%;
  }
`;
