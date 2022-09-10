import { Outlet } from 'react-router-dom';
import { Description, Title, SubTitle, Nav, Link } from '../styles';
import { RiCodeSSlashLine, AiFillDatabase, IoIosArrowUp } from '../assets/icons';

export const SkillsPage = () => (
	<>
		<Title>Skills</Title>
		<Description>My technical level</Description>
		<Nav>
			<Link end to="">
				<RiCodeSSlashLine />
				<SubTitle>Frontend</SubTitle>
				<IoIosArrowUp />
			</Link>
			<Link to="backend">
				<AiFillDatabase />
				<SubTitle>Backend</SubTitle>
				<IoIosArrowUp />
			</Link>
		</Nav>
		<Outlet />
	</>
);
