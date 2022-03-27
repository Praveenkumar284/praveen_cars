import React from 'react';
import './App.css';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function App(){
    return(
        <Router>
            <Routes>
                <Route path= "/" element={<Home/>}/>
                <Route path= "/login" element={<Login/>}/>
                <Route path= "/register" element={<Register/>}/>
            </Routes>
        </Router>
    );
}
export default App;






