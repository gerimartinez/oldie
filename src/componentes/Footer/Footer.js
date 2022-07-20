import "./Footer.css"
import {BsInstagram} from "react-icons/bs"
import {BsWhatsapp } from "react-icons/bs"
import {FiFacebook} from "react-icons/fi"

const Footer = () => {
    return (
        <footer>
            <div className="footerContainer">
                <div className="containerInfo">
                  <nav>
                    <ul>
                        <li className="title-footer">Info</li>
                        <li className="text-footer">Shop</li>
                        <li className="text-footer">Sobre nosotros</li>
                        <li className="text-footer">Contacto</li>
                    </ul>
                 </nav>
                </div>

                <div className="containerInfo">
                    <ul>
                        <li className="title-footer">Ayuda</li>
                        <li className="text-footer">oldiebtgolide@gmail.com</li>
                        <li className="text-footer">Compras y devoluciones</li>
                        <li className="text-footer">Envios</li>
                    </ul>
                </div>
                <div className="containerInfo">
                    <ul>
                        <li className="title-footer">Enterate de todo</li>  
                        <li className="text-footer">Instagram <BsInstagram className="iconFooter"></BsInstagram></li>
                        <li className="text-footer">Facebook <FiFacebook className="iconFooter"/></li>
                        <li className="text-footer">Whatsapp <BsWhatsapp className="iconFooter"/></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
export default Footer