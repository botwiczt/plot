import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 960px) {
    padding: 0;
  }
`;

export const Brand = styled.a`
  color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  filter: ${({ theme }) => (theme === 'dark' ? 'invert(1)' : 'invert(0)')};

  @media (max-width: 960px) {
    mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
  }
`;
