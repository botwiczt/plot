import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1rem;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Thumbnail = styled.div`
  flex: 1;
  transition: all 0.5s ease;
  text-align: center;
  filter: ${({ theme }) => (theme === 'dark' ? 'invert(1)' : 'invert(0)')};
  @media (max-width: 960px) {
    margin-bottom: -5%;
  }
  @media (max-width: 600px) {
    margin-bottom: -10%;
  }
  img {
    width: 50%;
  }
`;
