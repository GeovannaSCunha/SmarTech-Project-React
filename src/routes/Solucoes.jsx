import React from 'react'
import img5 from '../assets/img/trajeto_onibus.png'
import { StyledMain } from '../components/Styles'

export default function solucoes() {
  return (
    <>
    <StyledMain>
      <section>
        <h1>Como melhorar a qualidade dos tranportes públicos</h1>

        <p>Para melhorar a experiência do usuário, nossa plataforma irá disponibilizar as linhas de trem, metrô e ônibus na cidade de São Paulo. O usuário terá livre acesso a estas informações e poderá publicar em tempo real, sua opinião sobre o meio que está utilizando, seja sugestões de melhoria, reclamações e elogios.</p>

        <p>Esta proposta foi planejada com o intuito de acolher a população e suas necessidades, de forma que as grandes empresas com investimento em sustentabilidade e qualidade de vida, sejam capazes de implementar novos projetos e melhorias naqueles já existentes.</p>

        <img src={img5} alt="mapa" width="100%"/>
      </section>
    </StyledMain>
    </>
  )
}