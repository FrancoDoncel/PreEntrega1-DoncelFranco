import React from 'react'

//Si bien no es una buena practica agregar estilos en linea, lo agregue solo por el momento, hasta crear el modulo css del main.
const ItemListContainer = ({greeting}) => {
return (
    <div>
        <h1 style={{textAlign:"center", marginTop:"20px"}}>{greeting}</h1>
        <h2 style={{textAlign:"center", marginTop:"20px"}}><i>"Tus Fragancias Preferidas En El Mayor Grado De Concentración"</i></h2>
    </div>
)
}

export default ItemListContainer