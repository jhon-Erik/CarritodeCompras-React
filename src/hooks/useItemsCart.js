import { useEffect, useReducer } from "react";
import { itemsReducer } from "../reduce/itemsReducer";
import { AddProductCart, DeleteProductCart, UpdateQuantityProductCart } from "../reduce/itemsActions";


//SE OBTIENE LA SESSIONsTORAGE
const initialCartItems = JSON.parse(sessionStorage.getItem('cart'))|| [];
export const  useItemsCart = ()=>{
    const[cartItems, dispacht]= useReducer(itemsReducer, initialCartItems);

    useEffect( ()=>{
     //SESIONSTORAGE PARA GUARDAR LOS ITEMS DEL CARRTIO DE COMPRAS
     sessionStorage.setItem('cart',JSON.stringify(cartItems));
 },[cartItems]);




   //FUNCION PARA AGREGAR  PRODUCTOS AL CARRITO DE COMPRAS 
    const handlerAddProductCart =  (product) =>
    {
         const hasItem =  cartItems.find((i)=> i.product.id===product.id );
          if(hasItem){
           //SE ACTUALIZA EL ELEMENTO EN LA LISTA
                        
               dispacht({
                 type:UpdateQuantityProductCart,
                 payload:  product,
               });
          } else{
           // SE AGREGA EL ELEMENTO EN LA LISTA

            dispacht({
             type:AddProductCart,
             payload: product,
            });
 
          }
   }

//FUNCION DE ELIMINAR  UN ITEM DEL CARRITO
   const handlerDeleteProductCart = (id)=>{
      dispacht ({
       type:DeleteProductCart,
       payload:id,
      });

   }
    return {
       cartItems,
       handlerAddProductCart,
       handlerDeleteProductCart,
    }
}