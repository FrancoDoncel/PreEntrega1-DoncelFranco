import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { Container, Row } from 'react-bootstrap';

const ItemCategoryContainer = ({ category }) => {
    const [item, setItem] = useState([]);

    const getData = async () => {
        const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
        const data = await response.json();
    return data;
    };

    useEffect(() => {
        getData().then((data) => {
            setItem(data);
    });
    }, [category]);

    const itemFiltrados = item.filter((elem) => elem.category === category);

    return (
        <Container>
            <h3 style={{textAlign:"center", marginTop:"20px" , marginBottom:"20px"}}>Categoria: {category}</h3>
            <Row>
                {itemFiltrados.length > 0 && <ItemList item={itemFiltrados} category={category} />}
            </Row>
    </Container>
    );
};

export default ItemCategoryContainer;