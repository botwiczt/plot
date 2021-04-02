import styled from 'styled-components';

export const Wrapper = styled.div`
  a {
    color: #000;
    text-decoration: none;
    text-align: center;
    position: absolute;

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
			padding: 0rem;
			display: flex;
			flex-direction: column;

			a {
					margin-bottom: 1rem;

					&:last-child {
							margin-bottom: unset;
					}
			}
	`}
`;

export const Brand = styled.a`
  color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
  width: 15%;

  @media (max-width: 960px) {
    mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
  }
`;
