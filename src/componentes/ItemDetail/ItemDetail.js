// import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import Button from 'react-bootstrap/Button'
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { CartContext } from "../context/CartContext"



export const ItemDetail = ({item }) => {

    const {addItem, isInCart} = useContext(CartContext)
    console.log(isInCart(item.id))

    const [cantidad, setCantidad] = useState(1)

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }
    

    const handleAgregar = () => {
        if (cantidad === 0) return
        
        const itemToCart = {
            ...item,
            cantidad
        }
        addItem(itemToCart)
    }

    return(
        <section>
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                        <div class="col-md-4">
                                <img
                                            src={item.imagen}
                                            alt="Trendy Pants and Shoes"
                                            class="img-fluid rounded-start"
                                        />
                        </div>
                    <div class="col-md-8">
                         <div class="card-body">
                            <h5 class="card-title">{item.nombre}</h5>
                            <p class="card-text">
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                            </p>
                            <ul class="list-group list-group-light list-group-small">
                                <li class="list-group-item px-4">Cantidades disponibles: {item.stock}</li>
                                <li class="list-group-item px-4">${item.precio}</li>
                                <li class="list-group-item px-4">Vestibulum at eros</li>
                            </ul>
                        <div class="card-body">
                            
                            {
                                    isInCart(item.id)
                                    ? <Link to="/cart" className="btn btn-primary my-5 btnFinalizar">Finalizar compra</Link>
                                    
                                    :
                                        <ItemCount
                                            stock={item.stock}
                                            contador={cantidad}
                                            setContador={setCantidad}
                                            onAdd={handleAgregar}
                                            
                                        />
                                }
                            <Link to="/productos" className="btn btn-primary btnSeguir">Seguir comprando</Link>  
                        </div>
                        <p class="card-text">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
           <Button onClick={handleVolver} className="btnVolver">Volver</Button>
        </section>
        
    )
}