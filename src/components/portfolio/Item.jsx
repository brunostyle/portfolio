import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components";
import works from "../../data/json/portfolio.json";
import Tilt from "./Tilt";
import Push from "../../animation/Push";
import { Description, Img, SubTitle } from "../../styles/styles";

const Item = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { image, description, link, title } = works.find(work => work.id === Number(id));
    const click = () => navigate('/portfolio');
    return (
        <Container>
            <Push>
                <Card>
                    <Back onClick={click}><i className="fas fa-times" /></Back>
                    <Tilt>
                        <Img src={image} alt={title} />
                    </Tilt>
                    <SubTitle>{title}</SubTitle>
                    <Description>{description}</Description>
                    <Link href={link} target="_blank">See more</Link>
                </Card>
            </Push>
        </Container>
    )
}

const Back = styled.button`
    position: absolute;
    top: -1em;
    right: -2em;
    padding: .5em;
    font-size: 1.5em;
    background: none;
    border: none;
    color: #fff;
    cursor: pointer;
`;

const Link = styled.a`
    display: inline-block;
    color: #fff;
    font-weight: bold;
    padding: .6em 1em;
    border-radius: 20px 0 20px 0;
    border: 2px solid blue;
    background-color: blue;
`;

const Card = styled.div`
    position: relative;
    width: 90%;
    max-width: 20em;
    margin: 6em auto 0;
    text-align: center;
`;

const Container = styled.div`
    background-color: rgba(0,0,0,.9);
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
`;

export default Item