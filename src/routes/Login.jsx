import React from 'react'
import {StyledLogin} from '../components/Styles'

export default function formsone() {
  return (
    <StyledLogin>
    <form class="form">
    Acesse a plataforma
    <input type="text" class="input" placeholder="Usuário"></input>
    <input type="text" class="input" placeholder="Senha"></input> 
    <button>Login</button>
    </form>
    </StyledLogin>

  )
}
