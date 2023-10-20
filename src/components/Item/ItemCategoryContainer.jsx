import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { Container, Row } from 'react-bootstrap';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../firebase/data';

const ItemCategoryContainer = ({ category }) => {
    const [item, setItem] = useState([]);

    useEffect(() => {
        //creamos la referencia a la coleccion de productos
        const productosRef = collection(db, 'productos');
        //filtramos los productos por categoria query recibe 2 parametros la referencia a la coleccion y el metodo where que recibe 3 parametros el campo a filtrar, el operador y el valor a filtrar
        const q = query(productosRef, where("category", "==", category));

        getDocs(q)
            .then((resp) => {
                setItem(resp.docs.map(item => ({ ...item.data(), id: item.id })))
            })
    }, [category]);


    return (
        <Container>
            <h3 style={{ textAlign: "center", marginTop: "20px", marginBottom: "20px" }}>Fragancias para {category}</h3>
            <Row>
                {item.length > 0 && <ItemList item={item} category={category} />}
            </Row>
        </Container>
    );
};

export default ItemCategoryContainer;