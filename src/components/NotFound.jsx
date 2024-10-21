import React from 'react';
import { Link } from 'react-router-dom';
import '../cssfolder/NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404 - Página No Encontrada</h1>
      <p className="not-found-message">Lo sentimos, la página que estás buscando no existe.</p>
      <Link to="/" className="not-found-link">Volver a la página principal</Link>
    </div>
  );
};

export default NotFound;

