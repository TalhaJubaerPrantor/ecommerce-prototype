import AdminNav from '../AdminNav/AdminNav';
import './AdminOrders.css';

const AdminOrders = () => {
    return (
        <div className='adminOrder-container'>
             <div>
                <AdminNav/>
            </div>
            <div>
                <h1>Orders</h1>
            </div>
        </div>
    );
};

export default AdminOrders;