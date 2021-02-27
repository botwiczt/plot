import styled from 'styled-components';

export const Wrapper = styled.div`

`;

export const SkillsWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const MoreSkillsWrapper = styled.div`
  margin-top:-8%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  flex: 1;
  padding-left: 2rem;
  text-align: center;

  @media (max-width: 960px) {
    padding-left: unset;
    width: 100%;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 2rem;
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }
  }

  p {
    margin-bottom: 2rem;
    font-size: 1.5rem;
    font-weight: normal;
    line-height: 1.75;
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }
  }
  u.dotting {
  border-bottom: 1px dotted;
  text-decoration: none;
}

.tooltip {
  position: relative;
  display: inline-block;
  cursor: help;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 180px;
  background-color: #444d56;
  color: white;
  text-align: center;
  border-radius: 30px;
  padding: 15px;
  font-size: 1.5rem;
  opacity: 0;
  transition: all .3s ease-in-out;
  position: absolute;
  z-index: 1;
  top: 150%;
  left: 50%;
  margin-left: -100px;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 0.85;
  transform: scale(1.1);
}
a.linkstyle {
  font-size: 2rem;
  color: lightblue;
}
`;

export const Thumbnail = styled.div`
  flex: 1;
  text-align: center;
  filter: ${({ theme }) => (theme === 'dark' ? 'invert(1)' : 'invert(0)')};

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 1rem;
  }

  img {
    width: 60%;
  }
`;
