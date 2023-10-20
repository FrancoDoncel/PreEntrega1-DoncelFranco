import React from 'react'
import { useParams } from 'react-router-dom'
import ItemDetailContainer from '../Item/ItemDetailContainer';
import './../../css/App.css'

const Producto = () => {
    const { id } = useParams();
    return (
        <div className='alto'>
            <ItemDetailContainer id={id} />
        </div>
    )
}

export default Producto