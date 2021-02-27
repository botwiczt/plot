import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-bottom: 0rem;
`;

export const IntroWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 0rem;
  }

  h4 {
    margin-bottom: 2.5rem;
    font-size: 45pt;
    text-align: center;
    white-space: nowrap;
    overflow: show;
    color: ${({ theme }) => (theme === 'light' ? '#212121' : '#fff')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }

    @media (max-width: 680px) {
      font-size: 26pt;
    }
  }
`;

export const Thumbnail = styled.div`
  flex: 1;
  transition: all 0.5s ease;
  @media (max-width: 960px) {
    margin-left: 0rem;
  }

  img {
    width: 100%;
  }
`;
