import React from 'react'
import Carousel from 'react-bootstrap/Carousel'


const ExampleCarouselImage = ({ text, img }) => {
    return (
        <div className="carrusel">
            <img
                src={img}
                alt={text}
                style={{ height: "500px", objectFit: "cover", position: "relative", objectPosition: "0px -50px", width: "100%", display: 'block' }}
            />
        </div>
    )
}


const Carrusel = () => {
    return (
        <Carousel className="carrusel" style={{ height: "500px" }}>
            <Carousel.Item >
                <ExampleCarouselImage img={'https://dior.vtexassets.com/assets/vtex.file-manager-graphql/images/c709dc06-9f0e-4f80-9e3e-a20bd4c0a63c___dcca6ddbbabbf486eb9619540e85cf98.jpg'} text={""} />

            </Carousel.Item>
            <Carousel.Item>
                <ExampleCarouselImage img={"https://dior.vtexassets.com/assets/vtex.file-manager-graphql/images/618bf6e6-87ae-4fb4-a2a7-09cccb5b5524___f45dcec6e8dfbbefd9e73e0117211a56.jpg"} text={""} />

            </Carousel.Item>
            <Carousel.Item>
                <ExampleCarouselImage img={"https://dior.vtexassets.com/assets/vtex.file-manager-graphql/images/13e34376-7c4e-4214-ace9-48b4df386617___1d7e99349dfeb3698e5d648b0e46a161.png"} text={""} />
            </Carousel.Item>
        </Carousel>
    )
}

export default Carrusel