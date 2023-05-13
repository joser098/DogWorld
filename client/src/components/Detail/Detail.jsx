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
        <div>
            <h2>DOG DETAILS</h2> 
            <h4>ID: {dog[0]?.id}</h4>
            <img src={dog[1]?.url} alt="" />
            <h4>Name: {dog[0]?.name}</h4>
            <h4>Height: {dog[0]?.height?.metric} cm</h4>
            <h4>Weight: {dog[0]?.weight?.metric} kg</h4>
            <h4>Life Span: {dog[0]?.life_span}</h4>
        </div>
    )
};


export default Detail;