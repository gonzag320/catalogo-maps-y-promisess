import { useEffect, useState } from "react"
import item from "../utils/item";
import desafio from "../utils/promesa";

export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        desafio(item)
        .then(resultado => setProducts(resultado)) 
        .catch(err => console.log(err))
    }, [])

    return (
    <>
    {
        products.map(item => (
        <div className="Productos">
        <h4>{item.nombre}</h4>
        <p>{item.precio}</p>
        <p>{item.descripcion}</p>
        <img src={item.pictureUrl} alt=""/>
        </div>
        ))
    }
    </>
    )

}

