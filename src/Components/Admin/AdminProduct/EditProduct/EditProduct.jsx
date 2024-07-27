import { Link } from 'react-router-dom';
import AdminNav from '../../AdminNav/AdminNav';
import './EditProduct.css';

const EditProduct = () => {
    return (
        <div className='editProduct-container'>
            <div>
                <AdminNav/>
            </div>
            <div className='editProduct'>
            <div className='edit-delete'>
                <Link to={"/admin/product/post"} style={{textDecoration:"none",color:"white"}}>Post Product </Link><span> | </span>
                <Link to={"/admin/product/delete"} style={{textDecoration:"none",color:"white"}}>Delete Product</Link><span> | </span>
                <Link to={"/admin/product/edit"} style={{textDecoration:"none",color:"green"}}>Edit Product</Link>

            </div>
             Edit   Comming soon
            </div>
        </div>
    );
};

export default EditProduct;