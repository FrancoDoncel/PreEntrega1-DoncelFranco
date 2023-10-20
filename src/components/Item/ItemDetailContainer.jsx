import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase/data'

const ItemDetailContainer = ({ id }) => {
    const [item, setItem] = useState(null); //creamos el estado item

    //Necesitamos pedir a la base de datos un item en particular, para eso usamos el metodo .doc() y getDoc de firestore

    useEffect(() => {
        const docRef = doc(db, 'productos', id);
        getDoc(docRef)
            .then((resp) => {
                setItem({ ...resp.data(), id: resp.id }) //creamos el objeto item con los datos del documento y el id
            })
    }, [id])
    return (
        <div>
            {
                item !== null && <ItemDetail item={item} />
            }
        </div>
    )
}

export default ItemDetailContainer