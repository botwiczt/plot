import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 4rem 0;
`;

export const MeThumbnail = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 40%;
  @media (max-width: 960px) {
    width: 60%;
  }
`;

export const Details = styled.div`
  text-align: center;

  h1 {
    font-size: 20pt;
    margin-top: 1.5rem;
    margin-bottom: 0;
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }
  }
  h2 {
    font-size: 20pt;
    background-image:
    linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: move 60s linear infinite;
    @keyframes move {
    	to {
    		background-position: 4500vh;
    	}
    }
    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }
    @media (max-width: 680px) {
      animation: move 120s linear infinite;
    }
  }
`;
