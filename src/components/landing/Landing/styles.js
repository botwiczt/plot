import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0;
`;

export const Banner = styled.div`
  margin: 0;
  width: 100%;
  height: 100vh;
  @media (max-height: 640px) {
    height: auto;
  }
  @media (min-width:410px) and (max-width:960px) {
    height: auto;
  }
  @media (min-width:370px) and (max-width:380px) {
    margin-bottom: 1rem;
  }
`;

export const BannerBody = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1080px) {
    padding-top: 6rem;
  }
  @media (max-width: 960px) {
    flex-direction: column;
    padding: 6rem 0;
  }
`;

export const BannerDetails = styled.div`
  flex: 1;
  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;

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
  h4 {
    margin-bottom: 2.5rem;
    font-size: 45pt;
    text-align: center;
    white-space: nowrap;
    color: ${({ theme }) => (theme === 'light' ? '#212121' : '#fff')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }

    @media (max-width: 680px) {
      font-size: 30pt;
    }

    @media (max-width: 339px) {
      white-space: normal;
    }
  }
`;

export const BannerThumbnail = styled.div`
  flex: 1;
  transition: all 0.5s ease;
  margin-left: 2rem;
  :hover {
    transform: scale(1.04) rotate(5deg);
  }

  @media (max-width: 960px) {
    width: 95%;
    margin-left: 1rem;
  }

  img {
    width: 100%;
  }
`;

export const ArrowImage = styled.img`
  margin-left: auto;
  margin-right: auto;
  width: 6%;
  position: fixed;
  z-index: -1;
  bottom: 0;
  left: 47%;
  filter: ${({ theme }) => (theme === 'dark' ? 'invert(1)' : 'invert(0)')};
  animation: 1s Zoom linear infinite,
  1s Always ease alternate infinite;
  }

  @keyframes Always {
      100% { transform: scale(1.2);}
  }
  @media only screen and (max-width: 768px) {
    left: 44%;
    width: 12%;
  }
`;

export const Content = styled.div`
`;

export const ContentBody = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const ContentBodyLead = styled.div`
  padding: 4rem 0;
  padding-top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const ContentDetails = styled.div`
  flex: 1;
  padding-left: 2rem;
  text-align: center;

  @media (max-width: 960px) {
    padding-left: unset;
    width: 100%;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 26pt;
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#212121')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }
  }

  h2 {
    margin-bottom: 1rem;
    font-size: 15pt;
    font-weight: normal;
    line-height: 1.3;
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }
  }
  p {
    margin-bottom: 2.5rem;
    font-size: 15pt;
    font-weight: normal;
    line-height: 1.3;
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
    font-size: 1rem;
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

export const ContentThumbnailLeft = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 80%;
    margin-bottom: 1rem;
  }

  img {
    width: 100%;
  }
`;

export const ContentThumbnailRight = styled.div`
  flex: 1;
  margin-left: 2rem;

  @media (max-width: 960px) {
    width: 80%;
    margin-bottom: 1rem;
    margin-top: 3.5rem;
    margin-left: 0rem;
  }

  img {
    width: 100%;
  }
`;

export const Line = styled.div`
margin-top: -6%;
text-align: center;
filter: ${({ theme }) => (theme === 'dark' ? 'invert(1)' : 'invert(0)')};
  img {
    width: 35%;
    @media (max-width: 960px) {
      width: 50%;
    }
  }
`;

export const ButtonSoon = styled.button`
  cursor: not-allowed;
  border-radius: 10px;
  padding: 1rem 2.5rem;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  justify-content: center;
  border: none;
  user-select: none;
  transition: all 0.5s ease;
  background: ${({ theme }) => (theme === 'dark' ? '#FFF' : '#000')};
  color: ${({ theme }) => (theme === 'dark' ? '#000' : '#FFF')};
  :hover {
    box-shadow: inset 0 0 100px 100px #FF9999;
  }
`;
