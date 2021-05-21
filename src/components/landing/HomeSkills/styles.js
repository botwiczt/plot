import styled from 'styled-components';

export const Wrapper = styled.div`

`;

export const SkillsWrapper = styled.div`
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


  }

  p {
    margin-bottom: 2rem;
    font-size: 1.5rem;
    font-weight: normal;
    line-height: 2.2;
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
  text-decoration: underline;
  color: lightblue;
}
`;

export const CloseButton = styled.img`
display: table;
position: absolute;
text-align: center;
right: 10px;
top: 10px;
cursor: pointer;
font-size: 1.5rem;
padding-top: 5px;
padding-bottom: 5px;
padding-left: 15px;
padding-right: 15px;
filter: ${({ theme }) => (theme === 'dark' ? 'invert(1)' : 'invert(0)')};
:hover {
  -webkit-filter: brightness(2);
  filter: brightness(2);
}
`;

export const TitleColor = styled.h2`
color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};
text-align: center;
@media (max-width: 590px) {
  font-size: 1.5rem;
}
@media (max-width: 500px) {
  font-size: 1.35rem;
}
@media (max-width: 340px) {
  font-size: 1.1rem;
}
`;

export const TextColor = styled.h3`
color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};
margin-bottom: 2rem;
font-size: 1.5rem;
font-weight: normal;
line-height: 2.2;
text-align:left;
@media (max-width: 590px) {
  font-size: 1.3rem;
}
@media (max-width: 500px) {
  font-size: 1.15rem;
}
@media (max-width: 340px) {
  font-size: 1rem;
}
`;

export const MathLine = styled.div`
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2.5rem;
  border-top: 1px solid #fff;
  @media (max-width: 960px) {
    width: 90%;
  }
}
`;

export const BoxWrapper = styled.div`
box-shadow: 0 0 5px #ccc;
border-radius: 30px;
padding-top: 50px;
padding-bottom: 30px;
margin-bottom: 40px;
max-width: 1200px;
width: 100%;
margin: 50px auto;
margin-top: 0px;
}
`;
