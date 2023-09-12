import React from 'react'
import Logo2 from "../img/logo.png"
import { StyledFooter } from './Styles'

export default function Rodape() {
  return (
  <>
  <StyledFooter>
    <img src={Logo2} alt="logo" width="50px"/>
    <p>Av. Paulista, 1106 - 4º andar</p>
    <p>Bela Vista, São Paulo - SP, 01311-000</p>
    <p>Sprint - Engenharia de Software</p>
    <p><b>FIAP </b></p>
  </StyledFooter>
  </>
  
  )
}