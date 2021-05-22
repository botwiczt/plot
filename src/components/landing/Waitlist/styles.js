import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 4rem 0;
`;

export const Details = styled.div`
  text-align: center;

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
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
    font-size: 15pt;
    font-weight: bold;
    line-height: 2;
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }
  }
`;

export const RegisterButton = styled.button`
  width: auto;
  cursor: pointer;
  font-size: 15pt;
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
  @media only screen and (max-width: 407px) {
      border-radius: 10px;
      margin-top: 4%;
    }
`;

export const Input = styled.input`
  font-size: 15pt;
  padding: 10px;
  background: #DCDCDC;
  border: none;
  border-radius: 10px 0 0 10px;
  @media only screen and (max-width: 407px) {
      border-radius: 10px;
    }
`;
