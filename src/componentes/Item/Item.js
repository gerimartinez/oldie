import "./Item.css"
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom"

const Item = ({item}) => {
    return (
       <div className="card">
          <Link to={`/item/${item.id}`}>
              <img
              className="imagenCard"
              src={item.imagen}
              alt="Remera 3"></img>
          </Link>
          <div className="">
            <h2 className="titleProduct">{item.nombre}</h2>
            <hr/>
            <p className="precioProd">${item.precio}</p>

            <Link to={`/item/${item.id}`} className="contBoton">
              <Button variant="primary" className="btnShop">Shop now</Button>
            </Link>
          </div>
          
       </div>
            
    )
}
export default Item 