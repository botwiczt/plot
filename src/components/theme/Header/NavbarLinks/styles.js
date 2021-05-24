import styled from 'styled-components';

export const Wrapper = styled.div`
  a {
    color: #000;
    text-decoration: none;
    text-align: center;

		@media (max-width: 960px) {
			color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
		}
  }

  ${({ desktop }) =>
    desktop
      ? `
			align-items: center;
			display: flex;

			@media (max-width: 960px) {
					display: none;
			}

			a {
					margin-right: 2rem;

					&:last-child {
							margin-right: unset;
					}
			}
		`
      : `
			padding: 3rem;
			display: flex;
			flex-direction: column;

			a {
					margin-bottom: 1rem;

					&:last-child {
							margin-bottom: unset;
					}
			}
	`}
  .navoverlay {
  display: block;
  position: absolute;
  text-align: center;
  opacity: 0;
  transition: .5s ease;
  pointer-events: none;
  }
`;

export const NavHoverDiv = styled.div`
  position: relative;
  :hover .navoverlay {
    opacity: 1;
    transform: scale(1.2);
  }
`;
