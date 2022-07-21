import { Navbar } from "../componentes/Navbar/Navbar"
import { Footer } from '../componentes/Footer/Footer';
import {Inicio} from "../componentes/Inicio/Inicio";
import { ItemListContainer } from '../componentes/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from '../componentes/ItemDetailContainer/ItemDetailContainer';
import { Routes, Route, Navigate} from "react-router-dom"



const PublicRoutes = () => {

    return (

        <>
            <Navbar/>
            
            <Routes>
                    <Route path='/' element={<Inicio/>}/>
                    <Route path='/productos' element={ <ItemListContainer/> }/>
                    <Route path='/categorias/:categoryId' element={ <ItemListContainer/> }/>
                    <Route path='/item/:itemId' element={ <ItemDetailContainer/> } /> 
                     {/* <Route path='/cart' element={<Cart/>}/>
                    <Route path='/checkout' element={<Checkout/>}/> */}
                    {/* <Route path='/contacto' element={<Contacto/>}/> */}
                    <Route path='*' element={ <Navigate to={"/"}/> } />

            </Routes>
           
           <Footer/>
        </>
    )
}

export default PublicRoutes