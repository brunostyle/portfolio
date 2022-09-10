import { Outlet } from 'react-router-dom';
import { Description, Title, Nav, Link, SubTitle } from '../styles';
import { FaUserGraduate, FaBook, IoIosArrowUp } from '../assets/icons';

export const EducationPage = () => (
	<>
		<Title>Education</Title>
		<Description>My personal education</Description>
		<Nav>
			<Link end to="">
				<FaUserGraduate />
				<SubTitle>Technique</SubTitle>
				<IoIosArrowUp />
			</Link>
			<Link to="courses">
				<FaBook />
				<SubTitle>Courses</SubTitle>
				<IoIosArrowUp />
			</Link>
		</Nav>
		<Outlet />
	</>
);
