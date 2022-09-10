import styled, { keyframes } from 'styled-components';

export const AboutContainer = styled.div`
	text-align: center;
`;

export const AboutExperience = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 1em;
	margin-bottom: 1.5em;
`;

export const animate = keyframes`
 0% {transform: rotate(0deg)}
 100% {transform: rotate(360deg)}
`;

export const small = keyframes`
 0%{transform: scale(.9); opacity: .8;}
 100%{transform: scale(1); opacity: 1;}
`;

export const AboutImage = styled.div`
	animation-name: ${small};
	animation-duration: 3s;
	animation-direction: alternate;
	animation-iteration-count: infinite;
	width: 9.3em;
	height: 9.3em;
	border-radius: 0 50px 0 50px;
	position: relative;
	overflow: hidden;
	margin: auto;

	&::before {
		content: '';
		position: absolute;
		width: 9.3em;
		height: 15em;
		left: 0;
		top: -3.1em;
		background-color: #003674;
		animation-name: ${animate};
		animation-timing-function: linear;
		animation-duration: 8s;
		animation-iteration-count: infinite;
	}

	img {
		background-color: #000;
		position: absolute;
		inset: 2px;
		width: 9em;
		height: 9em;
		z-index: 100;
		border-radius: 0 50px 0 50px;
	}
`;

export const AboutHours = styled.h5`
	font-size: 1em;
	margin-bottom: 0;
`;

export const AboutButton = styled.a`	
	display: inline-block;
	color: #003674;
	font-weight: 700;
	padding: 0.6em 1em;
	border-radius: 20px 0 20px 0;
	border: 2px solid #003674;
	background-color: rgba(0, 0, 0, .6);
	transition: 0.3s ease;
`;
