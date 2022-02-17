import { VariantsContainer, VariantsItem } from "../../animation/Variants";
import { Card, Description, Icon, Line, Redondel, SubTitle } from "../../styles/styles";

const Courses = () => {
  return (
    <VariantsContainer>
      <VariantsItem>
        <Card>
          <div>
            <SubTitle>HTML and CSS</SubTitle>
            <Description>Udemy Courses</Description>
            <span>
              <Icon className="far fa-calendar-alt" />
              <a>2016 - 2017</a>
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
            <SubTitle>JavaScript</SubTitle>
            <Description>Platzi</Description>
            <span>
              <Icon className="far fa-calendar-alt" />
              <a>2017 - 2019</a>
            </span>
          </div>
        </Card>
      </VariantsItem>
      <VariantsItem>
        <Card>
          <div>
            <SubTitle>React and Firebase</SubTitle>
            <Description>Udemy Courses</Description>
            <span>
              <Icon className="far fa-calendar-alt" />
              <a>2019 - 2020</a>
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
            <SubTitle>Bases de Datos Relacionales</SubTitle>
            <Description>Platzi</Description>
            <span>
              <Icon className="far fa-calendar-alt" />
              <a>2020 - 2021</a>
            </span>
          </div>
        </Card>
      </VariantsItem>
      <VariantsItem>
        <Card>
          <div>
            <SubTitle>PostgreSQL</SubTitle>
            <Description>Udemy Courses</Description>
            <span>
              <Icon className="far fa-calendar-alt" />
              <a>2020 - 2021</a>
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

export default Courses;
