import { useNavigate, useParams } from "react-router-dom"
import { Description, Img, SubTitle } from "../styles";
import { PortfolioCard, PortfolioContainer, PortfolioLink } from "../styles/portfolio";
import { portfolio} from "../assets/data";
import { Push } from "../components/framer";

export const PortfolioItem = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { image, description, link, title } = portfolio.find(work => work.id === Number(id))!;
    const close = () => navigate('/portfolio');
    
    return (
        <PortfolioContainer onClick={close}>
            <Push>
                <PortfolioCard>
                    <Img style={{maxWidth: '18.75em'}} src={image} alt={title} onClick={e => e.stopPropagation()} />
                    <SubTitle>{title}</SubTitle>
                    <Description>{description}</Description>
                    <PortfolioLink href={link} target="_blank">See the page</PortfolioLink>
                </PortfolioCard>
            </Push>
        </PortfolioContainer>
    )
}
