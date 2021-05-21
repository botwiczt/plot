import styled from 'styled-components';

export const Wrapper = styled.div`
  @media (max-width: 1960px) {
    padding: 0 0 5rem;
  }
`;

export const Flex = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  {/*align-items: flex-end;
  justify-content: space-between;*/}

  @media (max-width: 680px) {
    flex-direction: column;
  }

  .tooltip {
    position: relative;
    display: inline-block;
    cursor: help;
  }

  .tooltip .tooltiptext {
    visibility: hidden;
    width: 110px;
    background-color: #444d56;
    color: white;
    text-align: center;
    border-radius: 30px;
    padding: 10px;
    font-size: 1.1rem;
    opacity: 0;
    transition: all .3s ease-in-out;
    position: absolute;
    z-index: 1;
    top: -200%;
    left: -220%;
    @media (max-width: 680px) {
      top: 0%;
      left: 170%;
    }
  }

  .tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 0.85;
    transform: scale(1.1);
  }

  .tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -10px;
  border-width: 10px;
  border-style: solid;
  border-color: #444d56 transparent transparent transparent;
  @media (max-width: 680px) {
    border-color: transparent #444d56 transparent transparent;
    margin-left: -82px;
    margin-top: -23%;
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;

  a {
    margin: 0 0.5rem;

    img {
      margin: 0;
    }

    &:first-child,
    &:last-child {
      margin: 0;
    }
  }
`;

export const Details = styled.div`
@media (max-width: 680px) {
  margin-top: -0.5rem;
}
  h2,
  a,
  span {
    color: #212121;
    font-size: 1rem;
    font-weight: normal;
    margin-left: -0.6rem;
    line-height: 0.4;
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};
  }

  @media (max-width: 680px) {
    margin-bottom: 1rem;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Privacy = styled.div`
  background: none;
  border: none;
  filter: ${({ theme }) => (theme === 'dark' ? 'invert(1)' : 'invert(0)')};
  transition: 0.3s all;
  cursor: pointer;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 680px) {
    margin-top: 0.6rem;
    margin-bottom: 1.5rem;
  }

  img {
    margin-bottom: unset;
  }
`;

export const Creator = styled.div`
  background: none;
  border: none;
  filter: ${({ theme }) => (theme === 'dark' ? 'invert(1)' : 'invert(0)')};
  transition: 0.3s all;
  cursor: pointer;
  margin-left: 0.4rem;
  width: 50%;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 680px) {
    margin-top: -0.8rem;
    margin-bottom: 1.5rem;
    margin-left: 0.9rem;
  }

  img {
    margin-bottom: unset;
  }
`;
