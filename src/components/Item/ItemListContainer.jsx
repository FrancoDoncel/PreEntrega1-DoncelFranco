import React, { useEffect } from 'react'
import useApiData from '../Hook/useApiData'
import ItemList from './ItemList'
import { Container, Row } from 'react-bootstrap'
import './../../css/App.css'


const ItemListContainer = () => {
    const [item] = useApiData()
    return (
        <>
            <div>
                <h2 style={{ textAlign: "center", marginTop: "40px" }}><i>"Tus Fragancias Preferidas En El Mayor Grado De Concentración"</i></h2>
            </div>
            <Container style={{ marginTop: "40px" }}>
                <Row className=' '>
                    {item !== null && <ItemList item={item} />}
                </Row>
            </Container>
        </>

    )
}

export default ItemListContainer
