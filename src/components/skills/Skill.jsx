import styled, { keyframes } from "styled-components";

const Skill = ({ skill, porcentage, icon }) => {
  return (
    <>
      <Header>
        <Header>
          <Icon className={icon} />
          <Title>{skill}</Title>
        </Header>
        <Title>{porcentage}</Title>
      </Header>
      <Bars porcentage={porcentage}></Bars>
    </>
  );
};

const Title = styled.h4`
  font-size: 1em;
`;

const Icon = styled.i`
  font-size: 1.4em;
`;

const Header = styled.div`
  display: flex;
  gap: 1em;
  justify-content: space-between;
  align-items: center;
`;

const animationBars = keyframes`
    0% {width: 0%}
    100% {width: ${(props) => props.porcentage}}
`;

const Bars = styled.div`
  height: 0.3em;
  background-color: blue;
  width: ${(props) => props.porcentage};
  animation-name: ${animationBars};
  animation-duration: 0.8s;
  animation-timing-function: ease;
`;

export default Skill;
