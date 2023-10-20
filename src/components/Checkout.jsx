import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import { useForm } from "react-hook-form";
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/data';
import './../css/App.css'
import { Button } from 'react-bootstrap';



const Chekout = () => {
    const { carrito, precioAPagar, vaciarCarrito, eliminarItem } = useContext(CartContext);

    const { register, handleSubmit } = useForm();
    const [pedidoId, setPedidoId] = useState('');

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioAPagar()
        }
        console.log(pedido);

        const pedidoRef = collection(db, 'pedidos');
        //Como addDoc devuelve una promesa, podemos usar el then para obtener el id del documento que se creo, este documento es el pedido del cliente
        addDoc(pedidoRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
                vaciarCarrito();
            })
    }
    //Si hay un id de pedido realizamos un early return, esto es para que no se muestre el formulario de compra
    if (pedidoId) {
        return (

            <div className="container alto-2" >
                <div className='compra'>
                    <h1 >Pedido realizado con exito</h1>
                    <h3>Muchas gracias por tu compra!</h3>
                    <div style={{ marginTop: '25px' }}>
                        <h5 style={{ fontWeight: '500', fontSize: '25px' }}>Tu numero de pedido es:</h5>
                        <p className='numeroPedido' style={{ fontWeight: '500', fontSize: '25px', marginTop: '-5px' }}> {pedidoId}</p>
                    </div>

                </div>

            </div>

        )
    }
    return (

        <div className="container alto-2" style={{ textAlign: 'center', marginTop: '40px' }}>
            <h1>Finalizar compra</h1>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <form className="formulario" onSubmit={handleSubmit(comprar)}>

                    <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
                    <input type="email" placeholder="Ingresá tu e-mail" {...register("email")} />
                    <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} />

                    <Button variant="dark" type="submit">Comprar</Button>

                </form>
            </div>

        </div>
    )
}

export default Chekout