import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ item }) => {

    const { carrito, agregarAlCarrito } = useContext(CartContext);
    const [cantidad, setCantidad] = useState(1);
    console.log(carrito)

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1);
    }

    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1);
    }


    return (
        <>
            <div className='container' style={{ textAlign: "center", display: "flex", justifyContent: 'space-evenly', marginTop: '100px', marginBottom: "30px" }}>

                <div>
                    <img src={item.image} alt={item.title} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: "600px" }}>
                    <h2 style={{ marginBottom: '45px', fontSize: '65px', fontWeight: 'bold' }}>{item.title}</h2>
                    <p>{item.description}</p>
                    <p style={{ fontSize: '25px' }}>Fragancia de {item.brand} para {item.category}</p>
                    <p style={{ fontSize: '35px', fontWeight: '600' }}>Precio: ${item.price}</p>
                    <ItemCount cantidad={cantidad} handleRestar={handleRestar} handleSumar={handleSumar} handleAgregar={() => { agregarAlCarrito(item, cantidad) }} />
                </div>
            </div>
        </>

    )
}

export default ItemDetail