import React from 'react'
import Logo from "../img/logotipo.png"
import { Link } from "react-router-dom";
import { StyledCabecalho } from '../components/Styles'

export default function Cabecalho() {
  return (
    <StyledCabecalho>
        <header>
            <nav>
                <div className="nav-container">
                    <Link id="logo" to="/"><img src={Logo} alt="SmarTech" width="20%"/></Link>
                        <ul>
                            <li><Link to="/sobre-nos">Quem Somos</Link> </li>
                            <li><Link to="/sustentabilidade">Sustentabilidade</Link> </li>
                            <li><Link to="/tecnologia">Tecnologia</Link> </li>
                            <li><Link to="/problema">Problema</Link> </li>
                            <li><Link to="/solucoes">Soluções</Link> </li>
                            <li><Link to="/clientes">Nossos Clientes</Link> </li>
                            <li><Link to="/login">Login</Link> </li>
                        </ul>
                </div>
            </nav>
        </header>
    </StyledCabecalho>
  )
}
