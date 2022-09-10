import { useParams } from 'react-router-dom';
import { VariantsContainer } from '../components/framer';
import { SkillItem } from './skills.item';
import { skills } from '../assets/data';
import { Container } from '../styles';

export const SkillCategory = () => {    
    const { category = 'frontend' } = useParams();
    const skillers = skills.filter(skill => skill.category === category);
    return (
        <VariantsContainer>
            <Container>
                {skillers.map(skill => (
                    skill.category === category && <SkillItem key={skill.id} {...skill} />
                ))}
            </Container>
        </VariantsContainer>
    )
}
