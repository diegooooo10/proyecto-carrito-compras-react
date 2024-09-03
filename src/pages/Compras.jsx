import { useContext } from "react"
import { Card } from "../Compontent/Card"
import { ProductosContext } from "../context/ProductosContext"
import { CarritoContext } from "../context/CarritoContext"

export const Compras = () => {

  const { productos } = useContext( ProductosContext )
  const {agregarCompra, eliminarCompra } = useContext(CarritoContext)


    const handleAgregar = (compra) =>{
      agregarCompra(compra)
    }
    const handleQuitar = (id) =>{
      eliminarCompra(id)
    }

  return (
    <>
    <h1>Compras: </h1>
    <hr />

    {productos.map(producto => (
        <Card 
        key={producto.id}
        imagen={producto.image}
        titulo={producto.title}
        descripcion={producto.description}
        precio={producto.price}
        handleAgregar={() => handleAgregar(producto)}
        handleQuitar={() => handleQuitar(producto.id)}
        >

        </Card>
    ))}
    
    </>
  )
}