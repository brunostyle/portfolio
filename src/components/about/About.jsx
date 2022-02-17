import styled, { keyframes } from 'styled-components';
import { Description, Title } from '../../styles/styles';
import bruno from '../../data/general/bruno.jpg';
import CV from '../../data/CV/cv_bruno.pdf';
import Spring from '../../animation/Spring';
import Push from '../../animation/Push';

const About = () => {
    return (
        <Container>
            <Spring>
                <Title>About</Title>
                <Description>My introduction</Description>
                <Push>
                    <Image>
                        <img src={bruno} alt="bruno" />
                    </Image>
                </Push>
                <Description>I am a web developer, with extensive knowledge and years of experience, working in web technologies and UI / UX design, delivering quality work.</Description>
                <Experience>
                    <div>
                        <Hours>05+</Hours>
                        <Description>years of experience</Description>
                    </div>
                    <div>
                        <Hours>20+</Hours>
                        <Description>finished projects</Description>
                    </div>
                    <div>
                        <Hours>1000+</Hours>
                        <Description>hours worked</Description>
                    </div>
                </Experience>
                <Button href={CV} download="cv_bruno.pdf"><i className="far fa-file-pdf" /> Download CV</Button>
            </Spring>
        </Container>
    )
}

const Container = styled.div`
    text-align: center;
`;

const Experience = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1em;
    margin-bottom: 1.5em;
`;

const animate = keyframes`
    0% {transform: rotate(0deg)}
    100% {transform: rotate(360deg)}
`;

const small = keyframes`
    0%{transform: scale(.9); opacity: .8;}
    100%{transform: scale(1); opacity: 1;}
`;

const Image = styled.div`
    animation-name: ${small};
    animation-duration: 3s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    width: 9.3em;
    height: 9.3em;
    border-radius: 0 50px 0 50px;
    position: relative;
    overflow: hidden;
    margin: auto;

    &::before {
        content: '';
        position: absolute;
        width: 9.3em;
        height: 15em;
        left: 0;
        top: -3.1em;
        background-color: blue;
        animation-name: ${animate};
        animation-timing-function: linear;
        animation-duration: 8s;
        animation-iteration-count: infinite;
    }

    img {        
        background-color: #141414;
        position: absolute;
        inset: 2px;
        width: 9em;
        height: 9em;
        z-index: 100;
        border-radius: 0 50px 0 50px;
    }
`;

const Hours = styled.h5`
    font-size: 1em;
    margin-bottom: 0;
`;

const Button = styled.a`
    color: #fff;
    padding: .5em 1em;
    border-radius: 20px 0 20px 0;
    transition: .3s ease;
    border: none;
    cursor: pointer;
    background-color: blue;
`;

export default About
