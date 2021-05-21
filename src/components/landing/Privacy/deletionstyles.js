import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  text-align: center;
  margin-top: 5px;
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
  @media only screen and (max-width: 672px) {
      border-radius: 3px;
    }
`;

export const Input = styled.input`
  font-size: 15pt;
  padding: 10px;
  background: #DCDCDC;
  border: none;
  border-radius: 10px 0 0 10px;
  @media only screen and (max-width: 672px) {
      border-radius: 3px;
    }
`;
