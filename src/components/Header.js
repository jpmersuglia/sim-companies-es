import React from 'react'

import Logo from '../images/logo.png'

export default function Header() {
    return(
        <div className="header">
            <div className="header-logo">
                <img src={Logo} alt="Sim Companies Logo" />
            </div>
            <div className="header-options">To Do</div>
        </div>
    )
}