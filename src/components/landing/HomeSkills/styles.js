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

export const OpenButton = styled.div`
display: inline;
text-align: center;
cursor: pointer;
font-size: 1rem;
padding-top: 10px;
padding-bottom: 10px;
padding-left: 15px;
padding-right: 15px;
background: black;
color: white;
border: none;
border-radius: 10px;
:hover {
  box-shadow: inset 0 0 100px 100px #444d56;
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
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#212121')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }
  }

  p {
    margin-bottom: 2rem;
    font-size: 1.5rem;
    font-weight: normal;
    line-height: 2.2;
    color: ${({ theme }) => (theme === 'dark' ? '#c7c7c7' : '#000')};

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
  text-decoration: underline;
  color: lightblue;
}
`;


export const ModalStyle = styled.div`
position: fixed;
top: 0;
left: 0;
width:100%;
height: 100%;
background: rgba(0, 0, 0, 0.6);
}
`;

export const ModalStyleMain = styled.div`
position:fixed;
background: white;
width: auto;
padding-left: 60px;
padding-right: 60px;
padding-bottom:30px;
height: auto;
max-height: calc(100vh - 200px);
overflow-y: auto;
top:50%;
left:50%;
font-size:20px;
line-height:40px;
border: solid 15px #000000;
border-radius: 40px;
text-align:left;
transform: translate(-50%,-50%);
animation-name: animatetop;
animation-duration: 1s
@media screen and (max-width: 768px) {
    font-size:15px;
    width: 300px;
  }

@media screen and (max-width: 575px) {
    width: 250px;
  }

@media screen and (max-width: 400px) {
    font-size:16px;
    width: 190px;
  }

@media screen and (max-width: 370px) {
    width: 160px;
  }

@media screen and (max-width: 320px) {
    font-size:15px;
    width: 150px;
  }
}
.display-block {
  display: block;
}
.display-none {
  display: none;
  @keyframes animatetop {
    from {top:-30%; opacity:0}
    to {top:50%; opacity:1}
  }
}
`;

export const CloseButton = styled.h1`
display: table;
position: absolute;
text-align: center;
cursor: pointer;
font-size: 17px;
padding-top: 5px;
padding-bottom: 5px;
padding-left: 15px;
padding-right: 15px;
background: black;
color: white;
border: none;
border-radius: 10px;
:hover {
  box-shadow: inset 0 0 100px 100px #444d56;
}
`;

export const MathLine = styled.div`
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  border-top: 1px solid #fff;
  @media (max-width: 960px) {
    width: 90%;
  }
}
`;
