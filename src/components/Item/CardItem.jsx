import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './../../css/App.css'

const CardItem = ({ item }) => {
    return (
        <div >
            <Link to={`/producto/${item.id}`} style={{ textDecoration: 'none' }}>
                <Card style={{ marginBottom: '25px', height: '400px' }} >
                    <Card.Img className='fondo-card' style={{ height: '200px', objectFit: 'contain', objectPosition: 'top', }} variant="top" src={item.image} />
                    <Card.Body className='fondo-card' style={{ textAlign: 'center' }} >
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                            Fragancia de {item.brand} para {item.category}
                        </Card.Text>
                        <Card.Text>
                            Precio: ${item.price}
                        </Card.Text>

                        <Button variant="dark">Ver producto</Button>

                    </Card.Body>
                </Card >
            </Link>
        </div >

    );
}

export default CardItem