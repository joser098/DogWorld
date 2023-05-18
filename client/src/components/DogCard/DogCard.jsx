import { NavLink } from 'react-router-dom';
import styles from './DogCard.module.css';

const DogCard = ({id, image, name, weight, temperamet}) => {
    return(
        <div className={styles.container}>
            <NavLink className={styles.nav} to={`/detail/${id}`}>
            {/* <h2>{id}</h2> */}
            <img className={styles.img} src={image} alt="DogCard" />
            </NavLink>
            <div className={styles.info}>
              <h4 className={styles.name} >{name}</h4>
              <h5 className={styles.weight} >{weight} KG</h5>
              <h5 className={styles.temperament}>{temperamet}</h5>   
            </div>
        </div>
    )
};

export default DogCard;