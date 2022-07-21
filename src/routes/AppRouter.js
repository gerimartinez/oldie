import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"

import PublicRoutes from "./PublicRoutes";

const AppRouter = () => {


    return (
        <div>
            <BrowserRouter>
              
              <PublicRoutes/>
            
 
            </BrowserRouter>
        </div>
    )
}
export default AppRouter