import { useEffect, useState } from "react";
import { getProducts } from "./services/productService"

export const CarApp = () =>{

    const [products, setProducts] =  useState([]);
    useEffect(
        ()=>{
            setProducts( getProducts());
        },[] );
 

     return (<> 
      <h3>Cart App</h3>
        <div  className="container">
        <div className="row">
            {products.map(prod =>(

                 <div className="col-4 my-2" key={prod.id}>
                 <div className="card">
                     <div className="card-body">
                         <h5 className="card-title">{prod.name}</h5>
                         <p className="card-text">{prod.description} </p>
                         <p className="card-text">{prod.price}</p>
                         <button className="btn btn-primary">Agregar</button>
                     </div>
                 </div>
             </div>
 
                
            ))}
           
        </div>


           <div className="my-4 w-50">
            <h3>Carro de compra </h3>
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>producto</th>
                        <th>precio</th>
                        <th>cantidad</th>
                        <th>total</th>
                        <th>eliminar</th>
                    </tr>
                </thead>
                    <tbody>
                        <tr>
                            <td>nombre</td>
                            <td>precio</td>
                            <td>cantidad</td>
                            <td>total</td>
                            <td>eliminar</td>
                        </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan="3" className="text-end fw-bold">total</td>
                        <td colSpan="2" className="text-start fw-bold">12342</td>
                      </tr>
                    </tfoot>
               
            </table>
           </div>

        </div>
     </>)
}