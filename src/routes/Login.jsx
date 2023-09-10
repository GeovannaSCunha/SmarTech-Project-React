import React from 'react'
import { StyledMain } from '../components/Styles'

export default function formsone() {
  return (
    <StyledMain>
      <form>
        <label for="c-user">Nome de Usuário</label>
        <input type="text" name="user" id="c-user"></input>
        <label for="c-senha">Senha</label>
        <input type="password" name="senha" id="c-senha"></input>

        <button type='submit'>Login</button>
      </form>
    </StyledMain>

  )
}