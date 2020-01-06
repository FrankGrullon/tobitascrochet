import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
//import styled from 'styled-components';
import { ButtonContainer } from './Button'



export default class Navbar extends Component {
    render() {
        return (
            
            <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="./">
                        <img src="./crochet.svg" width="30" height="30" className="d-inline-block align-top" alt="crochet home" />
                        Tobita's Crochet Items
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="./about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./samples">Samples</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./shipping">Shipping</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./products">Products</a>    
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <Link to="/cart" className="ml-auto">
                        <ButtonContainer>
                            <span className="mr-2">
                                <i className="fas fa-cart-plus" />
                            </span>
                            My Cart
                        </ButtonContainer>
                    </Link>
            </nav>
            
        );
    }
}

