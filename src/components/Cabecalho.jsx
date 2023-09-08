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
                            <li><a href="quemsomos.html">Quem Somos</a></li>
                            <li><a href="sustentabilidade.html">Sustentabilidade</a></li>
                            <li><a href="tecnologia.html">Tecnologia</a></li>
                            <li><a href="problema.html">Problema</a></li>
                            <li><a href="solucoes.html">Soluções</a></li>
                            <li><a href="nossosclientes.html">Nossos Clientes</a></li>
                            <li><a href="login.html">Login</a></li>
                        </ul>
                </div>
            </nav>
        </header>
    </div>
  )
}