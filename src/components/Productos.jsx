
// import React, { useContext, useState, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { v4 as uuidv4 } from 'uuid';
// import ReactPaginate from 'react-paginate';
// import "../cssfolder/Productos.css";
// import star from "../icons/staryellow.png";
// import cart from "../icons/shop-cart.svg";
// import { CartContext } from '../Context/CartContext';
// import Loading from './Loading';
// import useSheets from '../useSheets';
// import ButtonCategories from './ButtonCategories';
// import SearchBar from './SearchBar';

// const Productos = () => {
//     const { addItemToCart } = useContext(CartContext);
//     const [filter, setFilter] = useState('');
//     const [currentPage, setCurrentPage] = useState(0);
//     const [itemsPerPage] = useState(30); // Fijamos la cantidad de items por página
//     const containerRef = useRef(null);

//     const { data, loading, error } = useSheets(
//         'AIzaSyBpHDI9OLva3Ed1ANXi27__yYzcjfm85Dg',
//         '1jjFklr_CvTKJfxZZJyIZvxRyofNdmHVTNMp1TtjPmCc',
//         'Hoja1!A2:G',
//         filter
//     );
//     // AIzaSyCSr3Z9VnT83G2q2OrxBFsXCrklxzKMGds apikey
//     // 1066303412984-q41khul37v8i8heoi4mtg03dpe4i0i29.apps.googleusercontent.com keyOAUTH


//     const productosConId = data ? data.map(product => ({ ...product, id: uuidv4() })) : [];

//     const indexOfLastItem = (currentPage + 1) * itemsPerPage;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//     const currentItems = productosConId.slice(indexOfFirstItem, indexOfLastItem);
//     console.log(currentItems)

//     const totalPages = Math.ceil(productosConId.length / itemsPerPage);

//     const handlePageClick = (event) => {
//         setCurrentPage(event.selected);
//         if (containerRef.current) {
//             containerRef.current.scrollIntoView({ behavior: 'smooth' });
//         }
//     };

//     return (
//         <div className="shirts-container">
//             <ButtonCategories setFilter={setFilter} />
//             <SearchBar setFilter={setFilter} />

//             <div ref={containerRef} className="Pro-Container">
//                 {
//                     loading ? <Loading /> : currentItems.length === 0 ? (<p className='no-results'>Sin resultados...</p>) :
//                     currentItems.map((product, i) => 
                    
//                         <Link key={i} to="">

//                        <div key={i} className="pro">
//                            <img src={product.img} alt={product.name} />
//                            <div className="des">
//                                <h5>{product.name}</h5>
//                                <p>
//                                    {product.description}
//                                </p>
//                                <h4>${product.price}</h4>
//                            </div>
//                            <Link className="a-contain" onClick={() => addItemToCart(product)}>
//                                <img className="shopping" src={cart} alt="Shopping Cart" />
//                            </Link>
//                        </div>
//                        </Link>
                   
//                    )
//                 }
//             </div>

//             <ReactPaginate
//                 previousLabel={'<'}
//                 nextLabel={'>'}
//                 breakLabel={'...'}
//                 pageCount={totalPages}
//                 marginPagesDisplayed={2}
//                 pageRangeDisplayed={5}
//                 onPageChange={handlePageClick}
//                 containerClassName={'pagination'}
//                 activeClassName={'active'}
//             />
//         </div>
//     );
// }

// export default Productos;









// -----------------------------------------------------------------------------------------------------
// CODIGO DE PRUEBA CON BOTON DE AUTORIZACION FUNCIONA
// import React from 'react';
// import useSheets from '../useSheets';

// const Productos = () => {
//   const { isAuthorized, content, handleAuthClick, handleSignoutClick } = useSheets();

//   return (
//     <div>
//       <p>Sheets API Quickstart</p>
//       <button onClick={handleAuthClick}>
//         {isAuthorized ? 'Refresh' : 'Authorize'}
//       </button>
//       <button onClick={handleSignoutClick} style={{ visibility: isAuthorized ? 'visible' : 'hidden' }}>
//         Sign Out
//       </button>
//       <pre style={{ whiteSpace: 'pre-wrap' }}>{content}</pre>
//     </div>
//   );
// };

// export default Productos;


// ----------------------------------------------------------------------------------------------------------------------
// CODIGO SIN BOTON DE AUTORIZACION(SE AUTORIZA AUTOMATICAMENTE) NO  FUNCIONO EN PRIMERAS
// import React from 'react';
// import useSheets from '../useSheets';

// const Productos = () => {
//   const { content } = useSheets();

//   return (
//     <div>
//       <p>Sheets API Quickstart</p>
//       <pre style={{ whiteSpace: 'pre-wrap' }}>{content}</pre>
//     </div>
//   );
// };

// export default Productos;

















// PRODUCTOS CON ID UUIDV4
// import React, { useContext, useState, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { v4 as uuidv4 } from 'uuid';
// import ReactPaginate from 'react-paginate';
// import "../cssfolder/Productos.css";
// import star from "../icons/staryellow.png";
// import cart from "../icons/shop-cart.svg";
// import { CartContext } from '../Context/CartContext';
// import Loading from './Loading';
// // import useSheets from '../useSheets';
// import ButtonCategories from './ButtonCategories';
// import SearchBar from './SearchBar';

// const Productos = () => {
//     const { addItemToCart, productos, loading, error } = useContext(CartContext);
//     // const [filter, setFilter] = useState('');
//     const [currentPage, setCurrentPage] = useState(0);
//     const [itemsPerPage] = useState(30); // Fijamos la cantidad de items por página
//     const containerRef = useRef(null);

