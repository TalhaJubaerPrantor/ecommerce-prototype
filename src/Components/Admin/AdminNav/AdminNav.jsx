import { Link } from 'react-router-dom';
import './AdminNav.css';

const AdminNav = () => {
    return (
        <div>
        <div className='admin-nav'>
            <Link to={"/admin/home"} style={{borderBottom:"2px solid red",height:"40px"}} className='nav-element'>Admin</Link>
            <Link to={"/admin/product/post"} className='nav-element'>Product</Link>
            <Link to={"/admin/orders"} className='nav-element'>Orders</Link>
            <Link to={"/admin/traffic"} className='nav-element'>Traffic</Link>
            <Link to={"/admin/sales"} className='nav-element'>Sales</Link>
            <Link to={"/admin/performance"} className='nav-element'>Performance</Link>
            <Link className='nav-element'></Link>
            <Link className='nav-element'></Link>
            <Link className='nav-element'></Link>
        </div>
        </div>
    );
};

export default AdminNav;