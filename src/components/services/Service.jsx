import styled from "styled-components";
import { VariantsItem } from "../../animation/Variants";
import { Description, SubTitle, Icon } from "../../styles/styles";

const Service = ({ icon, title, description }) => {
  return (
    <Card>
      <VariantsItem>
        <Icon className={icon}></Icon>
        <SubTitle>{title}</SubTitle>
        <Description>{description}</Description>
      </VariantsItem>
    </Card>
  );
};

const Card = styled.div`
  padding: 1em;
  background-color: #252020;
  border-radius: 5px;
  transition: 0.5s;
  text-align: center;
  box-shadow: 0 2px 10px #111;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  & ${Description} {
    transition: 0.5s;
  }

  &:hover ${Description} {
    color: #fff;
  }
`;

export default Service;
