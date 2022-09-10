import { VariantsItem } from '../components/framer';
import { ISkill } from '../helpers/interface';
import { SkillCard, SkillIcon, SkillTitle } from '../styles/skills';

export const SkillItem = ({ skill, icon, color }: ISkill) => (
	<VariantsItem>
		<SkillCard>
			<SkillIcon color={color}>{icon}</SkillIcon>
			<SkillTitle>{skill}</SkillTitle>
		</SkillCard>
	</VariantsItem>
);
