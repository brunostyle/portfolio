import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import background from '../assets/img/home.jpg';

//--------------------CONTAINERS--------------------

export const ContainerApp = styled.div`
	overflow: hidden;
	width: 90%;
	max-width: 800px;
	margin: 0 auto 3em;
`;

export const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	gap: 1em;
`;

export const Title = styled.h3`
	text-align: center;
	margin: 0;
	font-size: 1.5em;
`;

export const SubTitle = styled.h3`
	text-align: center;
	font-size: 1em;
	font-weight: bold;
	margin: 0;
`;

export const Description = styled.p`
	text-align: center;
	color: gray;
	font-size: 1em;
`;

//--------------------IMG--------------------

export const Img = styled.img`
	border-radius: 20px 0 20px 0;
	object-fit: cover;
	margin: 0 0 1.5em;
	cursor: pointer;
`;

//--------------------ICON--------------------

export const Icon = styled.span`
	color: #003674;
	font-size: 1.5em;
`;

//--------------------NAV--------------------

export const Nav = styled.nav`
	display: flex;
	gap: 1em;
	align-items: center;
	justify-content: center;
	margin-bottom: 2em;
`;

//--------------------CARD--------------------

export const Card = styled.div`
	display: grid;
	grid-template-columns: 1fr max-content 1fr;
	column-gap: 1.5rem;
	text-align: center;
`;

//--------------------BACKGROUND--------------------

export const Background = styled.div`
	background-image: url(${background});
	background-position: center;
	background-attachment: fixed;
	background-size: cover;
	background-blend-mode: soft-light;
	background-color: rgba(0, 0, 0, 0.6);
	overflow: hidden;
	position: absolute;
	top: 0;
	left: 0;
	z-index: -1;
	width: 100%;
	min-height: 100vh;
`;

//--------------------LINK--------------------

export const Link = styled(NavLink)`
	display: inline-block;
	background-color: rgba(0, 0, 0, .6);
	color: #003674;
	border-radius: 20px 0 20px 0;
	font-size: 1em;
	display: flex;
	gap: 0.5em;
	align-items: center;
	font-weight: bold;
	padding: 0.5em 1em;
	transition: 0.3s ease;
	cursor: pointer;
	border: 2px solid transparent;
	&.active {
		color: #003674;
		box-shadow: 0 0px 4px #003674;
		border: 2px solid #003674;
		svg:nth-child(3) {
			transform: rotate(180deg);
		}
	}
`;
