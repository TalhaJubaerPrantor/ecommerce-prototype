import { Link } from 'react-router-dom';
import AdminNav from '../../AdminNav/AdminNav';
import './PostProduct.css';

const PostProduct = () => {
    return (
        <div className='postProduct-container'>
            <div><AdminNav/></div>
            {/* Sub navbar of Product */}
            <div className='postProduct'>
            <div className='post-delete'>
                <Link to={"/admin/product/post"} style={{textDecoration:"none",color:"green"}}>Post Product </Link><span> | </span>
                <Link to={"/admin/product/delete"} style={{textDecoration:"none",color:"white"}}>Delete Product</Link><span> | </span>
                <Link to={"/admin/product/edit"} style={{textDecoration:"none",color:"white"}}>Edit Product</Link>
            </div>
            {/* Post Product */}
            <div className='postProduct-inputs'>
                <div>
                Name: <br /> <input type="text" name="name"/><br />
                Category: <br /> 
                <select name="" id="">
                    <option value="">Option1</option>
                    <option value="">Option2</option>
                    <option value="">Option3</option>
                </select><br />
                Price: <br /> <input style={{width:"60px"}} type="number" name="name"/><br />
                Price Before: <br /> <input style={{width:"60px"}} type="number" name="name"/><br />
                Stock: <br /> <input style={{width:"60px"}} type="number" name="name"/><br />
                Description: <br /> <textarea name="" id="" cols="28" rows="8"></textarea>
                <br /><br />
                <button className='submit-btn'>Post</button>
                </div>
                <div style={{alignItems:"center"}}>
                    <input type="image" style={{height:"300px",width:"300px",border:"1px solid",marginTop:"15px"}} />
                    <br />
                    <i>*Use 300/300 image</i>
                </div>
            </div>

            </div>
        </div>
    );
};

export default PostProduct;