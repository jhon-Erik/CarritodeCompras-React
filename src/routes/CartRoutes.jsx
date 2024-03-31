import { Navigate, Route, Routes } from "react-router-dom"
import { CatalogView } from "../components/CatalogView"
import { CartView } from "../components/CartView"

export const CarRoutes =({handlerAddProductCart,handlerDeleteProductCart,cartItems})=>{
    return ( 
           // FUNCION DE RUTAS 
        <Routes>
        <Route
           path="catalog" 
           element={ <CatalogView handler = {handlerAddProductCart}/>} />

        <Route 
        path="cart" 
           element={( 
                 /**FUNCION PARA OCULTAR LA TABLA DE CARRITO DE COMPRAS*/
              cartItems?.length<=0 ? 
              <div className="alert alert-warning">no hay productos en el carrito de compras</div>
              :
              (
                 <div className=" my-4 w-50">
                       <CartView items={cartItems} handlerDelete ={handlerDeleteProductCart}/>
                 </div>
           )
           )} />

        <Route path="/" element={<Navigate replace to="/catalog"/>}/>

     </Routes>)
}