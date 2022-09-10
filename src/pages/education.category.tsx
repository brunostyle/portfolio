import { useParams } from 'react-router-dom';
import { education } from '../assets/data';
import { VariantsContainer } from '../components/framer';
import { EducationCard } from './education.card';
import { EducationItem } from './education.item';

export const EducationCategory = () => {
	const { category = 'technique' } = useParams();
	const educations = education.filter(education => education.category === category);

	return (
		<VariantsContainer>
			{educations.map((edu, i) => (
				<EducationCard key={edu.id} i={i} length={educations.length} component={<EducationItem {...edu} />} />
			))}
		</VariantsContainer>
	);
};
