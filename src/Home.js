import React from 'react';
import mylogo from "./mylogo.png";
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';
import Login from './Login';
import "./Home.css";

function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={mylogo} className="App-logo" />
                &nbsp;
                <Link  to="/login"><button id="explore">Explore Us!</button></Link>
            </header>
        </div>
    );
}
export default Home;