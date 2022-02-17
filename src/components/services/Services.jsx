import { Container, Description, Title } from "../../styles/styles";
import services from "../../data/json/services.json";
import Service from "./Service";
import { VariantsContainer } from "../../animation/Variants";

const Services = () => {
  return (
    <div>
      <Title>Services</Title>
      <Description>Services that I offer to my clients</Description>
      <VariantsContainer>
        <Container>
          {services.map((service) => (
            <Service key={service.id} {...service} />
          ))}
        </Container>
      </VariantsContainer>
    </div>
  );
};

export default Services;
