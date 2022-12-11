const productos = [{
    id: '1',
    nombre: 'Gorra ',
    descripcion: 'LEt cillum elit aliqua commodo tempor enim eiusmod.o',
    stock: '10',
    imagen: './images/gorra1.jpg',
    category:'plana'


},{
    id: '2',
    nombre: 'Gorra-2 ',
    descripcion: 'LEt cillum elit aliqua commodo tempor enim eiusmod.o',
    stock: '10',
    imagen: './images/gorra2.jpg',
    category:'curva'
 
}]
export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 1000)
    })
}

export const getProductosBycategory=(categoryId)=>{
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(productos.filter(prod=>prod.category===categoryId))
        },500)
    })
}


export const getProductosById=(id)=>{
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(productos.find(prod=>{
                return prod.id===id
            }))
        },500)
    })
}