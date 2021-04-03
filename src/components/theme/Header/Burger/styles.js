import styled from 'styled-components';

export const Wrapper = styled.div`
  z-index: 998;
  top: 2rem;
  right: 1.8rem;
  display: none;
  cursor: pointer;
  transition: left 500ms cubic-bezier(0.6, 0.05, 0.28, 0.91);
  position: absolute;

  @media (max-width: 960px) {
    display: block;
  }

  ${({ sidebar }) =>
    sidebar &&
    `
			top: 1.4rem;

			@media (max-width: 960px) {
				position: fixed;
			}

			@media (max-width: 600px) {

			}
	`}
`;

export const Bar = styled.div`
	width: 1.8rem;
	height: .3rem;
  border-radius: 3px;
	margin-bottom: .6rem;
  z-index: 999;
	transition: transform 500ms cubic-bezier(0.6, 0.05, 0.28, 0.91),
	opacity 500ms,
	box-shadow 250ms,
	background-color 500ms;
  background-color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')} !important;

	@media (max-width: 600px){
		width: 1.6rem;
	}

	${({ top, sidebar, theme }) =>
    top &&
    sidebar &&
		`
		background-color: ${(theme === 'light' ? '#212121' : '#fff')};
		transform: translateY(8px) rotate(-135deg);
    margin-top: 10px;
	`}

	${({ bottom, sidebar, theme }) =>
    bottom &&
    sidebar &&
		`
			background-color: ${(theme === 'light' ? '#212121' : '#fff')};
			transform: translateY(-6px) rotate(-45deg);
	`}
`;
