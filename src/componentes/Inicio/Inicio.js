import "./Inicio.css"
import Button from 'react-bootstrap/Button'



export const Inicio = () => {
    return (
        <div className="containerHome">
            <div>
                <div className="d-block w-100 containerBanner">
                    <div className="banner">
                        <p> OLDIE <br></br>
                            BUT<br></br>
                            GOLDIE<br></br>
                        </p>
                    </div>
                    <div>
                        {/* <img
                        className="bannerImg"
                        src="./imagenes/banner.png"
                        alt="First slide"
                        /> */}
                        <div>
                            <h3 className="titleBanner">ROPA CON OTRA OPORTUNIDAD</h3>
                            <p className="pBanner">Encontra prendas especialmente seleccionadas, de calidad y en perfectas condiciones.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p></p>
            </div>
            <div>
                <h2 className="tituloCuadricula"> COMPRA. REUTILIZÁ.</h2>
                <div className="container my-5 containerCuadricula">
                    <img
                    className="cuadriculaImg"
                    src="./imagenes/pdp1.jpg"
                    alt="First slide"></img>
                    <img 
                     className="cuadriculaImg"
                     src="./imagenes/shirt2.jpg"
                     alt="First slide"></img>
                </div>
                <div className="container my-5 containerCuadricula">
                    <img 
                    className="cuadriculaImg"
                    src="./imagenes/shirt1.jpg"
                    alt="First slide"></img>
                    <img
                     className="cuadriculaImg"
                     src="./imagenes/shirt3.jpg"
                     alt="Remera 3"></img>
                </div>
            </div>

            <h2 className="titleNew">NEW ARRIVALS</h2>
            <div className="containerNew">
                
                <div>
                    <img
                     className="newImg"
                     src="./imagenes/woman4.jpeg"
                     alt="Remera 3"></img>

                  <h2 className="titleProduct">Sweater Roll</h2>
                  <hr/>
                  <p className="precioProd">$6850</p>
                
                  <Button variant="primary" className="btnShop">Shop now</Button>
                </div>
                <div>
                    <img
                     className="newImg"
                     src="./imagenes/woman2.jpeg"
                     alt="Remera 3"></img>
                  <h2 className="titleProduct">Sweater Estocolmo</h2>
                  <hr/>
                  <p className="precioProd">$5900</p>
                
                  <Button variant="primary" className="btnShop">Shop now</Button>
                </div>
                <div>
                    <img
                     className="newImg"
                     src="./imagenes/woman3.jpeg"
                     alt="Remera 3"></img>
                  <h2 className="titleProduct">Remera Basic Larga</h2>
                  <hr/>
                  <p className="precioProd">$3600</p>
                
                  <Button variant="primary" className="btnShop">Shop now</Button>
                </div>
            </div>

           

            <div>
               <div className="containerOldie">
                   <h3 className="titleSobre">SOBRE OLDIE</h3>   
                    <p className="sobreOldie">
                        Creemos en dos cosas: la búsqueda de la calidad en todo lo que hacemos y cuidarnos unos a otros. 
                        Encontra prendas especialmente seleccionadas, de calidad y en perfectas condiciones. 
                    </p>
               </div>
            </div>
                
            
            <div className="containerCar">
                <div>
                    <img className="carImg"
                     src="./imagenes/home1.jpg"
                     alt="Remera 3"></img>
                </div>
                <div>
                    <img className="carImg"
                     src="./imagenes/home2.jpg"
                     alt="Remera 3"></img>
                </div>
                <div>
                    <img className="carImg"
                     src="./imagenes/home3.jpg"
                     alt="Remera 3"></img>
                </div>
                <div>
                    <img className="carImg"
                     src="./imagenes/home4.jpg"
                     alt="Remera 3"></img>
                </div>
            </div> 
            
            <div className="containerIg">
                <div className="container-xs text-center divIg">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="svgIg" height="4.5em" width="4.5em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
                     </svg>
                    <a href="https://www.instagram.com/oldiebutgoldieeee/" target="_blank" className="navLinkF">
                        
                        <span class="containerWords">
                            <div class="m-top-quarter text-uppercase font-small nombreIg">Seguinos en Instagram</div>
                            <h4 className="nombreIg">@oldiebutgoldieeee</h4>
                        </span>
                    </a>
                </div>
            </div>

            <div className="containerEnvios">
                <div className="Attribute-module--root--0RpHG">
                    <div className="Attribute-module--iconContainer--ge+C5 iconContainer">
                        <svg width="60" height="62" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 62">
                            <path d="M53.063 17.607a3.026 3.026 0 0 0-1.055-1.066L31.383 4.553a2.832 2.832 0 0 0-2.766 0L7.992 16.541a3.025 3.025 0 0 0-1.055 1.066 2.932 2.932 0 0 0-.375 1.453v23.88a2.957 2.957 0 0 0 .378 1.474c.251.447.615.817 1.052 1.069L28.617 57.47c.403.228.853.352 1.313.363h.14a3.13 3.13 0 0 0 1.313-.363l20.625-11.988c.437-.252.8-.622 1.052-1.069.252-.447.382-.957.377-1.474V19.06a3.106 3.106 0 0 0-.374-1.453ZM29.53 6.224a.982.982 0 0 1 .938 0l20.133 11.698L30.21 29.886 9.42 17.922l20.11-11.698ZM8.906 43.788a.954.954 0 0 1-.345-.359.994.994 0 0 1-.124-.49V19.57l20.836 11.988-.187 23.952-20.18-11.721Zm42.188 0L30.96 55.484l.187-23.928 20.415-11.964V42.94a.994.994 0 0 1-.124.49.953.953 0 0 1-.345.358Z" fill="currentColor"></path>
                            <path d="m37.167 36.5 3.25 3.25 5.416-6.5" stroke="currentColor" stroke-width="2"></path>
                        </svg>
                    </div>
                    <span className="Attribute-module--title--r+GKc">Envios a todo el pais</span>
                    <span className="Attribute-module--subtitle--boFU2"></span>
                </div>
                    <div className="Attribute-module--root--0RpHG">
                       <div className="Attribute-module--iconContainer--ge+C5 iconContainer">
                            <svg width="51" height="54" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51 54">
                                <path d="M2.757 27.837h-.033a.753.753 0 0 1-.714-.788c.315-7.305 3.903-14.019 9.842-18.42C17.704 4.292 25.106 2.9 32.164 4.813a.753.753 0 0 1 .528.924.745.745 0 0 1-.915.534c-6.62-1.791-13.56-.488-19.043 3.576-5.573 4.129-8.939 10.424-9.233 17.271a.745.745 0 0 1-.744.719ZM26.021 52.4a24.09 24.09 0 0 1-8.833-1.682C10.055 47.896 4.82 41.97 2.829 34.46a.754.754 0 0 1 .528-.925.746.746 0 0 1 .915.534c1.869 7.044 6.772 12.6 13.458 15.246 6.662 2.634 14.188 1.946 20.13-1.843a.743.743 0 0 1 1.029.236.757.757 0 0 1-.234 1.04C34.863 51.167 30.463 52.4 26.02 52.4ZM42.376 45.53a.736.736 0 0 1-.528-.222.761.761 0 0 1 0-1.067c4.886-4.938 7.235-11.721 6.44-18.61-.807-6.996-4.604-13.089-10.423-16.72a.758.758 0 0 1-.243-1.037.74.74 0 0 1 1.026-.245c6.21 3.877 10.261 10.375 11.122 17.829.846 7.35-1.656 14.585-6.866 19.853a.75.75 0 0 1-.528.218Z" fill="#000" stroke="#000" stroke-width="0.4"></path>
                                <path d="M28.096 8.498a.744.744 0 0 1-.65-.385.76.76 0 0 1 .285-1.027l3.191-1.813-1.833-2.915a.759.759 0 0 1 .231-1.04.743.743 0 0 1 1.032.233l2.256 3.589a.759.759 0 0 1-.264 1.06l-3.879 2.204a.785.785 0 0 1-.369.094ZM42.377 45.528a.74.74 0 0 1-.528-.221.77.77 0 0 1-.22-.555l.12-4.495c.013-.415.35-.724.766-.734.411.012.738.358.726.776l-.1 3.698 3.417-.094h.021c.402 0 .735.325.747.734a.752.752 0 0 1-.726.776l-4.205.115h-.018ZM1.545 38.753a.754.754 0 0 1-.653-1.112l2.003-3.737a.744.744 0 0 1 1.05-.285l3.791 2.352c.351.218.461.682.245 1.037a.74.74 0 0 1-1.025.248l-3.12-1.934-1.628 3.037a.76.76 0 0 1-.663.394Z" fill="#000" stroke="#000" stroke-width="0.4"></path>
                            </svg>
                      </div>
                        <span className="Attribute-module--title--r+GKc">Devoluciones</span>
                        <span className="Attribute-module--subtitle--boFU2"></span>
                    </div>
                <div className="Attribute-module--root--0RpHG">
                    <div className="Attribute-module--iconContainer--ge+C5 iconContainer">
                        <svg width="51" height="54" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 37">
                           <path d="M42.045 0H7.955A7.955 7.955 0 0 0 0 7.955v20.454a7.955 7.955 0 0 0 7.955 7.955h34.09A7.955 7.955 0 0 0 50 28.409V7.955A7.955 7.955 0 0 0 42.045 0Zm5.682 28.41a5.681 5.681 0 0 1-5.681 5.68H7.954a5.682 5.682 0 0 1-5.682-5.68V11.363h45.454v17.045Zm0-19.32H2.273V7.956a5.682 5.682 0 0 1 5.682-5.682h34.09a5.682 5.682 0 0 1 5.682 5.682V9.09ZM34.091 31.819a4.545 4.545 0 0 0 2.273-.614 4.545 4.545 0 1 0 2.272-8.477c-.801 0-1.587.22-2.272.637a4.387 4.387 0 0 0-2.273-.637 4.546 4.546 0 0 0 0 9.091ZM38.068 25a2.271 2.271 0 1 1 1.023 4.428 2.271 2.271 0 0 1-1.023-.019 4.546 4.546 0 0 0 0-4.409Zm-3.977 0a2.273 2.273 0 1 1 0 4.546 2.273 2.273 0 0 1 0-4.546ZM6.818 28.41a1.136 1.136 0 0 1 1.137-1.137h9.09a1.137 1.137 0 0 1 0 2.273h-9.09a1.136 1.136 0 0 1-1.137-1.137Z" fill="#000"></path>
                        </svg>
                    </div>
                 <span className="pago">Pago seguro</span>
                 <span className="Attribute-module--subtitle--boFU2"></span>

                </div>
           </div> 
            
      </div>
        
    )
}
