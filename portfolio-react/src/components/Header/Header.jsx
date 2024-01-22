import { useState } from 'react'
import { Link } from "react-router-dom"
import "./Header.css"

const Header = () => {
    
    const [active, setActive] = useState('nav-menu')

        const nav_bar = () => {
            active === 'nav-menu'
            ? setActive('nav-menu nav-active') 
            : setActive('nav-menu')
        }


  return (
    <>
        <header>
            <nav className='navbar'>
                <ul className= {active} id='nav-menu'>
                    <Link className="list-item" style={{ textDecoration: "none" }} to="/">
                        <li>Inicio</li>
                    </Link>
                    <Link className='list-item' style={{ textDecoration: "none" }} to="/sobre">
                        <li>Sobre</li>
                    </Link>
                    <Link className='list-item' style={{ textDecoration: "none"}} to="/projeto">
                        <li>Projeto</li>
                    </Link>
                    <Link className='list-item' style={{ textDecoration: "none"}} to="/contato">
                        <li>Contato</li>
                    </Link>
                </ul>
                <div onClick={nav_bar} className='nav_bar'>
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                </div>
            </nav>
        </header>
    </>
  )
}

export default Header