import React, { useContext } from 'react';
import { OrdersContext } from '../Context/OrdersContext';
import "../cssfolder/Orders.css";

const OrderList = () => {
    const { orders, completeOrder, cancelOrder, completedOrders, earnings } = useContext(OrdersContext);

    return (
        <div className="OrderList">
            <h2>Pedidos</h2>
            <div className="orders-list">
                {orders.length === 0 ? (
                    <p>No hay pedidos pendientes.</p>
                ) : (
                    orders.map(order => (
                        <div key={order.id} className="order-item">
                            <p>Fecha: {order.date}</p>
                            <p>Nombre: {order.userName}</p>
                            <p>Teléfono: {order.phone}</p>
                            <p>Productos: {order.products.map(product => product.name).join(', ')}</p>
                            <div className="order-actions">
                                <button className="complete-button" onClick={() => completeOrder(order.id)}>Realizado</button>
                                <button className="cancel-button" onClick={() => cancelOrder(order.id)}>X</button>
                            </div>
                        </div>
                    ))
                )}
            </div>

            <h2>Historial de Pedidos</h2>
            <div className="completed-orders-list">
                {completedOrders.length === 0 ? (
                    <p>No hay pedidos completados.</p>
                ) : (
                    completedOrders.map(order => (
                        <div key={order.id} className="order-item">
                            <p>Fecha: {order.date}</p>
                            <p>Nombre: {order.userName}</p>
                            <p>Teléfono: {order.phone}</p>
                            <p>Productos: {order.products.map(product => product.name).join(', ')}</p>
                            <p>Total: ${order.totalPrice}</p>
                        </div>
                    ))
                )}
            </div>

            <h2>Ganancias Totales</h2>
            <p>${earnings}</p>
        </div>
    );
};

export default OrderList;




