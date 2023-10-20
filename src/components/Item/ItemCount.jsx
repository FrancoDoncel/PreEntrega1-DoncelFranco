import Button from 'react-bootstrap/Button';

const ItemCount = ({ cantidad, handleRestar, handleSumar, handleAgregar }) => {


    return (
        <div>
            <div style={{ marginTop: "20px", display: "flex", alignItems: "center", justifyContent: "center", lineHeight: "1" }}>
                <Button style={{ marginRight: "20px", width: "40px" }} variant="dark" onClick={handleRestar}>-</Button>
                <p style={{ marginTop: "15px", fontSize: "30px" }}>{cantidad}</p>
                <Button style={{ marginLeft: "20px", width: "40px" }} variant="dark" onClick={handleSumar}>+</Button>
            </div>
            <Button variant="dark" style={{ marginTop: "20px", padding: "25px", width: "300px", borderRadius: "20px" }} onClick={handleAgregar}>Agregar al carrito</Button>
        </div>
    )
}

export default ItemCount