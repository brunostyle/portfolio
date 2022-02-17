import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Spring from "../animation/Spring";
import background from "../data/general/home.jpg";

//--------------------CONTAINERS--------------------

export const ContainerApp = styled.div`
    overflow: hidden;
    width: 90%;
    max-width: 800px;
    margin: 0 auto 3em;
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1em;
`;

//--------------------TITLES--------------------

export const Title = ({children}) => {
    return (
        <Spring>
            <TitleProto>{children}</TitleProto>
        </Spring>
    )
}

const TitleProto = styled.h3`
    text-align: center;
    margin: 0;
    font-size: 1.5em;
`;

export const SubTitle = styled.h3`
    text-align: center;
    font-size: 1em;
    font-weight: bold;
    margin: 0;
`;

export const Description = styled.p`
    text-align: center;
    color: gray;
    font-size: 1em;
`;

//--------------------IMG--------------------

export const Img = styled.img`
    border-radius: 20px 0 20px 0;
    margin: 1.5em 0;
    cursor: pointer;
`;

//--------------------ICON--------------------

export const Icon = styled.i`
    color: blue;
    font-size: 1.5em;
    margin: 0 .6em .6em;
`;

//--------------------NAV--------------------

export const Nav = styled.nav`
    display: flex;
    gap: 1em;
    justify-content: center;
    margin-bottom: 2em;
`;

//--------------------CARD--------------------

export const Card = styled.div`
    display: grid;
    grid-template-columns: 1fr max-content 1fr;
    column-gap: 1.5rem;
    text-align: center;
`;

//--------------------EDUCATION--------------------

export const Redondel = styled.span`
    margin-top: 3em;
    display: inline-block;
    width: 13px;
    height: 13px;
    background: blue;
    border-radius: 50%;
`;

export const Line = styled.span`
    display: block;
    width: 2px;
    height: 100%;
    background: blue;
    transform: translate(6px, -7px);
`;

//--------------------BACKGROUND--------------------

export const Background = styled.div`
  background-image: url(${background});
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  background-blend-mode: soft-light;
  background-color: rgba(0, 0, 0, 0.6);
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  min-height: 100vh;
`;

//--------------------LINK--------------------

export const Link = styled(NavLink)`
    display: inline-block;
    color: #fff;
    font-size: 1em;
    display: flex;
    gap: .5em;
    align-items: center;
    font-weight: bold;
    padding: .5em 1em;
    border-radius: 20px 0 20px 0; 
    border: 2px solid blue;
    transition: .3s ease;
    cursor: pointer;
    &.active {
        background-color: blue;

        i {
            transform: rotate(180deg);
        }
    }
`;