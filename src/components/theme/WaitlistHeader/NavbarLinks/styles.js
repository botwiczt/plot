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
			}
	`}
`;
