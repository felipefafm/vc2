import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'

import { collection, getDocs, query, where, documentId, writeBatch, addDoc } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Checkout = () => {
    const { cart, getTotal,  } = useContext(CartContext)
    const [loading, setLoading] = useState(false)
    const [name,setName]=useState()
    const [phone,setPhone]=useState()
    const [adress,setAdress]=useState()
    const [email,setEmail]=useState()

    const navigate = useNavigate()

    const handleCreateOrder = async () => {
        setLoading(true)

        try {
            const objOrder = {
                buyer: {
                    name: name,
                    email: email,
                    phone: phone,
                    adress: adress
                    
                },
                items: cart,
                total: getTotal()
            }
    
            const batch = writeBatch(db)
    
            const ids = cart.map(prod => prod.id)
    
            const productsRef = query(collection(db, 'products'), where(documentId(), 'in', ids))
            const productsAddedToCartFromFirestore = await getDocs(productsRef)
    
            const { docs } = productsAddedToCartFromFirestore
    
            const outOfStock = []
    
            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
    
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity
    
                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })
    
            if(outOfStock.length === 0) {
                await batch.commit()
    
                const orderRef = collection(db, 'orders')
    
                const orderAdded = await addDoc(orderRef, objOrder)
    
                // clearCart()

                setTimeout(() => {
                    navigate('/')
                }, 2000)

                console.log(orderAdded.id)
            } else {
                console.error('Hay productos fuera de stock')
            }
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    } 
       

    if(loading) {
        return <h1>Generando Orden...</h1>
    }
    const handleSubmit = (e) => {
		e.preventDefault();
		handleCreateOrder();
	};

    return (
        <div>
            <h1>Checkout</h1>
          
            <main>  
      <div>
			
			<div>
				<form onSubmit={handleSubmit}>
					Ingresá tu nombre
					<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					Ingresá tu e-mail
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					Ingresá tu teléfono
					<input
						type="number"
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
					/>
          <input
          type="text"
          value={adress}
          onChange={(e) => setAdress(e.target.value)}
           />
					<button type="submit">Confirmar Orden</button>
				</form>
			</div>

			<Link to={"/"}>Volver a Home</Link>
		</div>
            </main>
            {/* <button onClick={handleCreateOrder}>Confirmar orden</button> */}
        </div>
    )
}

export default Checkout
