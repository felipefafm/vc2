import { Link } from "react-router-dom"
const Item =({productos})=>{
    return(
        <div >
            <img src={productos.imagen} alt={productos.nombre} />
            <h3 >{productos.nombre}</h3>
            {/* categorias */}
            <p>{productos.stock}</p>
            <Link to={`/detail/ ${productos.id}`}>Ver Detalle</Link>
        </div>
    )
}
export default Item