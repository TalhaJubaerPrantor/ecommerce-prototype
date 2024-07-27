import { useEffect, useState } from 'react';
import './Cart.css';

const Cart = () => {
    const [orders,setOrders]=useState([])
    useEffect(()=>{
        fetch('../../../../product.json')
        .then(res=>res.json())
        .then(data=>setOrders(data))
    })
    return (
        <div className='cheakout'>

            {
                orders.map(order=>(
                    <div key={order.id} className='order-item'>
                    <div style={{marginTop:"8px"}}>
                    <img style={{width:"50px"}}  src={order.images[0]}  />
                    {order.title}
                    </div>
                    <div style={{marginTop:"5px"}}>
                        <button className='delete-btn'>Delete</button>
                    </div>
                    </div>
                ))
            }

            <div>
            <h4>Product:</h4>
            <h4>Discount:</h4>
            <h4>Delevery Charge:</h4>
            <h4>Total:</h4>
            </div>
            

            
        </div>
    );
};

export default Cart;