import styled from "styled-components";
import Logo from "../../animation/Logo";
import { VariantsContainer, VariantsItem } from "../../animation/Variants";
import { Description, Title } from "../../styles/styles";

const Home = () => {
  return (
      <Container>
        <Logo />
        <Description>Hello I am</Description>
        <Title>Bruno Millalipe</Title>
        <Description>- Web Developer -</Description>
        <VariantsContainer>
          <Contact>
            <VariantsItem>
              <Icon color="red">
                <i className="fas fa-envelope"></i>
                <Description>brunomstyle@gmail.com</Description>
              </Icon>
            </VariantsItem>
            <VariantsItem>
              <Icon color="white">
                <i className="fab fa-github-square"></i>
                <Description>github.com/brunostyle</Description>
              </Icon>
            </VariantsItem>
            <VariantsItem>
              <Icon color="yellow">
                <i className="fab fa-instagram"></i>
                <Description>instagram.com/bruno.14</Description>
              </Icon>
            </VariantsItem>
          </Contact>
        </VariantsContainer>
      </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 3em;
`;

const Contact = styled.div`
  @media screen and (min-width: 720px) {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1em;
  }
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  i {
    font-size: 1.2em;
    color: ${(props) => (props.color ? props.color : "blue")};
  }

  ${Description} {
    color: #fff;
  }
`;

export default Home;
