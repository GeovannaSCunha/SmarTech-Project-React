import React from 'react'
import './RodapeSt.css'
import Logo2 from "../img/logo.png"

export default function Rodape() {
  return (
    <>
        <footer>
            <img src={Logo2} alt="" width="50px"/>
            <p>Av. Paulista, 1106 - 4º andar</p>
            <p>Bela Vista, São Paulo - SP, 01311-000</p>
            <p>Sprint 3 - Engenharia de Software</p>
            <p><b>FIAP</b></p>
        </footer>
    </>
  )
}