import styled from 'styled-components';
import detailsIllustration from 'assets/illustrations/details.svg';

export const Wrapper = styled.div`

`;

//AGAIN, removing background
// background-image: url(${detailsIllustration});
// background-size: contain;
// background-position: left top;
// background-repeat: no-repeat;

export const SkillsWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const HeaderDetails = styled.div`
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

  p {
    margin-bottom: 1rem;
    font-size: 15pt;
    font-weight: normal;
    line-height: 1.3;
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }
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
    font-size: 26pt;
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#212121')};

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
a.linkstyle {
  text-decoration: underline;
  color: lightblue;
}
`;

export const ValueDetails = styled.div`
  flex: 1;
  padding-left: 2rem;

  @media (max-width: 960px) {
    padding-left: unset;
    width: 100%;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 26pt;
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#212121')};

    @media (max-width: 960px) {
      text-align: center;
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }
  }

  p {
    margin-bottom: 1rem;
    margin-left: 1rem;
    font-size: 100pt;
    font-weight: normal;
    line-height: 0.4;
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};
    transform: translate(+20px);
    white-space: nowrap;
    cursor: pointer;
  animation: 1s Zoom linear infinite,
  1s Always ease alternate infinite;
  }
  @keyframes Zoom {
      100% { background-position: 100vw ; }
  }

  @keyframes Always {
      100% { transform: scale(1.10);}
  }
    @media (max-width: 960px) {
      text-align: center;
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }
  }
`;

export const Thumbnail = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 80%;
    margin-bottom: 1rem;
  }

  img {
    width: 100%;
  }
`;

export const ThumbnailWind = styled.div`
  flex: 1;
  margin-left: 2rem;

  @media (max-width: 960px) {
    width: 80%;
    margin-bottom: 1rem;
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
