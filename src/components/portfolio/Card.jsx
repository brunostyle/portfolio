import { Link } from 'react-router-dom'
import { Img } from "../../styles/styles";

const Card = ({ id, image, title }) => {
  return (
      <Link to={id.toString()}>
        <Img src={image} alt={title} />
      </Link>
  );
};

export default Card;
