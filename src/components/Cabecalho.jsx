import React from 'react'
import Logo from "../assets/img/logotipo.png"
import { Link } from "react-router-dom";
import '../assets/styles/cabecalho.css'

export default function Cabecalho() {
  return (
    <>
        <nav  class="navbar navbar-expand-lg bg-body-light">
        <div class="container-fluid">
            <Link class="navbar-brand" href="/"><img className='logo' src={Logo} alt="Logo" /></Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <Link to="/sobre-nos" class="nav-link" aria-current="page">Quem Somos</Link>
                <Link to="/sustentabilidade" class="nav-link">Sustentabilidade</Link>
                <Link to="/tecnologia" class="nav-link">Tecnologia</Link>
                <Link to="/problema" class="nav-link">Problema</Link>
                <Link to="/solucoes" class="nav-link">Soluções</Link>
                <Link to="/clientes" class="nav-link">Nossos Clientes</Link>
                <Link to="/login" class="nav-link">Login</Link>
            </div>
            </div>
        </div>
        </nav>
    </>
  )
}
