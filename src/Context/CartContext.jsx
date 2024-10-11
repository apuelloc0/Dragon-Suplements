// import React from 'react'
// import { useEffect } from 'react';
// import { useState } from 'react';
// import { createContext } from 'react'

// export const CartContext = createContext();

// const CartProvider = ({ children }) => {

//     const [cartItems, setCartItems] = useState(() => {
//         try {
//             const productLocalStorage = localStorage.getItem("cartProducts")
//             return productLocalStorage ? JSON.parse(productLocalStorage) : []
//         } catch (error) {
//             return []
//         }
//     })

//     useEffect(() => {
//         localStorage.setItem("cartProducts", JSON.stringify(cartItems))
//         // console.log(cartItems.length)
//         // cada vez que se modificque el carrito, setée el localstorage,lo pasamos en string porque solo se puede en string
//     }, [cartItems])

//     // --------------ADD-----------------

//     const addItemToCart = (product) => {
//         console.log("Producto a agregar:", product);
//         const inCart = cartItems.find(item => item.name === product.name);
//         console.log("Producto en carrito:", inCart);

//         if (inCart) {
//             const updatedCart = cartItems.map(item =>
//                 item.name === product.name ? { ...item, amount: item.amount + 1 } : item
//             );
//             console.log("Carrito actualizado:", updatedCart);
//             setCartItems(updatedCart);
//         } else {
//             const newCart = [...cartItems, { ...product, amount: 1 }];
//             console.log("Nuevo carrito:", newCart);
//             setCartItems(newCart);
//         }
//     };



//     // ------------DELETE-------------------

//     const deleteItemToCart = (product) => {
//         const inCart = cartItems.find(
//             (productInCart) => productInCart.id === product.id
//         )

//         if (inCart.amount === 1) {
//             setCartItems(
//                 cartItems.filter((productInCart) => productInCart.id !== product.id)
//             )
//         } else {
//             setCartItems(
//                 cartItems.map((productInCart) => {
//                     if (productInCart.id === product.id) {
//                         return { ...inCart, amount: inCart.amount - 1 }
//                     } else return productInCart
//                 })
//             )
//         }
//     }

//     // ------------DELETE-------------------


//     return (
//         <CartContext.Provider value={{ cartItems, setCartItems, addItemToCart, deleteItemToCart }}>
//             {children}
//         </CartContext.Provider>
//     )
// }

// export default CartProvider







// CONTEXT MODIFICADO PARA HACER EL LLAMADO A LA API DEDE ACA
import React, { createContext, useState, useEffect } from 'react';
import useSheets from '../useSheets';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        try {
            const productLocalStorage = localStorage.getItem("cartProducts");
            return productLocalStorage ? JSON.parse(productLocalStorage) : [];
        } catch (error) {
            return [];
        }
    });

    const [productos, setProductos] = useState([]);
    const [filter, setFilter] = useState('');
    const { data, loading, error } = useSheets(
        'AIzaSyBpHDI9OLva3Ed1ANXi27__yYzcjfm85Dg',
        '1jjFklr_CvTKJfxZZJyIZvxRyofNdmHVTNMp1TtjPmCc',
        'Hoja1!A2:G',
        filter
    );

    useEffect(() => {
        if (data) {
            setProductos(data);
        }
    }, [data]);

    useEffect(() => {
        localStorage.setItem("cartProducts", JSON.stringify(cartItems));
    }, [cartItems]);

    // ADD ITEM TO CART 

    const addItemToCart = (product) => {
        const inCart = cartItems.find(item => item.name === product.name);
        if (inCart) {
            const updatedCart = cartItems.map(item =>
                item.name === product.name ? { ...item, amount: item.amount + 1 } : item
            );
            setCartItems(updatedCart);
        } else {
            const newCart = [...cartItems, { ...product, amount: 1 }];
            setCartItems(newCart);
        }
    };

    // DELETE ITEM TO CART 


    const deleteItemToCart = (product) => {
        const inCart = cartItems.find(
            (productInCart) => productInCart.id === product.id
        );

        if (inCart.amount === 1) {
            setCartItems(
                cartItems.filter((productInCart) => productInCart.id !== product.id)
            );
        } else {
            setCartItems(
                cartItems.map((productInCart) => {
                    if (productInCart.id === product.id) {
                        return { ...inCart, amount: inCart.amount - 1 };
                    } else return productInCart;
                })
            );
        }
    };

    return (
        <CartContext.Provider value={{ cartItems, setCartItems, addItemToCart, deleteItemToCart, productos, loading, error, filter, setFilter }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