//     // const { data, loading, error } = useSheets(
//     //     'AIzaSyBpHDI9OLva3Ed1ANXi27__yYzcjfm85Dg',
//     //     '1jjFklr_CvTKJfxZZJyIZvxRyofNdmHVTNMp1TtjPmCc',
//     //     'Hoja1!A2:G',
//     //     filter
//     // );
//     // AIzaSyCSr3Z9VnT83G2q2OrxBFsXCrklxzKMGds apikey
//     // 1066303412984-q41khul37v8i8heoi4mtg03dpe4i0i29.apps.googleusercontent.com keyOAUTH


//     const productosConId = productos ? productos.map(product => ({ ...product, id: uuidv4() })) : [];

//     const indexOfLastItem = (currentPage + 1) * itemsPerPage;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//     const currentItems = productosConId.slice(indexOfFirstItem, indexOfLastItem);
//     console.log(currentItems)

//     const totalPages = Math.ceil(productosConId.length / itemsPerPage);

//     const handlePageClick = (event) => {
//         setCurrentPage(event.selected);
//         if (containerRef.current) {
//             containerRef.current.scrollIntoView({ behavior: 'smooth' });
//         }
//     };

//     return (
//         <div className="shirts-container">
//             <ButtonCategories />
//             <SearchBar />

//             <div ref={containerRef} className="Pro-Container">
//                 {
//                     loading ? <Loading /> : currentItems.length === 0 ? (<p className='no-results'>Sin resultados...</p>) :
//                     currentItems.map((product, i) => 
                    
//                         <Link key={i} to={`/${i+1}`}>

//                        <div key={i} className="pro">
//                            <img src={product.img} alt={product.name} />
//                            <div className="des">
//                                <h5>{product.name}</h5>
//                                <p>
//                                    {product.description}
//                                </p>
//                                <h4>${product.price}</h4>
//                            </div>
//                            <Link className="a-contain" onClick={() => addItemToCart(product)}>
//                                <img className="shopping" src={cart} alt="Shopping Cart" />
//                            </Link>
//                        </div>
//                        </Link>
                   
//                    )
//                 }
//             </div>

//             <ReactPaginate
//                 previousLabel={'<'}
//                 nextLabel={'>'}
//                 breakLabel={'...'}
//                 pageCount={totalPages}
//                 marginPagesDisplayed={2}
//                 pageRangeDisplayed={5}
//                 onPageChange={handlePageClick}
//                 containerClassName={'pagination'}
//                 activeClassName={'active'}
//             />
//         </div>
//     );
// }

// export default Productos;



// SIN ID UUIDV4
import React, { useContext, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import "../cssfolder/Productos.css";
import cart from "../icons/shop-cart.svg";
import star from "../icons/star.svg";
import { CartContext } from '../Context/CartContext';
import Loading from './Loading';
import ButtonCategories from './ButtonCategories';
import SearchBar from './SearchBar';

const Productos = () => {
    const { addItemToCart, productos, loading, error } = useContext(CartContext);
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage] = useState(28); // Fijamos la cantidad de items por página
    const containerRef = useRef(null);

    const indexOfLastItem = (currentPage + 1) * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = productos.slice(indexOfFirstItem, indexOfLastItem);
    console.log(currentItems) 


    const totalPages = Math.ceil(productos.length / itemsPerPage);

    const handlePageClick = (event) => {
        setCurrentPage(event.selected);
        if (containerRef.current) {
            containerRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="shirts-container" id="catalogo">
            <ButtonCategories />
            <SearchBar />

            {/* Este es el elementos que contiene la lista de Productos */}
            <div ref={containerRef} className="Pro-Container">
                {
                    loading ? <Loading /> : currentItems.length === 0 ? (<p className='no-results'>Sin resultados...</p>) :
                    // Se encarga de pintar cada uno de los productos que provienen de la Hoja de Calculo de Google Sheets
                    currentItems.map((product, i) => 
                        <Link key={i} to={`/${product.id}`}>
                            <div key={i} className="pro">
                                {/* Imagen del Producto */}
                                <img src={product.img} alt={product.name} />
                                <div className="des">
                                    {/* Nombre del Producto */}
                                    <h5>{product.name}</h5>
                                    <div className="star">
                                        <img src={star} alt="star" />
                                        <img src={star} alt="star" />
                                        <img src={star} alt="star" />
                                        <img src={star} alt="star" />
                                        <img src={star} alt="star" />
                                    </div>           
                                    {/* Precio del Producto */}                        
                                     <h4>${product.price}</h4>
                                     {/* En caso de estar agotado */}
                                    {product.stock === 'agotado' && <span className="out-of-stock">Agotado</span>}
                                </div>
                                {/* Icono de carrito para agregar productos */}
                                <Link className="a-contain" onClick={() => addItemToCart(product)}>
                                    <img className={`shopping ${product.stock === 'agotado' && 'disabled-link'}`} src={cart} alt="Shopping Cart" />
                                </Link>
                            </div>
                        </Link>
                    )
                }
            </div>

                {/* Este elemento tiene como funcion ir a la siguiente lista de Productos */}
            <ReactPaginate
                previousLabel={'<'}
                nextLabel={'>'}
                breakLabel={'...'}
                pageCount={totalPages}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                activeClassName={'active'}
            />
        </div>
    );
}

export default Productos;


