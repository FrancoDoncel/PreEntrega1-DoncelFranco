import React from 'react'
import ItemListContainer from '../Item/ItemListContainer'
import Carrusel from '../carrusel'
import './../../css/App.css'

const Home = () => {
    return (
        <div className='fondo'>
            <Carrusel />
            <ItemListContainer />
        </div>
    )
}

export default Home