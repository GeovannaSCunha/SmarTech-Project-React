import React from 'react'
import './Menu.css'
import Logo from "../img/logotipo.png"
import { Link } from "react-router-dom";

export default function Cabecalho() {
  return (
    <div className="container">
        <header>
            <nav>
                <div className="nav-container">
                    <a id="logo" href="index.html"><img src={Logo} alt="SmarTech" width="240px"/></a>
                    
                        <ul>
                            <li><Link to="/sobre-nos">Quem Somos</Link> </li>
                            <li><Link to="/sustentabilidade">Sustentabilidade</Link> </li>
                            <li><Link to="/tecnologia">Tecnologia</Link> </li>
                            <li><Link to="/problema">Problema</Link> </li>
                            <li><Link to="/solucoes">Soluções</Link> </li>
                            <li><Link to="/clientes">Nossos Clientes</Link> </li>
                            <li><Link to="/">Login</Link> </li>
                        </ul>
                </div>
            </nav>
        </header>
    </div>
  )
}
