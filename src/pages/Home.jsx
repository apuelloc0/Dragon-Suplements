import "../cssfolder/Home.css";
import Productos from "../components/Productos";
import logokamus from "../icons/logokamus.webp";

const Home = () => {

    return (
        <div className='Home'>

            <div class="Home-hero">
                <div class="slider-container">
                    <h1 className="Home-hero-h1">Los mejores suplementos a tu alcance</h1>
                    <p className="Home-hero-text">Con los mejores precios</p>
                    <button className="Home-hero-button">Ver Catálogo</button>
                </div>
            </div>

            <Productos />

            {/* <div className="Home banner section-m1">
            </div> */}

            <div className="sm-banner-container">
                 <div className="sm-banner1">
                     <div className="sm-banner banner-box"></div>
                    <h3>Una buena alimentacion y mantenerse hidratado es la clave</h3>
                </div>

                <div className="sm-banner2">
                    <h3>Y recuerda, siempre entrenar pesado y al fallo</h3>
                    <div className="sm-banner banner-box2"></div>
                </div>
            </div>

        </div>
    )
}

export default Home
