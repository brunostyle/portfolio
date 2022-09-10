import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FaUserGraduate, AiFillHome, AiFillProfile, RiCodeSSlashLine, BsFillBriefcaseFill, MdDesignServices } from '../assets/icons';

export const Menu = () => (
	<Nav>
		<NavItem to="/">
			<AiFillHome />
		</NavItem>
		<NavItem to="/about">
			<AiFillProfile />
		</NavItem>
		<NavItem to="/education">
			<FaUserGraduate />
		</NavItem>
		<NavItem to="/skills">
			<RiCodeSSlashLine />
		</NavItem>
		<NavItem to="/portfolio">
			<BsFillBriefcaseFill />
		</NavItem>
		<NavItem to="/services">
			<MdDesignServices />
		</NavItem>
	</Nav>
);

const NavItem = styled(NavLink)`
	display: block;
	text-decoration: none;
	padding: 0.5em 1em;
	color: gray;
	transition: 0.3s;

	&.active {
		color: #fff;
		transform: scale(1.5);
	}
`;

const Nav = styled.nav`
	display: flex;
	justify-content: center;
	padding-top: 1em;
	margin-bottom: 1em;
`;
