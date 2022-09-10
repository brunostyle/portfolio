import styled from 'styled-components';

export const PortfolioLink = styled.a`
	display: inline-block;
	color: #003674;
	font-weight: 700;
	padding: 0.6em 1em;
	border-radius: 20px 0 20px 0;
	border: 2px solid #003674;
	background-color: rgba(0, 0, 0, .6);
`;

export const PortfolioCard = styled.div`
	position: relative;
	max-width: 20em;
	width: 90%;
	margin: auto;
	text-align: center;
`;

export const PortfolioContainer = styled.div`
	backdrop-filter: blur(13px);
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	z-index: 100;
	display: grid;
	place-content: center;
`;
