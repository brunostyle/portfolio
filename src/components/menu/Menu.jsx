import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Menu = () => {
  return (
    <Nav>
      <NavItem to="/"><i className="fas fa-home" /></NavItem>
      <NavItem to="/about"><i className="fas fa-address-card" /></NavItem>
      <NavItem to="/education"><i className="fas fa-user-graduate" /></NavItem>
      <NavItem to="/skills"><i className="fas fa-code" /></NavItem>
      <NavItem to="/portfolio"><i className="fas fa-briefcase" /></NavItem>
      <NavItem to="/services"><i className="fas fa-laptop-code" /></NavItem>
    </Nav>
  );
};

const NavItem = styled(NavLink)`
  display: block;
  text-decoration: none;
  padding: 0.5em 1em;
  color: gray;
  transition: 0.3s;

  &.active {
    color: #fff;
    transform: scale(1.5);
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  padding-top: 1em;
  margin-bottom: 1em;
`;

export default Menu;
