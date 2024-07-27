import Navbar from "../Navbar/Navbar";
import "./SignUp.css"
import { Link } from "react-router-dom";
const SignUp = () =>{

    


            //  const firstName=document.getElementById("firstName").value
            // const lastName=document.getElementById("lastName").value
            // const phone=document.getElementById("phone").value
            // const city=document.getElementsByName("city").value
            // const address=document.getElementById("address").value
            // const termsAndCondition=document.getElementById("terms")

             
       


    return (
        <div>
            <Navbar/>
        <div className="signUp-container">
            <div className="sign-up">
                <h2>Sign Up</h2>
                <h6>First Name</h6>
                <input id="firstName" type="text"/>
                <h6>Last Name</h6>
                <input id="lastName" type="text"/>

                <h6>Phone(BD)</h6>
                <input id="phone" type="phone" />
                <h6>Email</h6>
                <input id="phone" type="email" />
                <h6>City</h6>
                <select id="city" name="city" >
                    <option value="null">Choose city</option>
                    <option value="dhaka">Dhaka</option>
                    <option value="rajshahi">Rajshahi</option>
                    <option value="chitagong">Chitagong</option>
                    <option value="sylhet">Sylhet</option>
                    <option value="rangpur">Rangpur</option>
                    <option value="barishal">Barishal</option>
                    <option value="mymenshing">Mymenshing</option>
                    <option value="khilna">Khulna</option>
                </select>
                <h6>Address</h6>
                <input id="address" type="text"/>
                <h6>Password</h6>
                <input id="password" type="password"/>
                <h6>Reapet Password</h6>
                <input id="repetePassword" type="password"/>
                <br />
                <input type="checkbox" name="terms" id="terms" />
                Accept Tearms and Conditions
                <br /><br />
                <input  type="button" value="  Sign Up  "  />
                <span>Already have an account?<Link to="/login">Login</Link></span>

                </div>
            </div>
        </div>
    );
};

export default SignUp;