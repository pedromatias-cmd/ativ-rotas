import './style.css' 
import logo from '../../assets/logo.png' 
import { NavLink } from 'react-router-dom'

export default function Header() { 
    return( 
        <header className = 'Header'> 
        <link to ="/"> 
        <img src= {logo} alt='logo de contablidade'/> 
        <span>Contabilidade Simples</span>
         

        <nav className='nav'> 
            <NavLink to="/sobre-nos">Sobre nós</NavLink> 
            <NavLink to="/Fale-conosco">Fale Conosco</NavLink>
        </nav> 
        </link>
        </header>
                  
    )
}