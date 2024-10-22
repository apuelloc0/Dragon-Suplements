// Componente que representa el pie de pagina
import React from 'react'
import "../cssfolder/Footer.css";
import logo from "../icons/gymicon.webp"; // Asegúrate de importar el logo
import { Link } from 'react-router-dom';
import instagram from "../icons/instaicon.svg";
import facebook from "../icons/faceboook.svg";

const Footer = () => {
    return (
        <div className='Footer'>
            <div className="Footer-top">

                <div className="Social-media">
                    {/* Para agregar las redes sociales del negocio */}
                    <img className='icon' src={instagram} alt="" />
                    <img className='icon' src={facebook} alt="" />
                </div>
                <div className="Footer-logo">
                    {/* Es el mismo logo del negocio */}
                    <img src={logo} alt="logo-img" />
                </div>
                <div className="Footer-Contact">
                    {/* Contacto del negocio */}
                    <span>Contacto</span>
                    <span>300-6624419</span>
                    <span>@dragon_suplements</span>

                </div>
                {/* <div className="Footer-Pay">
                    <span>Metodos de Pago:</span>
                    <span>Transferencia Bancaria</span>
                    <span>Efectivo</span>
                    <span>Contraentrega</span>
                </div> */}
            </div>
            <div className="Footer-bottom">
                <p>© 2024 Dragon Suplements C.A - New York</p>
            </div>
        </div>
    )
}

export default Footer
