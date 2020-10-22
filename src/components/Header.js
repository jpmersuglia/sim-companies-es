import React from 'react'
import Logo from '../images/logo.png'
import './Header.css'
import { BrowserRouter as Router, Link } from 'react-router-dom'

export default function Header() {
    return(
        <div className="header">
            <div className="header-logo">
                <Router>
                <Link to="/" exact="true"><img src={Logo} alt="Sim Companies Logo" /></Link>
                </Router>
                <h1>Comunidad Española de Sim Companies</h1>
            </div>
            <div className="header-options">Menu de Opciones a completar</div>
        </div>
    )
}