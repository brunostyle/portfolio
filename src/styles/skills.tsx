import styled from 'styled-components';

export const SkillTitle = styled.h4`
	font-size: 1em;
`;

export const SkillIcon = styled.i`
	font-size: 1.4em;
	color: ${props => props.color};

`;

export const SkillCard = styled.div`
	padding: 1em;
	background-color: rgba(0, 0, 0, .3);
	backdrop-filter: blur(13px);
	border-radius: 5px;
	transition: 0.5s;
	text-align: center;
	box-shadow: inset 0 2px 10px rgba(0, 0, 0, .8);
	display: flex;
	flex-direction: column;
	align-items: center;

	&:hover {
		background-color: rgba(0, 0, 0, .8);
	}
`;
