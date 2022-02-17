import { Outlet } from "react-router-dom"
import Push from "../../animation/Push";
import { Description, Title, Nav, Link, SubTitle } from '../../styles/styles';

const Education = () => {
    return (
        <div>
            <Title>Education</Title>
            <Description>My personal education</Description>
            <Push>
                <Nav>
                    <Link end to="">
                        <span className="fas fa-user-graduate" />
                        <SubTitle>Technique</SubTitle>
                        <i className="fas fa-chevron-up" />
                    </Link>
                    <Link to="courses">
                        <span className="fas fa-book" />
                        <SubTitle>Courses</SubTitle>
                        <i className="fas fa-chevron-up" />
                    </Link>
                </Nav>
            </Push>
            <Outlet />
        </div>
    )
}

export default Education;