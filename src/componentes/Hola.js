import Carousel from 'react-bootstrap/Carousel';

const Hola = () => {
    return(
        <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="./imagenes/collection2.png"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
        </Carousel>
    )
} 
export default Hola