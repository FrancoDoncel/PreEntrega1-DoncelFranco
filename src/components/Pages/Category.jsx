import React from 'react'
import { useParams } from 'react-router-dom'
import ItemCategoryContainer from '../Item/ItemCategoryContainer';
import './../../css/App.css'

const Category = () => {
    const { category } = useParams();
    return (
        <div className='alto-2'>
            <ItemCategoryContainer category={category} />
        </div>
    )
}

export default Category