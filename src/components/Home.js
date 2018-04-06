import React, { Component } from 'react';
import './artist/Home.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


export default class Home extends Component {
    render() {
        return(
            <div className="home-container">
                <div className="home-content">
                <img src="Houser.png" alt=""/>
                    <div className="input-container">
                        <h4>Username</h4>
                        <input type="text"/>
                        <h4>Password</h4>
                        <input type="password"/>
                    </div>
                    <div className="button-container">
                    <Link to="/welcome" className="login-btn">Login</Link>
                        <Link to="/welcome" className="register-btn">Register</Link>

                        
                    </div>
                </div>
            </div>
        )
    }
}
