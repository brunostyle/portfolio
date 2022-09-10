import styled from 'styled-components';
import { Description } from './index';

export const ServiceCard = styled.div`
	padding: 1em;
	background-color: rgba(0, 0, 0, .3);
	backdrop-filter: blur(13px);
	border-radius: 5px;
	transition: 0.5s;
	text-align: center;
	box-shadow: inset 0 2px 10px rgba(0, 0, 0, .8);
	cursor: pointer;
	display: flex;
	flex-direction: column;
	align-items: center;
	& ${Description} {
		transition: 0.5s;
	}

	&:hover {
		background-color: rgba(0, 0, 0, .8);
	}

	&:hover ${Description} {
		color: #fff;
	}
`;
