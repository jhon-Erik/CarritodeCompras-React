import React from 'react'
import ReactDOM from 'react-dom/client'
import { CarApp } from './CartApp'
import { BrowserRouter } from 'react-router-dom'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    < CarApp/>
    </BrowserRouter>
  
  </React.StrictMode>,
)
