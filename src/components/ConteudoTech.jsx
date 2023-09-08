import React from 'react'
import img7 from '../img/techsustentavel.png'

export default function solucoes() {
  return (
    <>
    <main>
        <h1>Tecnologia & Sustentabilidade</h1>

        <section>
            <p>A tecnologia possui um papel importante na sustentabilidade. 
                Podemos usufruir deste recurso para monitoramento do consumo de determinados recursos e pesquisar formas de preservação através da necessidade do usuário.</p>
                <p>Alguns exemplos da tecnologia no mundo sustentável são: placas solares, lâmpadas sensoriais.</p>
            <img src={img7} alt="Tecnologia sustentável" width="80%"/>
        </section>
    </main>
    </>
  )
}