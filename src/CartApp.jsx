import { useState } from "react"
import { CartView } from "./components/CartView"
import { CatalogView } from "./components/CatalogView"


const initialCartItems =[
    //{
       // product:{

        //},
        //quantity: 0,
        //total: 0
    //}
];

export const CarApp = () =>{


    const [cartItems, setCartItems] = useState(initialCartItems);

    //FUNCION PARA AGREGAR  PRODUCTOS AL CARRITO DE COMPRAS 
     const handlerAddProductCart =  (product) =>
     {
          const hasItem =  cartItems.find((i)=> i.product.id===product.id );
           if(hasItem){
             //setCartItems([
                //...cartItems.filter((i)=> i.product.id!== product.id),
                //{
                 //   product,
               //     quantity:hasItem.quantity +1,
             //   }               
                
           // ])

              setCartItems(              
                cartItems.map((i)=>{

                if (i.product.id === product.id){
                    i.quantity = i.quantity +1;
                }
                 return i;
                })
              )
            
           }else{

            setCartItems([
                ...cartItems,
                {
                    product,
                    quantity:1,
                    
              }
            ]);
           }
        
    }

 //FUNCION DE ELIMINAR  UN ITEM DEL CARRITO
    const handlerDeleteProductCart = (id)=>{
        setCartItems([
            ...cartItems.filter((i)=> i.product.id!== id)
        ])

    }
     return (<> 
      <h3>Cart App</h3>
      <CatalogView handler = {handlerAddProductCart}/>
        <div  className=" container my-4">
           
           {/**FUNCION PARA OCULTAR LA TABLA DE CARRITO DE COMPRAS*/}
            
            {cartItems?.length<=0 ||
            (
                 <div className=" my-4 w-50">
                     <CartView items={cartItems} handlerDelete ={handlerDeleteProductCart}/>
                 </div>
           )}
          

        </div>
     </>)

}
