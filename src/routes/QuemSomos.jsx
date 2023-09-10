import React from 'react'
import img1 from '../img/fiap.png'
import { StyledMain } from '../components/Styles'

export default function QS() {
  return (
    <>
      <StyledMain>
          <section>
              <h1>Quem Somos</h1>

              <p>A <b>SmarTech</b> é uma start up focada na implementação da sustentabilidade no cotidiano do usuário. Utilizamos da tecnologia para implementação de grandes projetos na cidade de São Paulo.</p>
              <p>Além disso, a SmarTech foi criada por um grupo de alunos da turma de Engenharia de Software da Empresa FIAP.</p>

              <img src={img1} alt="Unidade FIAP" width="100%"/>

          </section>
      </StyledMain>

    </>
  )
}