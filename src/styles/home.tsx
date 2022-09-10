import styled from 'styled-components';
import { Description } from './index';

export const HomeContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-top: 3em;
`;

export const HomeContact = styled.div`
	@media screen and (min-width: 720px) {
		width: 100%;
		position: absolute;
		bottom: 0;
		left: 0;
		padding: 1em;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1em;
	}
`;

export const HomeIcon = styled.div`
	display: flex;
	align-items: center;
	gap: 1em;
	color: ${props => (props.color ? props.color : 'blue')};
	${Description} {
		color: #fff;
	}
`;
