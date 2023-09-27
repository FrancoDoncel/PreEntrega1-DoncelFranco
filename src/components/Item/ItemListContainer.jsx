import React from 'react'
import useApiData from '../Hook/useApiData'
import ItemList from './ItemList'
import { Container, Row } from 'react-bootstrap'


const ItemListContainer = () => {
    const [item] = useApiData ('https://fakestoreapi.com/products')
return (
    <>
        <div>
        <h2 style={{textAlign:"center", marginTop:"20px"}}><i>"Tus Fragancias Preferidas En El Mayor Grado De Concentración"</i></h2>
    </div>
    <Container>
        <Row>
            {item !== null && <ItemList item={item}/> }
        </Row>
    </Container>
    </>

)
}

export default ItemListContainer
