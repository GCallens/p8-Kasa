import React from "react";
import Logo from '../../assets/logo.png'
import {Link, useLocation} from 'react-router-dom'
import './header.scss'


function Header() {

    const currentRoute = useLocation().pathname

    return (
        <header className="header">
            <div className="logo">
                <img src={Logo} alt="Kasa, location d'hébergements"/>
            </div>

            <nav className='nav'>
                <ul className='nav_list'>
                    <li className={currentRoute === '/' ? 'nav_list_item_active' : 'nav_list_item'}>
                        <Link  to='/'>
                            Accueil
                        </Link>
                    </li>
                    <li className={currentRoute === '/about' ? 'nav_list_item_active' : 'nav_list_item'}>
                        <Link  to='/about'>
                            A propos
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

 export default Header
