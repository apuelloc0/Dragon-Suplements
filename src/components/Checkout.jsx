// Componente de Pagina que contiene detalles de pedido y formulario
import React, { useContext, useState } from 'react';
import "../cssfolder/Checkout.css";
import { CartContext } from '../Context/CartContext';
import flechaiz from "../icons/flechaiz.svg";
import Formulario from './Formulario';
import { Link } from 'react-router-dom';


const Checkout = () => {
    const { cartItems } = useContext(CartContext);
    const subtotal = cartItems.reduce((accumulator, item) => {
        return accumulator + (item.amount * item.price);
    }, 0).toFixed(2);
    // const subtotal = cartItems.reduce((previous, current) => previous + current.amount * current.price, 0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [shippingMethod, setShippingMethod] = useState('local');
    const shippingCost = 3.11;

    const handleShippingChange = (method) => {
        setShippingMethod(method);
    };

    const calculateTotal = () => {
        if (shippingMethod === 'domicilio') {
            return parseFloat(subtotal) + parseFloat(shippingCost);
        }
        return subtotal;
    };

    return (
        <div className="Checkout">

                <Link to={"/home"}><img src={flechaiz} alt="" className="back-button" />
                </Link>


                <div className="Checkout-info">        
                    {/* Componente de formulario */}
                    <Formulario />

                    {/* Representa los detalles del Pedido */}
                    <div className="Checkout-products">
                        <div className="Checkout-list">
                            <div className='Checkout-title'>
                                <h2 className='title'>Resumen de Pedido</h2>
                            </div>
                        </div>

                        <div className='productsCheckout'>
                            {cartItems.length === 0 ? (<p>Tu carrito esta vacío.</p>) : (cartItems.map((item, i) => (
                                <div key={i} className='cartItem-Checkout'>
                                    <div className='Checkout-items'>
                                        <div className='Checkout-items-left'>
                                            <img src={item.img} alt={item.name} />
                                            <p>{item.name}</p>
                                        </div>
                                        <div className='Checkout-items-right'>
                                            <div className='right-container'>
                                                {item.amount}
                                                <p>${item.amount * item.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )))}
                        </div>
                        <div className="Checkout-total">
                            <div>
                                <p className='total'>Subtotal</p>
                                <p className='total'>$ {subtotal}</p>
                            </div>
                            <div>
                                <div className="envio-p">
                                    <p className='envio'>Entrega</p>
                                </div>
                                <div className="envio-option">
                                    <div className='input-1'>
                                        <input
                                            type="radio"
                                            id="local"
                                            name="shipping"
                                            value="local"
                                            checked={shippingMethod === 'local'}
                                            onChange={() => handleShippingChange('local')}
                                        />
                                        <label htmlFor="local">Recoger en tienda</label>
                                    </div>
                                    <div className='input-2'>
                                        <input
                                            type="radio"
                                            id="domicilio"
                                            name="shipping"
                                            value="domicilio"
                                            checked={shippingMethod === 'domicilio'}
                                            onChange={() => handleShippingChange('domicilio')}
                                        />
                                        <label htmlFor="domicilio">Domicilio <span>$3.11</span></label>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <p className='total'>Total</p>
                                <p className='total'>USD $ {calculateTotal()}</p>
                            </div>
                        </div>
                    </div>
                </div>
            
        </div>
    );
};

export default Checkout;









// import React, { useContext, useState, useEffect } from 'react';
// // import LazyBackground from './LazyBackground';
// import { CartContext } from '../Context/CartContext';
// import "../cssfolder/Checkout.css";
// import Formulario from './Formulario';
// import gymwoman from '../icons/gymwoman.webp';

// const Checkout = () => {
//     const { cartItems } = useContext(CartContext);
//     const subtotal = cartItems.reduce((previous, current) => previous + current.amount * current.price, 0);
//     const [shippingMethod, setShippingMethod] = useState('local');
//     const shippingCost = 3;

//     useEffect(() => {
//         const img = new Image();
//         img.src = 'path/to/your/background-image.webp';
//         img.onload = () => {
//           document.querySelector('.Checkout').classList.add('loaded');
//         };
//       }, []);

//     const handleShippingChange = (method) => {
//         setShippingMethod(method);
//     };

//     const calculateTotal = () => {
//         if (shippingMethod === 'domicilio') {
//             return subtotal + shippingCost;
//         }
//         return subtotal;
//     };


//     return (
//         <div className="Checkout">

//                 <div className="Checkout-info">
                    

//                     <Formulario />

//                     <div className="Checkout-products">
//                         <div className="Checkout-list">
//                             <div className='Checkout-title'>
//                                 <h2 className='title'>Resumen de Pedido</h2>
//                             </div>
//                         </div>

//                         <div className='productsCheckout'>
//                             {cartItems.length === 0 ? (<p>Tu carrito esta vacío.</p>) : (cartItems.map((item, i) => (
//                                 <div key={i} className='cartItem-Checkout'>
//                                     <div className='Checkout-items'>
//                                         <div className='Checkout-items-left'>
//                                             <img src={item.img} alt={item.name} />
//                                             <p>{item.name}</p>
//                                         </div>
//                                         <div className='Checkout-items-right'>
//                                             <div className='right-container'>
//                                                 {item.amount}
//                                                 <p>${item.amount * item.price}</p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             )))}
//                         </div>
//                         <div className="Checkout-total">
//                             <div>
//                                 <p className='total'>Subtotal</p>
//                                 <p className='total'>$ {subtotal}</p>
//                             </div>
//                             <div>
//                                 <div className="envio-p">
//                                     <p className='envio'>Entrega</p>
//                                 </div>
//                                 <div className="envio-option">
//                                     <div className='input-1'>
//                                         <input
//                                             type="radio"
//                                             id="local"
//                                             name="shipping"
//                                             value="local"
//                                             checked={shippingMethod === 'local'}
//                                             onChange={() => handleShippingChange('local')}
//                                         />
//                                         <label htmlFor="local">Recoger en tienda</label>
//                                     </div>
//                                     <div className='input-2'>
//                                         <input
//                                             type="radio"
//                                             id="domicilio"
//                                             name="shipping"
//                                             value="domicilio"
//                                             checked={shippingMethod === 'domicilio'}
//                                             onChange={() => handleShippingChange('domicilio')}
//                                         />
//                                         <label htmlFor="domicilio">Domicilio <span>$3</span></label>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div>
//                                 <p className='total'>Total</p>
//                                 <p className='total'>USD $ {calculateTotal()}</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
            
//         </div>
//     );
// };

// export default Checkout;
































// Ejemplo en React
// import React, { useState } from 'react';
// import axios from 'axios';

// const Checkout = () => {
//     const [loading, setLoading] = useState(false);

//     const iniciarPago = async () => {
//         setLoading(true);
//         try {
//             const response = await axios.post('/iniciar-pago', {
//                 monto: 10000, // Monto del pago
//                 descripcion: 'Compra en mi tienda',
//                 cliente: { name: 'Juan Pérez', email: 'juan.perez@example.com' }
//             });
//             // Redirige al usuario a la URL proporcionada por PSE
//             window.location.href = response.data.payment_url;
//         } catch (error) {
//             console.error('Error iniciando el pago:', error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div>
//             <h1>Checkout</h1>
//             {/* Otros elementos del checkout */}
//             <button onClick={iniciarPago} disabled={loading}>
//                 {loading ? 'Procesando...' : 'Pagar con PSE'}
//             </button>
//         </div>
//     );
// };

// export default Checkout;
