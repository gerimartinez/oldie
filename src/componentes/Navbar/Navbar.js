
import "./Navbar.css"
import { BiSearchAlt, BiCart, BiHeart } from "react-icons/bi";


const Navbar = () => {
    return (
        <header>
            <div className="headerContainer">
                <div className="headerLinks">
                    <nav className="headerNav">
                        <p className="navLink">
                            Shop
                        </p>
                        <p className="navLink">
                            About
                        </p>
                        <p className="navLink">
                            Contact
                        </p>
                    </nav>
                </div>

                <div className="logo">
                    {/* <p className="tituloHeader">OLDIE BUT GOLDIE</p> */}
                    <img src="./imagenes/logo1.png" className="logoImg"></img>
                </div> 
                <div className="actionContainers">
                    <button className="iconButton">
                        <BiSearchAlt className="icon"/>
                    </button>
                    <a className="Favourites">
                        <BiHeart className="icon"/>
                    </a>
                    <button className="iconButton">
                        <BiCart className="icon"/>
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