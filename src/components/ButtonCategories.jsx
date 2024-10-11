import React, { useRef } from 'react';
import "../cssfolder/ButtonCategories.css";
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

const ButtonCategories = () => {

    const { setFilter } = useContext(CartContext);

    const containerRef = useRef(null);

    const scrollLeft = () => {
        containerRef.current.scrollBy({ left: -containerRef.current.clientWidth, behavior: 'smooth' });
    };

    const scrollRight = () => {
        containerRef.current.scrollBy({ left: containerRef.current.clientWidth, behavior: 'smooth' });
    };

    return (
        <div className="shirts-section1">
            <button className="scroll-button" onClick={scrollLeft}>{"<"}</button>
            <div className="Button-category" ref={containerRef}>
                <div className="category-item" onClick={() => setFilter('')}>
                    {/* <img src={lagerImage} alt="Lager" /> */}
                    <p>Mostrar Todos</p>
                </div>
                <div className="category-item" onClick={() => setFilter('proteina')}>
                    {/* <img src={tequilaImage} alt="Tequila" /> */}
                    <p>Proteina</p>
                </div>
                <div className="category-item" onClick={() => setFilter('creatina')}>
                    {/* <img src={whiteWineImage} alt="White Wine" /> */}
                    <p>Creatina</p>
                </div>
                <div className="category-item" onClick={() => setFilter('suplemento')}>
                    {/* <img src={aleImage} alt="Ale" /> */}
                    <p>Suplementos</p>
                </div>
                {/* <div className="category-item" onClick={() => setFilter('Mecatos')}>
                    <img src={redWineImage} alt="Mecatos" />
                    <p>Mecatos</p>
                </div> */}
            </div>
            <button className="scroll-button" onClick={scrollRight}>{">"}</button>
        </div>
    );
}

export default ButtonCategories;











// import lagerImage from '../icons/logovino2.webp';
// import tequilaImage from '../icons/logovino2.webp';
// import whiteWineImage from '../icons/logovino2.webp';
// import aleImage from '../icons/logovino2.webp';
// import redWineImage from '../icons/logovino2.webp';




// --------REEMPLAZO-------
// import React from 'react';
// import "../cssfolder/ButtonCategories.css";

// const ButtonCategories = ({ setFilter }) => {
//     return (
//         <div className="shirts-section1">
//             <div className="Button-category">
//                 <button onClick={() => setFilter('')}>Mostrar Todos</button> {/* Botón para mostrar todos */}
//                 <button onClick={() => setFilter('Cerveza')}>Cervezas</button>
//                 <button onClick={() => setFilter('Ron')}>Ron</button>
//                 <button onClick={() => setFilter('Aguardiente')}>Aguardiente</button>
//             </div>
//         </div>
//     );
// }

// export default ButtonCategories;