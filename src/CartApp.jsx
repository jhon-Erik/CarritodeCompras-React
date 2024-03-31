

import { useItemsCart } from "./hooks/useItemsCart";
import { Navbar } from "./components/Navbar";
import { CarRoutes } from "./routes/CartRoutes";


export const CarApp = () =>{

   const {cartItems,handlerAddProductCart,handlerDeleteProductCart} = useItemsCart();
     return (<> 


          <Navbar/>

         <div  className=" container my-4">
               <h3>Cart App</h3>
                
                <CarRoutes 
                     cartItems={cartItems} handlerAddProductCart={handlerAddProductCart}
                      handlerDeleteProductCart={handlerDeleteProductCart}  />
            </div>
         </>)

      };
