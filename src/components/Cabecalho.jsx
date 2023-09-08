import React from 'react'
import './Menu.css'
import Logo from "../img/logotipo.png"

export default function Cabecalho() {
  return (
    <div className="container">
        <header>
            <nav>
                <div className="nav-container">
                    <a id="logo" href="index.html"><img src={Logo} alt="SmarTech" width="240px"/></a>
                    
                        <ul>
                            <li><a href="/quemSomos">Quem Somos</a></li>
                            <li><a href="/sustentabilidade">Sustentabilidade</a></li>
                            <li><a href="/tecnologia">Tecnologia</a></li>
                            <li><a href="/problema">Problema</a></li>
                            <li><a href="/solucoes">Soluções</a></li>
                            <li><a href="/clientes">Nossos Clientes</a></li>
                            <li><a href="/">Login</a></li>
                        </ul>
                </div>
            </nav>
        </header>
    </div>
  )
}
