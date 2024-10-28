import React from 'react'
import "../cssfolder/Welcome.css";
import StoreOpenClose from "../components/StoreOpenClose";
import logo from "../icons/gymicon.webp"; // Asegúrate de importar el logo
import admin from "../icons/admin.svg";
import tienda from "../icons/tienda.svg";
import delivery from "../icons/delivery.svg";
import avion from "../icons/avion.svg";
import pesas from "../icons/pesasbanner.webp";
import { Link } from 'react-router-dom';


const Welcome = () => {
  return (
    <div className='Welcome'>

        <div className="Welcome-banner">
            <img src={pesas} alt="" />
        </div>

        <div className='schedule-logo'>
            <img src={logo} alt="" />   

            <StoreOpenClose /> 
            <img src={admin} alt="cart Icon" className="admin" />

        </div> 
      
        <div className="Welcome-info">
            <div className="Welcome-coordinates">
                <h3>Dragon Suplements</h3>
                <p>Necesitas suplementos? estas en el lugar correcto 😇</p>
                <div className="coordinates-option">
                    <span><img src={tienda} alt="cart Icon" className="tienda" /> En tienda</span>
                    <span><img src={delivery} alt="cart Icon" className="domicilio" /> Domicilio</span>
                    <span><img src={avion} alt="cart Icon" className="envios" /> Envios Nacionales</span>
                </div>
                <p className='location'>📍 C. 14 Sur, Bucaramanga, Santander, Colombia</p>
            </div>
            <div className="Welcome-buttons">
                <button className='Welcome-buttons-1'>WhatsApp</button>
                <button className='Welcome-buttons-2'><Link to={'/home'}>Catálogo</Link></button>
            </div>
        </div>
    </div>
  )
}

export default Welcome
