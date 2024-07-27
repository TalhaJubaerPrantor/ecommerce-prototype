import { Link } from 'react-router-dom';
import './AdminLogin.css';
import { useState } from 'react';

const AdminLogin = () => {

    const [login,setLogin]=useState(false)
    const adminLogin=()=>{
        const userName=document.getElementById("userName").value
        const password=document.getElementById("password").value
        if(userName=='a'&&password=="0"){
            setLogin(true)
        }

    }

    


    return (
        <div className='admin-page'>
            <div className='admin'>
                <h2>Admin</h2><br />
                <h4>User Name:</h4>
                <input onChange={adminLogin}  type="text" id="userName" />
                <h4>Password:</h4>
                <input onChange={adminLogin} type="password"  id="password" /><br /><br />
                <Link to={login? "/admin/home":"/admin"} className='adminLogin-btn'>&nbsp; Login &nbsp;</Link>
            </div>
        </div>
    );
};

export default AdminLogin;