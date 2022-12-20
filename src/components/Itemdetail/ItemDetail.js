
import ItemCount from '../ItemCount/ItemCount'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({ id, name, img, description, price, stock }) => {   
   

    const { addItem, isInCart } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        addItem({ id, name, price, quantity })
        
    }
    
    return (
        <div>
            <h1>{name}</h1>
            <img src={img} alt={name}/>
            <p>{description}</p>
            <h2>$ {price}</h2>
            {  isInCart(id) 
                    ? <Link to='/cart' className='Option'>Terminar Compra</Link>
                    : stock > 0 
                        ? <ItemCount stock={stock} onAdd={handleOnAdd}/> 
                        : <h1>No hay stock</h1>
            }
        </div>
    )
}

export default ItemDetail
