import styled from 'styled-components';
import overlayIllustration from 'assets/illustrations/overlay.svg';

export const Wrapper = styled.div`
  padding-bottom: 1rem;
`;

// remove code below to get rid of overlay from background for now
// background-image: url(${overlayIllustration});
// background-size: contain;
// background-position: right top;
// background-repeat: no-repeat;

export const IntroWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Thumbnail = styled.div`
  flex: 1;
  transition: all 0.5s ease;
  margin-left: 1rem;
  text-align: center;
  filter: ${({ theme }) => (theme === 'dark' ? 'invert(1)' : 'invert(0)')};
  @media (max-width: 960px) {
    margin-bottom: -5%;
  }
  @media (max-width: 600px) {
    margin-bottom: -10%;
  }

  img {
    width: 50%;
  }
`;
