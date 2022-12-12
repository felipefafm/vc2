const products = [{
    id: '1',
    name: 'Gorra ',
    description: 'LEt cillum elit aliqua commodo tempor enim eiusmod.o',
    stock: '10',
    img: './images/gorra1.jpg',
    category:'plana',
    price: "1200"


},{
    id: '2',
    name: 'Gorra-2 ',
    description: 'LEt cillum elit aliqua commodo tempor enim eiusmod.o',
    stock: '10',
    img: './images/gorra2.jpg',
    category:'curva',
    price:"3500"
 
}]
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById=(productId)=>{
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(products.find(prod=>{
                return prod.id === productId
            }))
        },500)
    })
}

export const getProductsBycategory=(categoryId)=>{
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(products.filter(prod => prod.category === categoryId))
        },500)
    })
}
