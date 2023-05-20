import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getDog, handleDelete } from './detailHandlers';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Detail.module.css';

const Detail = () => {
  const [view, setView] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { id } = useParams();
  const [dog, setDog] = useState([]);
  const message = useSelector(state => state.message);

  useEffect(() => {
    getDog(id, setDog, dispatch, navigate);
    return setDog([])
  }, [])


  const handleDeleteBtn = (event) => {
    setView(!view)
    console.log(view)
    event.preventDefault();
    handleDelete(id, dispatch, navigate);
  };

  const handleEditBtn = (event) => {
    event.preventDefault();
    // handleEditBtn(id, dispatch)
  };

  return (
    <div key={dog[0]?.id || dog.id} className={styles.container}>
      <h2 className={styles.title}>DOG DETAIL</h2>

      <div className={styles.datos_group}>
        <img className={styles.img} src={dog[1]?.url || dog.image?.url} alt="" />

        <div className={styles.fonts}>
          <h4 className={styles.id}>ID:
            <span> {dog[0]?.id || dog.id} </span>
          </h4>

          <h4 className={styles.name}>Name:
            <span> {dog[0]?.name || dog.name} </span>
          </h4>

          <h4 className={styles.height}>Height:
            <span> {dog[0]?.height?.metric || dog.height?.metric} cm </span>
          </h4>

          <h4 className={styles.weight}>Weight:
            <span> {dog[0]?.weight?.metric || dog.weight?.metric} kg </span>
          </h4>

          <h4 className={styles.temperament}>Temperaments:
            <span> {dog[0]?.temperament || dog?.temperament}</span>
          </h4>

          <h4 className={styles.life_span}>Life Span:
            <span> {dog[0]?.life_span || dog.life_span}</span>
          </h4>
          {dog.id && <button className={styles.deleteBtn} onClick={handleDeleteBtn}>Delete</button>}
          {/* {dog.id && <button onClick={handleEditBtn}>Edit</button>}  */}
        </div>
      </div>
      {message && <span className={styles.message} >{message}</span>}
    </div>
  )
};


export default Detail;