import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'
import { FaSearch } from "react-icons/fa";

function Navbar() {

    return (
        <React.Fragment>
            <section className='hero'>
                <div class="boxnav">
                    <a href='/'> logo </a>
                    <a href='/connexion'> Bouton connexion </a>
                </div>
                <nav class="navbar">
                    <Link class="link" to="/">Home</Link>
                    <Link class="link" to="">Rent</Link>
                    <Link class="link" to="">Buy</Link>
                    <Link class="link" to="">Sell</Link>
                    <Link class="link" to="/support">Support</Link>
                    <div className='searchButton'><FaSearch className='recherche' /></div>
                </nav>
            </section>
        </React.Fragment>
    )
}

export default Navbar