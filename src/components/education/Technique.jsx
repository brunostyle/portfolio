import { VariantsContainer, VariantsItem } from "../../animation/Variants";
import { Card, Description, Icon, Line, Redondel, SubTitle } from "../../styles/styles";

const Technique = () => {
  return (
    <VariantsContainer>
      <VariantsItem>
        <Card>
          <div>
            <SubTitle>Escuela Primaria Nº 35</SubTitle>
            <Description>Gobernador Costa - Chubut</Description>
            <span>
              <Icon className="far fa-calendar-alt" />
              <a>2006 - 2011</a>
            </span>
          </div>
          <div>
            <Redondel />
            <Line />
          </div>
          <div></div>
        </Card>
      </VariantsItem>
      <VariantsItem>
        <Card>
          <div></div>
          <div>
            <Redondel />
            <Line />
          </div>
          <div>
            <SubTitle>Escuela Secundaria N° 719 "Peñihue"</SubTitle>
            <Description>Gobernador Costa - Chubut</Description>
            <span>
              <Icon className="far fa-calendar-alt" />
              <a>2012 - 2019</a>
            </span>
          </div>
        </Card>
      </VariantsItem>
      <VariantsItem>
        <Card>
          <div>
            <SubTitle>Universidad del Chubut</SubTitle>
            <Description>Rawson - Chubut</Description>
            <span>
              <Icon className="far fa-calendar-alt" />
              <a>2020 - 2022</a>
            </span>
          </div>
          <div>
            <Redondel />
          </div>
          <div></div>
        </Card>
      </VariantsItem>
    </VariantsContainer>
  );
};

export default Technique;
