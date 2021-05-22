import styled from 'styled-components';

export const SkillsWrapper = styled.div`
  padding-top: 1rem;
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const MeThumbnail = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 4rem;
  width: 30%;
  @media (max-width: 960px) {
    width: 50%;
  }
`;

export const Details = styled.div`
  flex: 1;
  text-align: center;

  @media (max-width: 960px) {
    width: 100%;
  }

  h1 {
    font-size: 20pt;
    margin-top: -2.5rem;
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
