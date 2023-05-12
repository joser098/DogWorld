import { NavLink } from 'react-router-dom';

const DogCard = ({id, image, name, weight, temperamet}) => {
    return(
        <div>
            <img src={image} alt="DogCard" />
            <h2>{id}</h2>
            <NavLink to={`/detail/${id}`}>
            <h3>{name}</h3>
            </NavLink>
            <h4>{weight} KG</h4>
            <h4>{temperamet}</h4>   
        </div>
    )
};

export default DogCard;