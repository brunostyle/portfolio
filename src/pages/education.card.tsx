import { IoIosArrowDropdown } from '../assets/icons';
import { VariantsItem } from '../components/framer';
import { EducationContainer, EducationIcon, EducationLine } from '../styles/education';

interface IEducationCard {
	i: number;
	length: number;
	component: JSX.Element;
}

export const EducationCard = ({ i, length, component }: IEducationCard) => {
	const isPar = i % 2 === 0;
	const last = length === i + 1;
	return (
		<VariantsItem>
			{isPar ? (
				<EducationContainer>
					{component}
					<span>
						<EducationIcon>
							<IoIosArrowDropdown />
						</EducationIcon>
						{!last && <EducationLine />}
					</span>
					<span />
				</EducationContainer>
			) : (
				<EducationContainer>
					<span />
					<span>
						<EducationIcon>
							<IoIosArrowDropdown />
						</EducationIcon>
						{!last && <EducationLine />}
					</span>
					{component}
				</EducationContainer>
			)}
		</VariantsItem>
	);
};
