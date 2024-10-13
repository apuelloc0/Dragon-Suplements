import React, { useContext, useState } from 'react';
import '../cssfolder/Formulario.css'; // Asegúrate de importar el CSS
import { CartContext } from '../Context/CartContext';

const Formulario = () => {
    const { cartItems } = useContext(CartContext);
    console.log(cartItems[0].name);

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [numero, setNumero] = useState('');
    const [correo, setCorreo] = useState('');
    const [metodoPago, setMetodoPago] = useState('');
    const [ubicacion, setUbicacion] = useState('');
    const [entrega, setEntrega] = useState('');

    // ----Enviar pedido a Whatsapp---------
    const realizarPedido = (e) => {
        e.preventDefault();

        const datosUsuario = { nombre, apellido, numero, metodoPago, ubicacion, entrega };
        const numeroTelefonico = "584149836224";
        // Crear mensaje con los productos
        const mensaje = `Nuevo Pedido Dragon Suplements
         \n Me gustaría realizar el siguiente pedido: 
        \n- ${cartItems.map((producto) => `${producto.name} - $${producto.price} - Cantidad: ${producto.amount}`).join(', ')}. 
        \n Mis datos son los siguientes: \n- Nombre: ${datosUsuario.nombre} \n- Apellido: ${datosUsuario.apellido} \n- Numero de Cliente: ${datosUsuario.numero} \n- Método de Pago: ${datosUsuario.metodoPago} \n- Entrega: ${datosUsuario.entrega} \n- Ubicación: ${datosUsuario.ubicacion}`;

        const enlaceWha = `https://wa.me/${numeroTelefonico}?text=${encodeURIComponent(mensaje)}`;

        // Redirigir a Whatsapp
        window.open(enlaceWha, "_blank");

        setNombre("");
        setApellido("");
        setCorreo("");
        setMetodoPago("");
        setUbicacion("");
    };

    return (
        <div className="form-container">
            <h2 className='title-form'>Contacto</h2>
            {/* <p>El pago se coordina luego</p> */}
            <form onSubmit={realizarPedido} >
                <div className="form-group">
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                        type="text"
                        id="nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="apellido">Apellido:</label>
                    <input
                        type="text"
                        id="apellido"
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="numero">Número Telefonico:</label>
                    <input
                        type="text"
                        id="numero"
                        value={numero}
                        onChange={(e) => setNumero(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="entrega">Entrega:</label>
                    <select
                        id="entrega"
                        value={entrega}
                        onChange={(e) => setEntrega(e.target.value)}
                    >
                        <option value="Retiro en local">Retiro en local</option>
                        <option value="Domicilio">Domicilio</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="metodoPago">Método de Pago:</label>
                    <select
                        id="metodoPago"
                        value={metodoPago}
                        onChange={(e) => setMetodoPago(e.target.value)}
                    >
                        <option value="Efectivo">Efectivo</option>
                        <option value="Tarjeta">Tarjeta(Disponible en sitio)</option>
                        <option value="Pago Online">Pago Online(Binance, Zelle)</option>
                        <option value="Pago movil">Transferencia(Pago Móvil)</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="ubicacion">Dirección(en caso de elegir Domicilio):</label>
                    <input
                        type="text"
                        id="ubicacion"
                        value={ubicacion}
                        onChange={(e) => setUbicacion(e.target.value)}
                        required
                    />
                </div>
                <div className='form-text'>
                    <p>Sus datos personales se utilizarán unicamente para procesar su pedido y respaldar su experiencia en este sitio web.</p>
                </div>
                <div className='Button-wha'>
                    <button className='Send-wha' type="submit">Finalizar Pedido</button>

                </div>
            </form>
        </div>
    );
};

export default Formulario;






// import React, { useContext, useState } from 'react';
// import '../cssfolder/Formulario.css'; // Asegúrate de importar el CSS
// import { CartContext } from '../Context/CartContext';

// const Formulario = () => {

//     const { cartItems } = useContext(CartContext)
//     console.log(cartItems)

//     const [nombre, setNombre] = useState('');
//     const [apellido, setApellido] = useState('');
//     const [correo, setCorreo] = useState('');
//     const [metodoPago, setMetodoPago] = useState('');
//     const [ubicacion, setUbicacion] = useState('');
//     const [entrega, setEntrega] = useState('');

//     // ----Enviar pedido a Whatsapp---------
//     const realizarPedido = (e) => {
//         e.preventDefault();

//         const datosUsuario = { nombre, apellido, correo, metodoPago, ubicacion, entrega }
//         const numeroTelefonico = "573023602591"
//         // console.log(datosUsuario.nombre)
//         // crear mensaje con los productos
//         const mensaje = `Hola, me gustaria realizar el pedido: ${cartItems.map((producto) => `${producto.name} - ${producto.price} - ${producto.amount}`)}. Mis datos son los siguientes:
//         \n- Nombre: ${datosUsuario.nombre}
//         \n- Apellido: ${datosUsuario.apellido}
//         \n- Correo: ${datosUsuario.correo}
//         \n- Metodo de Pago: ${datosUsuario.metodoPago}
//         \n- Entrega: ${datosUsuario.entrega}
//         \n- Ubicacion: ${datosUsuario.ubicacion}`
//         // const enlaceWha = `https://wa.me/${numeroTelefonico}?text=Hola,%20me%20gustaria%20realizar%20el%20pedido:%0A${mensaje}`

//         const enlaceWha = `https://wa.me/${numeroTelefonico}?text=${mensaje}`
//         // console.log(mensaje)

//         // Redirigir a Whatsapp
//         window.open(enlaceWha, "_blank")

//         setNombre("")
//         setApellido("")
//         setCorreo("")
//         setMetodoPago("")
//         setUbicacion("")
//     }

//     return (
//         <div className="form-container">
//             <h2 className='title-form'>Contacto</h2>
//             <form onSubmit={realizarPedido}>
//                 <div className="form-group">
//                     <label htmlFor="nombre">Nombre:</label>
//                     <input
//                         type="text"
//                         id="nombre"
//                         value={nombre}
//                         onChange={(e) => setNombre(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="apellido">Apellido:</label>
//                     <input
//                         type="text"
//                         id="apellido"
//                         value={apellido}
//                         onChange={(e) => setApellido(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="correo">Correo Electrónico:</label>
//                     <input
//                         type="email"
//                         id="correo"
//                         value={correo}
//                         onChange={(e) => setCorreo(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="entrega">Entrega:</label>
//                     <select
//                         id="entrega"
//                         value={entrega}
//                         onChange={(e) => setEntrega(e.target.value)}
//                     >
//                         <option value="tienda">Retiro en tienda</option>
//                         <option value="envio">Envío</option>
//                     </select>
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="metodoPago">Método de Pago:</label>
//                     <select
//                         id="metodoPago"
//                         value={metodoPago}
//                         onChange={(e) => setMetodoPago(e.target.value)}
//                     >
//                         <option value="efectivo">Efectivo</option>
//                         <option value="transferencia">Transferencia Bancaria</option>
//                         <option value="contraentrega">Pago contraentrega</option>
//                     </select>
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="ubicacion">Ubicación:</label>
//                     <input
//                         type="text"
//                         id="ubicacion"
//                         value={ubicacion}
//                         onChange={(e) => setUbicacion(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <button type="submit" className="submit-button">Enviar a Whatsapp</button>
//             </form>
//         </div>
//     );
// };

// export default Formulario;
