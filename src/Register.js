import React from 'react';
import {Link} from "react-router-dom";
import './Register.css';

function Register(){
    return(
        <div className="main-Register">


            <div className="left-Side">

            </div>
            <div className="right-Side">
                <div className="top-right">
                <h4>Already have an Account<br/>
                <h3><Link id="link-signin" to="/login">Login Here!</Link></h3>
                    </h4>
                </div>
                <div className="body-right">
                    <div className="container">
                        <form>
                        <div className="SignUp-Details">
                            <h5>FullName</h5><br/>
                            <input type="text" name="Fname" id="fname"/>
                        </div>
                        <div className="SignUp-Details">
                            <h5>Email</h5><br/>
                            <input type="email" name="Enter your mail" id="email"/>
                        </div>
                        <div className="SignUp-Details">
                            <h5>Password</h5><br/>
                            <input type="password" name="Enter your password" id="pwd"/>
                        </div>
                        <div className="SignUp-Details">
                            <h5>Confirm Password</h5><br/>
                            <input type="password" name="confirm the password" id="cpwd"/>
                        </div>
                            <input type="submit" value="SignUp"/>
                        </form>
                    </div>


                </div>

            </div>
        </div>
    );
}
export default Register;