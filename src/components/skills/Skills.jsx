import { Outlet } from 'react-router-dom';
import Push from '../../animation/Push';
import { Description, Title, SubTitle, Nav, Link } from '../../styles/styles';

const Skills = () => {
  return (
    <div>
      <Title>Skills</Title>
      <Description>My technical level</Description>
      <Push>
        <Nav>
          <Link end to="">
            <span className="fas fa-code" />
            <SubTitle>Frontend</SubTitle>
            <i className="fas fa-chevron-up" />
          </Link>
          <Link to="backend">
            <span className="fas fa-database" />
            <SubTitle>Backend</SubTitle>
            <i className="fas fa-chevron-up" />
          </Link>
        </Nav>
      </Push>
      <Outlet />
    </div>
  )
}

export default Skills;