import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import './../../css/App.css'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Cart = () => {
  const { carrito, precioAPagar, vaciarCarrito, eliminarItem } = useContext(CartContext);
  const handlerVaciar = () => {
    Swal.fire({
      title: 'Estas seguro?',
      text: "Se eliminara todos los productos del carrito",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Continuar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        vaciarCarrito();
        Swal.fire(
          'Eliminado!',
          'Los productos fueron eliminados del carrito.',
          'success'
        )
      }
    })
  }
  return (
    <div className='container alto-2'>
      <h1 style={{ textAlign: 'center', marginTop: '25px' }}>Carrito de compra</h1>
      {
        carrito.map((item) => (
          <div key={item.id}>
            <div className='lista-carrito' >
              <img style={{ width: "120px" }} src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <div>
                <p>Precio unitario: ${item.price}</p>
                <p>Cantidad: {item.cantidad}</p>
                <Button variant="dark" onClick={() => { eliminarItem(item.id) }}>Eliminar</Button>
              </div>
              <p>Precio total: ${item.price * item.cantidad}</p>
            </div>
          </div>

        ))
      }
      {
        carrito.length > 0 ?
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '25px' }}>
            <Button style={{ marginTop: '15px' }} variant="dark" onClick={handlerVaciar}>Vaciar</Button>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'end', alignItems: 'end' }}>
              <h2>Total a pagar: ${precioAPagar()}</h2>
              <Link to='/checkout'><Button style={{ width: '200px' }} variant="dark" > Finalizar compra </Button></Link>
            </div>

          </div> :
          <h2 style={{ textAlign: 'center', marginTop: '40px' }}>El carrito esta vacio 🙁 </h2>
      }

    </div>
  )
}

export default Cart

