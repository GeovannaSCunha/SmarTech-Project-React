import React from 'react'
import './Menu.css'

export default function Cabecalho() {
  return (
    <div class="container">
        <header>
            <nav>
                <div class="nav-container">
                    <a id="logo" href="index.html"><img src="../assets/img/logotipo.png" alt="SmarTech" width="240px"/></a>
                    
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