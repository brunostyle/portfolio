import styled from 'styled-components';
import { Nav } from '.';

export const EducationContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr max-content 1fr;
	column-gap: 1.5rem;
	text-align: center;

	@media (max-width: 400px) {
		grid-template-columns: 1fr;
		margin-bottom: 2.5em;
		i {
			display: none;
		}
	}
`;

export const EducationIcon = styled.i`
	margin-top: 2em;
	display: block;
	color: blue;
`;

export const EducationLine = styled.i`
	display: block;
	width: 2px;
	height: 90%;
	background: #003674;
	box-shadow: 0 1px 10px blue, 0 -1px 10px #003674;
	transform: translate(0.43em, -0.30em);
`;

export const EducationCard = styled.div`
	padding: 1em;
	background-color: rgba(0, 0, 0, .3);
	backdrop-filter: blur(13px);
	border-radius: 10px;
	transition: 0.5s;
	text-align: center;
	box-shadow: inset 0 2px 10px rgba(0, 0, 0, .8);
	display: flex;
	flex-direction: column;
	align-items: center;

	&:hover {
		background-color: rgba(0, 0, 0, .8);
	}

	& ${Nav} {
		margin: 0;
	}
`;
