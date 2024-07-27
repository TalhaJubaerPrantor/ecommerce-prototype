// import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './ProductDet.css'

const ProductDet = () => {
    return (
        <div>
            <Navbar/>
        <div className='productDet-container'>
            <div className='prod-1'>
                <img className='prod-img' src="carousel2.png"/>
            </div>
            {/* Product Descripton */}
            <div className='prod-det prod-2'>
                <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, deserunt.</h3><br />
                <h5>100 BDT <span style={{color:"gray", fontSize:"small"}}>/ Per pc</span></h5>
                <h6>Stock: 6pc</h6>
                <br />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis saepe odit provident deleniti, nemo assumenda rem.
                     Rerum modi ullam dignissimos mollitia nisi deserunt doloribus? Voluptate dignissimos enim vel a labore?
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis saepe odit provident deleniti, nemo assumenda rem.
                     Rerum modi ullam dignissimos mollitia nisi deserunt doloribus? Voluptate dignissimos enim vel a labore?
                </p>
                <br />
                <h6>Type:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Solid</h6>
                <h6>Color:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Black</h6>
                <h6>Matarial:&nbsp;&nbsp;&nbsp;&nbsp;Cotton</h6>
                <h6>Brand:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tannwa</h6>
                <br />
                {/* Dropdowns and quantity */}
                <div className='dropdowns'>
                {/* Dropdown */}
                <select className="form-select" aria-label="Default select example">
                    <option selected>Choose Size</option>
                    <option value="1">S</option>
                    <option value="2">M</option>
                    <option value="3">L</option>
                    <option value="3">XL</option>
                </select>
                {/* Quantity */}
                <div className="quantity">
                    <button className="minus" aria-label="Decrease">&minus;</button>
                    <input type="number" className="input-box" value="1" min="1" max="10"/>
                    <button className="plus" aria-label="Increase">+</button>
                </div>
                </div><br /><br />
                {/* <Link to="/productdetails/cheakout" className='cheakout-btn' type='button'>Buy</Link> */}
            </div>
        </div>
        </div>
    );
};

export default ProductDet;