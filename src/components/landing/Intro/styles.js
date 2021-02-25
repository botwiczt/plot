import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-bottom: 4rem;
`;

// remove code below to get rid of overlay from background for now
// background-image: url(${overlayIllustration});
// background-size: contain;
// background-position: right top;
// background-repeat: no-repeat;

export const IntroWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
    padding: 6rem 0;
  }
`;

export const Details = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  h4 {
    margin-bottom: 2.5rem;
    font-size: 45pt;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
  {/*border-right: solid 3px #000000;*/}
    color: ${({ theme }) => (theme === 'light' ? '#212121' : '#fff')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }

    @media (max-width: 680px) {
      font-size: 30pt;
    }
{/*
  animation: animated-text 1.5s steps(29) 1s 1 normal both,
  animated-cursor 600ms steps(29) infinite;

  @keyframes animated-text{
  from{width: 0%;}
  to{width: 100%;}
  text-align: center;
  }
  @keyframes animated-cursor{
    from{border-right-color: #000000;}
    to{border-right-color: transparent;}
  }*/}
  }

  h1 {
    margin-bottom: 1rem;
    font-size: 30pt;
    text-align: center;
    font-weight: normal;
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
  margin-left: 2rem;
  :hover {
    transform: scale(1.04) rotate(5deg);
  }

  @media (max-width: 960px) {
    width: 80%;
    margin-left: 1rem;
  }

  img {
    width: 100%;
  }
`;

export const ButtonGrow = styled.div`
text-align: center;
transition: all 0.5s ease;
display: table;
margin-left: auto;
margin-right: auto;
:hover {
  box-shadow: inset 0 0 100px 100px #444d56;
  transform: scale(1.15);
}
`;
