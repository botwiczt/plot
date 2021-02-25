import styled from 'styled-components';

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

export const Details = styled.div`
  flex: 1;
  padding-left: 2rem;
  text-align: center;

  @media (max-width: 960px) {
    padding-left: unset;
    width: 100%;
  }

  h1 {
    margin-bottom: 1rem;
    font-size: 30pt;
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }
  }

  p {
    margin-bottom: 1rem;
    font-size: 15pt;
    font-weight: normal;
    line-height: 2;
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }
  }
`;

export const Thumbnail = styled.div`
  flex: 1;
  text-align: center;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  img {
    width: 60%;
  }
`;

export const RegisterButton = styled.button`
  width: auto;
  cursor: pointer;
  font-size: 1.5rem;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  background: black;
  color: white;
  border: none;
  border-radius: 0 10px 10px 0;
  transition: all 0.5s ease;
  :hover {
    box-shadow: inset 0 0 100px 100px #444d56;
    transform: scale(1.05);
  }
  @media only screen and (max-width: 672px) {
      border-radius: 3px;
      margin-top: 4%;
    }
`;

export const Input = styled.input`
  font-size: 1.5rem;
  padding: 10px;
  background: #DCDCDC;
  border: none;
  border-radius: 10px 0 0 10px;
  @media only screen and (max-width: 672px) {
      border-radius: 3px;
    }
`;
