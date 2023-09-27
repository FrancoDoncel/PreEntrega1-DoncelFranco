import React from 'react'
import CardItem from './CardItem'
import { Col } from 'react-bootstrap'

const ItemList = ({item}) => {
    return (
    <>
        {
            (item.map((elem)=>(
                <Col md={4} lg={4} key={elem.id}>
                <CardItem item={elem}/>
                </Col>
            
            )))
        }
    </>
    )
}

export default ItemList
