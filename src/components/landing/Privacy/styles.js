import styled from 'styled-components';

export const Wrapper = styled.div`
`;

export const SkillsWrapper = styled.div`
  padding: 4rem 0;
  padding-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  flex: 1;
  text-align: center;

  @media (max-width: 960px) {
    width: 100%;
  }

  h1 {
    margin-bottom: 1rem;
    font-size: 30pt;
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }
  }

  h2 {
    margin-bottom: 1rem;
    font-size:18pt;
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }
  }

  p {
    margin-bottom: 1rem;
    font-size: 15pt;
    font-weight: normal;
    line-height: 2;
    text-align: left;
    margin-left: auto;
    margin-right: auto;
    max-width: 500px;
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }
  }
`;