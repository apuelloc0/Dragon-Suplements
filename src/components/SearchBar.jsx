// Representa el Buscador(Search) 
import React, { useState } from 'react';
import lupa from '../icons/lupaicon.svg';
import "../cssfolder/SearchBar.css";
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

const SearchBar = () => {

    const { setFilter } = useContext(CartContext);

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
        setFilter(value.toLowerCase()); // Convertir a minúsculas
    };

    return (
        <div className="search-bar">
            {/* Este elemento es el Buscador */}
            <input
                className="search-input"
                type="text"
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={handleSearch}
            />
            <button type="submit" onClick={() => setFilter(searchTerm.toLowerCase())}>
                <img className='lupa-icon' src={lupa} alt="lupa" />
            </button>
        </div>
    );
};

export default SearchBar;








// import React, { useState } from 'react';
// import "../cssfolder/SearchBar.css";

// const SearchBar = ({ setFilter }) => {
//     const [searchTerm, setSearchTerm] = useState('');

//     const handleSearch = (event) => {
//         const value = event.target.value;
//         setSearchTerm(value);
//         setFilter(value.toLowerCase()); // Convertir a minúsculas
//     };

//     return (
//         <div className="search-bar">
//             <input
//                 className="search-input"
//                 type="text"
//                 placeholder="Buscar productos..."
//                 value={searchTerm}
//                 onChange={handleSearch}
//             />
//             <button type="submit" onClick={() => setFilter(searchTerm.toLowerCase())}>Buscar</button>
//         </div>
//     );
// };

// export default SearchBar;

