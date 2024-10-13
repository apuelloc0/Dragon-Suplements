// import React, { useContext, useEffect, useState } from 'react'
// import "../cssfolder/AddToCart.css";
// import { useParams } from 'react-router-dom';
// import { CartContext } from '../Context/CartContext';
// import useSheets from '../useSheets';
// // import Productos from '../components/Productos';


// const AddToCart = () => {

//     const { addItemToCart, cartItems } = useContext(CartContext)

//     const { id } = useParams();

//     const { data, loading, error } = useSheets(
//         'AIzaSyBpHDI9OLva3Ed1ANXi27__yYzcjfm85Dg',
//         '1I9-znBWD0kn6pRlctgprPgYZySOjTlOeHdA9hfGLfaw',
//         'Hoja1!A2:G',
//         id 
//     );
//     console.log(data)

//     // ----Enviar pedido a Whatsapp---------
//     const realizarPedido = () => {
//         // crear mensaje con los productos
//         const mensaje = `Hola me gustaria realizar el pedido: ${item.name} - $ ${item.price}`

//         const numeroTelefonico = "4266934611"

//         // const enlaceWha = `https://wa.me/${numeroTelefonico}?text=Hola,%20me%20gustaria%20realizar%20el%20pedido:%0A${mensaje}`

//         const enlaceWha = `https://wa.me/${numeroTelefonico}?text=${mensaje}`
//         // console.log(mensaje) 

//         // Redirigir a Whatsapp
//         window.open(enlaceWha, "_blank")
//     }

//     // const productoParseado = parseInt(id)
//     // const filtrarProductosId = products.find(product => product.id === productoParseado)

//     return (
//         <div className='AddToCart'>
//             <p>{id}</p>

//             {/* <div className="AddToCart page-header about-header">
//                 <h2>#let`s_talk</h2>
//                 <p>LEAVE A MESSAGE, We love to hear from you!</p>
//             </div>

//             <section className="AddToCart section-p1">
//                 <div className="Detail-container">

//                     <div className="img-product">
//                         <img src={products.img} alt="" />
//                     </div>

//                     <div className="Detail-product">

//                         <div className="Details">
//                             <h5>{products.name}</h5>
//                             <span>{products.marca}</span>

//                             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur reprehenderit esse repellendus quasi omnis aliquam a impedit doloremque ut illo accusamus eos corrupti, temporibus debitis quas, ex eveniet culpa nisi.</p>
                            
//                             <h4>U$S {products.price}</h4>
//                             <button onClick={() => { addItemToCart(filtrarProductosId) }} className='AddToCart-Item' >Añadir al Carrito</button>
//                             <button onClick={() => realizarPedido()} className='Whatsapp-Button'>Realizar Pedido</button>
//                         </div>

//                     </div>
//                 </div>
//             </section> */}

//         </div>
//     )
// }

// export default AddToCart


















// ADDTOCART ACTUAL
// import React, { useContext } from 'react';
// import "../cssfolder/AddToCart.css";
// import { useParams } from 'react-router-dom';
// import { CartContext } from '../Context/CartContext';
// import useSheets from '../useSheets';

// const AddToCart = () => {
//     const { addItemToCart } = useContext(CartContext);
//     const { id } = useParams();

//     const { data, loading, error } = useSheets(
//         'AIzaSyBpHDI9OLva3Ed1ANXi27__yYzcjfm85Dg',
//         '1jjFklr_CvTKJfxZZJyIZvxRyofNdmHVTNMp1TtjPmCc',
//         'Hoja1!A2:G',
//         '', // Filtro vacío para obtener todos los datos
//         id // Pasar el id para filtrar por índice
//     );

//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error: {error.message}</p>;

//     const producto = data[0]; // Asumimos que data contiene solo un producto filtrado por id

//     // ----Enviar pedido a Whatsapp---------
//     const realizarPedido = () => {
//         const mensaje = `Hola me gustaria realizar el pedido: ${producto.name} - $ ${producto.price}`;
//         const numeroTelefonico = "4266934611";
//         const enlaceWha = `https://wa.me/${numeroTelefonico}?text=${mensaje}`;
//         window.open(enlaceWha, "_blank");
//     };

//     return (
//         <div className='AddToCart'>
//             {producto ? (
//                 <div className="Detail-container">
//                     <div className="img-product">
//                         <img src={producto.img} alt={producto.name} />
//                     </div>
//                     <div className="Detail-product">
//                         <div className="Details">
//                             <h5>{producto.name}</h5>
//                             <span>{producto.type}</span>
//                             <p>{producto.description}</p>
//                             <h4>U$S {producto.price}</h4>
//                             <button onClick={() => addItemToCart(producto)} className='AddToCart-Item'>Añadir al Carrito</button>
//                             <button onClick={realizarPedido} className='Whatsapp-Button'>Realizar Pedido</button>
//                         </div>
//                     </div>
//                 </div>
//             ) : (
//                 <p>No se encontró el producto.</p>
//             )}
//         </div>
//     );
// };

// export default AddToCart;














// ADDTOCART MODIFICADO SIN LLAMAR A LA API GOOGLE SHEETS
import React, { useContext } from 'react';
import "../cssfolder/AddToCart.css";
import { useParams } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';

const AddToCart = () => {
    const { id } = useParams();
    const { productos, addItemToCart } = useContext(CartContext);

    const producto = productos.find(p => p.id === parseInt(id));

    if (!producto) return <p>Producto no encontrado.</p>;

    // const realizarPedido = () => {
    //     const mensaje = `Hola me gustaria realizar el pedido: ${producto.name} - $ ${producto.price}`;
    //     const numeroTelefonico = "584266934611";
    //     const enlaceWha = `https://wa.me/${numeroTelefonico}?text=${mensaje}`;
    //     window.open(enlaceWha, "_blank");
    // };

    return (
        <div className='AddToCart'>
            <div className="Detail-container">
                <div className="img-product">
                    <img src={producto.img} alt={producto.name} />
                </div>
                <div className="Detail-product">
                    <div className="Details">
                        <h5>{producto.name}</h5>
                        <span>{producto.type}</span>
                        <p>{producto.description}</p>
                        <h4>U$S {producto.price}</h4>
                        <button onClick={() => addItemToCart(producto)} className='AddToCart-Item'>Añadir al Carrito</button>
                        {/* <button onClick={realizarPedido} className='Whatsapp-Button'>Realizar Pedido</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddToCart;
