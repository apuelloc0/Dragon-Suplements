// Componente que representa Botones para cambiar de categoria
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
            {/* Flecha Left */}
            <button className="scroll-button" onClick={scrollLeft}>{"<"}</button>
            <div className="Button-category" ref={containerRef}>
                {/* Boton de "Mostrar Todos" */}
                <div className="category-item" onClick={() => setFilter('')}>
                    <p>Mostrar Todos</p>
                </div>
                {/* Boton de "Proteina" */}
                <div className="category-item" onClick={() => setFilter('proteina')}>
                    <p>Proteina</p>
                </div>
                {/* Boton de "Creatina" */}
                <div className="category-item" onClick={() => setFilter('creatina')}>
                    <p>Creatina</p>
                </div>
                {/* Boton de "Suplementos" */}
                <div className="category-item" onClick={() => setFilter('suplemento')}>
                    <p>Suplementos</p>
                </div>
              
            </div>
            {/* Flecha Right */}
            <button className="scroll-button" onClick={scrollRight}>{">"}</button>
        </div>
    );
}

export default ButtonCategories;










