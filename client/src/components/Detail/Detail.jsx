import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getDog } from './detailHandlers';

const Detail = () => {
    const { id } = useParams();
    const [ dog, setDog ] = useState([]);

    useEffect(() => {
        getDog(id, setDog);
        return setDog([])
    }, [])
    return(
        <div key={dog[0]?.id || dog.id}>
            <h2>DOG DETAILS</h2> 
            <h4>ID: {dog[0]?.id || dog.id}</h4>
            <img src={dog[1]?.url || dog.image?.url} alt="" />
            <h4>Name: {dog[0]?.name || dog.name}</h4>
            <h4>Height: {dog[0]?.height?.metric || dog.height?.metric} cm</h4>
            <h4>Weight: {dog[0]?.weight?.metric || dog.weight?.metric} kg</h4>
            <h4>Temperaments: {dog[0]?.temperament || dog?.temperament}</h4>
            <h4>Life Span: {dog[0]?.life_span || dog.life_span}</h4>
        </div>
    )
};


export default Detail;