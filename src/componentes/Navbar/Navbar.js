
import "./Navbar.css"
import { BiSearchAlt, BiCart, BiHeart } from "react-icons/bi";
import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";

export const Navbar = () => {
    return (
        <header>
            <div className="headerContainer">
                <div className="headerLinks">
                    <nav className="headerNav">
                        <Link to={"/productos"} className="navLink">
                            Shop
                        </Link>
                        <Link to={"/about"} className="navLink">
                            About
                        </Link>
                        <Link to={"/contacto"} className="navLink">
                            Contact
                        </Link>
                        
                        
                    </nav>
                </div>

                <div className="logo">
                   <Link to={"/"}>
                        <img src="./imagenes/logo1.png" className="logoImg"></img>
                    </Link>
                </div> 
                
                <div className="actionContainers">
                    <button className="iconButton">
                        <BiSearchAlt className="icon"/>
                    </button>
                    <a className="Favourites">
                        <BiHeart className="icon"/>
                    </a>
                    <button className="iconButton">
                        <CartWidget/>
                        <div className="cart">
                            <span>

                            </span>
                        </div>
                    </button>
                </div>
            </div>
        </header>
    )
}
export default Navbar