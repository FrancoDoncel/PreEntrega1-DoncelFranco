import React from 'react'
import useApiData from '../Hook/useApiData'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = ({id}) => {
    const [item] = useApiData (`https://fakestoreapi.com/products/${id}`)
    return (
    <div>
        {
            item !== null && <ItemDetail item={item}/>
        }
    </div>
    )
}

export default ItemDetailContainer