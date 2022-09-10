import { AiOutlineCalendar } from '../assets/icons';
import { IEducation } from '../helpers/interface';
import { Description, Icon, Nav, SubTitle } from '../styles';
import { EducationCard } from '../styles/education';

export const EducationItem = ({ school, location, date }: IEducation) => (
	<EducationCard>
		<SubTitle>{school}</SubTitle>
		<Description>{location}</Description>
		<Nav>			
			<Icon><AiOutlineCalendar /></Icon>
			<a>{date}</a>
		</Nav>
	</EducationCard>
);
