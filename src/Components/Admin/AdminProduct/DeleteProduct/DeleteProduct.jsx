import './DeleteProduct.css';
import { Link } from 'react-router-dom';
import AdminNav from '../../AdminNav/AdminNav';

const DeleteProduct = () => {
    return (
        <div className='deleteProduct-container'>
            <div><AdminNav/></div>
            <div className='deleteProduct'>
            <div className='post-delete'>
                <Link to={"/admin/product/post"} style={{textDecoration:"none",color:"white"}}>Post Product </Link><span> | </span>
                <Link to={"/admin/product/delete"} style={{textDecoration:"none",color:"green"}}>Delete Product</Link><span> | </span>
                <Link to={"/admin/product/edit"} style={{textDecoration:"none",color:"white"}}>Edit Product</Link>
            </div>
            Delete  Comming soon
            </div>
        </div>
    );
};

export default DeleteProduct;