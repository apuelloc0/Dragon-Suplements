// Representa la pagina principal
import "../cssfolder/Home.css";
import Productos from "../components/Productos";
// import { useEffect } from "react";

const Home = () => {

    const scrollToCatalogo = () => {
        document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' });
      };

    //   const texts = [
    //     "CONSIGUE TUS SUPLEMENTOS CON NOSOTROS",
    //     "AlCANZA TU MAXIMO RENDIMIENTO",
    //     "QUE ESPERAS PARA REALIZAR TU"
    //   ];
    //   const [currentTextIndex, setCurrentTextIndex] = useState(0);
    
    //   useEffect(() => {
    //     const interval = setInterval(() => {
    //       setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    //     }, 4000); // Cambia cada 4 segundos
    
    //     return () => clearInterval(interval);
    //   }, [texts.length]);

    return (
        <div className='Home'>

            <div class="Home-hero">
                <div class="slider-container">
                    {/* Contiene los textos Principal, secundario y Boton de Ir a Catalogo */}
                    <h1 className="Home-hero-h1">Consigue tus suplementos con nosotros</h1>
                    <p className="Home-hero-text">Ordena ahora!</p>
                    <button className="Home-hero-button" onClick={scrollToCatalogo}>Ver Catálogo</button>
                </div>
            </div>

            {/* El Componente Productos que contiene Botones de categorias, El buscador(Search) y la lista de productos(Catalogo) */}
            <Productos />

            {/* Elemento para agregar imagenes */}
            <div className="sm-banner-container">
                <img src="" alt="" />
                 {/* <div className="sm-banner1">
                     <div className="sm-banner banner-box"></div>
                </div>

                <div className="sm-banner2">
                    <div className="sm-banner banner-box2"></div>
                </div> */}
            </div>

        </div>
    )
}

export default Home
