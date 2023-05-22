import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getDog, handleDelete, handleEdit, handleChange, disableSubmit } from './detailHandlers';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Detail.module.css';

const Detail = () => {
  const [view, setView] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { id } = useParams();
  const [dog, setDog] = useState([]);
  const message = useSelector(state => state.message);
  const [dataToUptdate, setDataToUptdate] = useState({
    name: '',
    height_min: '',
    height_max: '',
    weight_min: '',
    weight_max: '',
    life_span_min: '',
    life_span_max: '',
    image: ''
  })

  const [errors, setErrors] = useState('');


  useEffect(() => {
    getDog(id, setDog, dispatch, navigate);
    return setDog([])
  }, [])

  const hanldeInputChange = (event) => {
    event.preventDefault();
    handleChange(event, dataToUptdate, setDataToUptdate, setErrors)
  }

  const handleDeleteBtn = (event) => {
    event.preventDefault();
    handleDelete(id, dispatch, navigate);
  };

  const handleEditBtn = (event) => {
    event.preventDefault();
    setView(!view)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleEdit(id, dispatch, dataToUptdate, setView, navigate)
  } 

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
          {dog.id && <button className={styles.deleteBtn} onClick={handleDeleteBtn}>DELETE</button>}
          {dog.id && <button className={styles.editBtn} onClick={handleEditBtn}>EDIT</button>} 
        </div>

      </div>
      {message && <span className={styles.message} >{message}</span>}
      {view && <form className={styles.form} onSubmit={handleSubmit} >
        <label className={styles.labelInfo}> Complete only info to update </label>
        <input className={styles.input} onChange={hanldeInputChange} type="text" placeholder='New name' name='name'/>
        
        <input className={styles.input} onChange={hanldeInputChange} placeholder="min height" name="height_min" type="number" min='15' max='110' />
        <input className={styles.input} onChange={hanldeInputChange} placeholder="max heigth" name="height_max" type="number" min='15' max="110" />

        <input className={styles.input} onChange={hanldeInputChange} placeholder="min weight" name="weight_min" type="number" min='15' max='110' />
        <input className={styles.input} onChange={hanldeInputChange} placeholder="max weigth" name="weight_max" type="number" min='15' max="110" />

        <input className={styles.input} onChange={hanldeInputChange} name="image" type="url" placeholder="url image" />

        <input className={styles.input} onChange={hanldeInputChange} placeholder="min" name="life_span_min" type="number" min='7' max='15' />
        <input className={styles.input} onChange={hanldeInputChange} placeholder="max" name="life_span_max" type="number" min='8' max="20" />

        <button className={styles.updateBtn} disabled={disableSubmit(dataToUptdate)}> Update </button>
      </form> }
    </div>
  )
};


export default Detail;