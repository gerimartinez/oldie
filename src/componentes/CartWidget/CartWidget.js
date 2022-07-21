// import "./CartWidget.css"

import { BiCart } from 'react-icons/bi';
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

export const CartWidget = () => {

  const {totalCart} = useCartContext()

  return (
    <Link to={"/cart"} className={`linkCarrito ${totalCart() === 0 ? "linkCarrito-hidden" : ``}`}>
       <BiCart className="icon"/>
       <span className="mx-1">{totalCart()}</span>
    </Link>
  )
}