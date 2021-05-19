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

export const Details = styled.div`
  flex: 1;
  padding-left: 2rem;
  background: ${({ theme }) => (theme === 'dark' ? '#4C4C4C' : '#E9F0FC')};
  border-radius: 10px;
  border: 10px solid;
  padding: 1rem 2.5rem;
  margin: 1rem;

  @media (max-width: 960px) {
    padding-left: unset;
    width: 80%;
    padding: 1rem 1rem;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 2rem;
    line-height: 35px;
    text-align: center;
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};
  }

  p1 {
    font-size: 1.2rem;
    text-align: left;
    line-height: 1.75;
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};
  }

  p {
    margin-bottom: 2rem;
    font-size: 1.5rem;
    font-weight: normal;
    line-height: 1.75;
    text-align: center;
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};
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
  width: 400px;
  background-color: #444d56;
  color: white;
  text-align: center;
  border-radius: 30px;
  padding: 15px;
  font-size: 1.1rem;
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
`;

export const Thumbnail = styled.div`
  flex: 1;
  text-align: center;
  filter: ${({ theme }) => (theme === 'dark' ? 'invert(1)' : 'invert(0)')};

  @media (max-width: 960px) {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
  }

  img {
    width: 60%;
  }
`;

export const DetailsText = styled.div`
  flex: 1;
  text-align: left;
  margin: 3rem;

  h1 {
    margin-bottom: 2rem;
    font-size: 2rem;
    line-height: 35px;
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};
  }

  p {
    margin-bottom: 2rem;
    font-size: 1.5rem;
    font-weight: normal;
    line-height: 1.75;
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};
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
  width: 400px;
  background-color: #444d56;
  color: white;
  text-align: center;
  border-radius: 30px;
  padding: 15px;
  font-size: 1.1rem;
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
`;
