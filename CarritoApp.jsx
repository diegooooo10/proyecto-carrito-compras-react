import { Routes, Route, Navigate } from "react-router-dom"
import { NavBar } from "./src/Compontent/NavBar"
import { CarritoPage } from "./src/pages/CarritoPage"
import { Compras } from "./src/pages/Compras"
import { ProductosProvider } from "./src/context/ProductosProvider"
import { CarritoProvider } from "./src/context/CarritoProvider"

export const CarritoApp = () => {
  return (
  <ProductosProvider>
    <CarritoProvider>
    <NavBar></NavBar>
    <div className="container">
      <Routes>
        <Route path='/' element={<Compras></Compras>}></Route>
        <Route path="/carrito" element={<CarritoPage></CarritoPage>}></Route>
        <Route path="/*" element={<Navigate to='/' />}></Route>
      </Routes>
    </div>
    </CarritoProvider>
  </ProductosProvider>
  )
}
