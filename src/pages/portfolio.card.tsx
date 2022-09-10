import { Link } from 'react-router-dom';
import { Img } from '../styles';
import { IPortfolio } from '../helpers/interface';

export const PortfolioCard = ({ id, image, title }: IPortfolio) => (
	<Link to={id.toString()}>
		<Img src={image} alt={title} />
	</Link>
);
