import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-top: 1rem;
  text-align: center;
  margin-bottom: 3rem;
`;

export const Details = styled.div`

  a {
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};
    border-bottom: 1px dotted;
    text-decoration: none;
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
    font-size: 18pt;
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }
  }

  p {
    margin-bottom: 1.2rem;
    font-size: 15pt;
    font-weight: bold;
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
