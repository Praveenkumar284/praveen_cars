import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import './Login.css';
import welcomeimg from './welcome.jpg';

function Login(){

    const [emailval,setemailval]=useState("");
    const [passval,setpassval]=useState("");

    const handlesubmit=(event)=>{
        event.preventDefault();
    }
    return(
    <div className="main-login">
        <h1>Praveen_Rentals</h1>

        <div className="login-contain">
            <div className="left-side">
                <form onSubmit={handlesubmit}>
                    <label for ="email1"><b>Email</b></label>
                    <input placeholder="Enter your email..." type="email" value={emailval} onChange={(e)=>{setemailval(e.target.value)}} id="email1"/><br/>
                    <label for="pwd1"><b>Password</b></label>
                    <input placeholder="Enter Password..." type="password" value={passval} onChange={(e)=>{setpassval(e.target.value)}} id="pwd1"/> <br/>
                    <button type="submit" id="submit">Login</button>
                </form>
                <div className="footer">
                    <h4>Don't have an Account?<br/><Link className='link' to="/Register">Register Now..</Link></h4>
                </div>

            </div>
            <div className="right-side">
                <div className="welcome-tag">
                    <h2><b>!.Welcome Back.!</b></h2><br/><br/>
                </div>
                <div className="welcomeImg">
                    <img src={welcomeimg} id="img_id"/>

                </div>
            </div>



    </div>

    </div>
    );
}
export default Login;