import { VariantsContainer } from '../../animation/Variants';
import Skill from './Skill';
import skills from '../../data/json/skills.json';
import { useParams } from 'react-router-dom';

const Category = () => {    
    const { category = 'frontend' } = useParams();
    const skillers = skills.filter(skill => skill.category === category);
    return (
        <VariantsContainer>
            {skillers.map(skill => (
                skill.category === category && <Skill key={skill.id} {...skill} />
            ))}
        </VariantsContainer>
    )
}

export default Category
