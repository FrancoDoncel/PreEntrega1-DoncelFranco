import React from 'react'
import { useParams } from 'react-router-dom'
import ItemCategoryContainer from '../Item/ItemCategoryContainer';

const Category = () => {
    const {category} = useParams();
    return (
    <div>
        <ItemCategoryContainer category={category}/>
    </div>
    )
}

export default Category