import "./Footer.css"
import {BsInstagram} from "react-icons/bs"
import {BsWhatsapp } from "react-icons/bs"
import {FiFacebook} from "react-icons/fi"

export const Footer = () => {
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

                <div className="containerAyuda">
                    <ul>
                        <li className="title-footer">Ayuda</li>
                        <li className="text-footer">oldiebtgolide@gmail.com</li>
                        <li className="text-footer">Compras y devoluciones</li>
                        <li className="text-footer">Envios</li>
                    </ul>
                </div>
                <div className="containerRedes">
                    <ul>
                        <li className="title-footer">Enterate de todo</li>
                        <li className="text-footer">
                            <a href="https://www.instagram.com/oldiebutgoldieeee/" target="_blank" className="text-footer">Instagram <BsInstagram className="iconFooter"></BsInstagram></a>
                        </li> 
                        <li className="text-footer">
                           <a href="https://www.facebook.com/" target="_blank" className="text-footer">Facebook <FiFacebook className="iconFooter"/></a>
                        </li> 
                        <li className="text-footer">
                           <a href="https://wa.me/543364200768?text=Quisiera%20consultar%20sobre%20la%20esta%20de%20prenda" target="_blank" className="text-footer">Whatsapp <BsWhatsapp className="iconFooter"/></a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
export default Footer