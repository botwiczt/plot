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
`;

export const NavButton = styled.img`
  text-align: center;
  width: 12vw;
  filter: ${({ theme }) => (theme === 'dark' ? 'invert(1)' : 'invert(0)')};
  margin-top: 20%;
  cursor: pointer;
  border: 6px solid #000000;
  box-shadow: 5px 5px #000000;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 30px;
  transition: all 0.5s ease;
  :hover {
    background: #CCCCCC;
    transform: scale(1.2);
    opacity: 0.45;
  }
  @media only screen and (max-width: 1000px) {
    box-shadow: 0px 0px;
  }
  @media (max-width: 600px) {
    width: 20vw;
    margin-top: 10%;
  }
  @media (max-width: 600px) {
    width: 20vw;
    margin-top: 10%;
  }
  @media (max-width: 600px) {
    width: 15vw;
    margin-top: 0;
  }
`;

export const NavHover = styled.h1`
  color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};
  font-size: 1.5rem;
  margin-left: auto;
  margin-right: auto;
  overflow: show;
  white-space: nowrap;
  text-align: center;
  pointer-events: none;
`;
