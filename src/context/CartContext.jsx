import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem('carrito')) || [];

const CartProvaider = ({ children }) => {
    const [carrito, setCarrito] = useState(carritoInicial);

    const agregarAlCarrito = (item, cantidad) => {
        const itemAgregado = { ...item, cantidad };

        const nuevoCarrito = [...carrito]; //creo un nuevo array con el carrito actual

        //busco si el item esta en el carrito
        const itemEnCarrito = nuevoCarrito.find(producto => producto.id === itemAgregado.id);

        if (itemEnCarrito) {
            //si el item esta en el carrito sumo las cantidades
            itemEnCarrito.cantidad += cantidad;
            //seteo el carrito con el nuevo array
        } else {
            nuevoCarrito.push(itemAgregado); //agrego el item al carrito
        }
        setCarrito(nuevoCarrito); //seteo el carrito con el nuevo array
    }
    //Funcion para determinar cantidad de productos en carrito
    const cantidadEnCarrito = () => {
        return carrito.reduce((acc, item) => acc + item.cantidad, 0)
    }
    //Funcion para calcular el precio total a pagar del carrito
    const precioAPagar = () => {
        return carrito.reduce((acc, item) => acc + item.price * item.cantidad, 0)
    }
    //Funcion para vaciar el carrito
    const vaciarCarrito = () => {
        setCarrito([])
    }

    //Setear en local storage el carrito
    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }, [carrito])

    //Eliminar un item del carrito
    const eliminarItem = (id) => {
        // Buscar el ítem que deseas eliminar por su ID
        const productoAEliminar = carrito.find(item => item.id === id);

        if (productoAEliminar) {
            // Si la cantidad es mayor que 1, disminuir en 1
            if (productoAEliminar.cantidad > 1) {
                productoAEliminar.cantidad--;
                setCarrito([...carrito]); // Actualizar el estado del carrito
            } else {
                // Si la cantidad es 1, eliminar completamente el ítem del carrito
                const nuevoCarrito = carrito.filter(item => item.id !== id);
                setCarrito(nuevoCarrito); // Actualizar el estado del carrito sin el ítem
            }
        }
    }

    return (
        <CartContext.Provider value={{ carrito, agregarAlCarrito, cantidadEnCarrito, precioAPagar, vaciarCarrito, eliminarItem }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvaider