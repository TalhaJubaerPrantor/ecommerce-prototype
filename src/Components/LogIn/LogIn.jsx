import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'

import './Login.css';

const LogIn = () => {
    return (
        <div>
            <Navbar/>
        <div className="login-container">
            
            <div className="login">
                <h2>Login</h2>
                <h6>Email/Phone</h6>
                <input id="email" type="email"/>
                <h6>Password</h6>
                <input id="password" type="password"/>
                <br />
                <input  type="button" value="  Login  "/>
                <span>Don&apos;t have an account?<Link to="/signup">SignUp</Link></span>


            </div>
        </div>
        </div>
    );
};

export default LogIn;