import React, { useEffect } from 'react'
import { useState } from 'react'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/data';

const useApiData = () => {

    const [data, setData] = useState([]);
    //const [error,setError] = useState(false);

    useEffect(() => {
        const productosRef = collection(db, 'productos'); // Referencia a la coleccion de productos
        getDocs(productosRef)
            .then((resp) => {
                setData(resp.docs.map(item => ({ ...item.data(), id: item.id }))) // Mapeo de los datos de la coleccion, utilizamos el spread operator para agregar el id de cada documento
            })
    }, []);
    return [data]
}

export default useApiData