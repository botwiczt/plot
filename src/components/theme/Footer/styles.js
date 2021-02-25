import footerIllustration from 'assets/illustrations/footer.svg';
import styled from 'styled-components';

export const Wrapper = styled.div`
  @media (max-width: 1960px) {
    padding: 0 0 5rem;
  }
`;

//remove background again
//background-image: url(${footerIllustration});
//background-size: cover;
//background-position: top;
//background-repeat: no-repeat;

export const Flex = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  @media (max-width: 680px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
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
  h2,
  a,
  span {
    color: #212121;
    font-size: 1rem;
    font-weight: normal;
    line-height: 0.4;
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};
  }

  @media (max-width: 680px) {
    margin-bottom: 2rem;
  }
`;

export const Privacy = styled.button`
  background: none;
  border: none;
  width: 100%;
  filter: ${({ theme }) => (theme === 'dark' ? 'invert(1)' : 'invert(0)')};
  transition: 0.3s all;
  cursor: pointer;
  @media (max-width: 960px) {
    text-align: right;
  }

  img {
    margin-bottom: unset;
  }
`;