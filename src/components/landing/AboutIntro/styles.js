import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-bottom: 4rem;
`;

export const IntroWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
  }
  h1 {
    font-size: 20pt;
    color: ${({ theme }) => (theme === 'light' ? '#212121' : '#fff')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }
  }
  h2 {
    font-size: 16pt;
    color: ${({ theme }) => (theme === 'light' ? '#212121' : '#fff')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }
  }
  h3 {
    font-size: 40pt;
    color: ${({ theme }) => (theme === 'light' ? '#212121' : '#fff')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }

    @media (max-width: 680px) {
      font-size: 40pt;
    }
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
  margin-left: 3rem;
  @media (max-width: 960px) {
    margin-left: 2rem;
    width: 70%;
  }

  img {
    width: 90%;
  }
`;
