import React from 'react'
import img4 from '../img/demanda.png'

export default function problem() {
  return (
    <>
        <main>
                <h1>Qual o problema em</h1>
                <h1>questão?</h1>

                <section>
                    <p>São Paulo se caracteriza como uma cidade com alta demanda de transportes públicos, sendo estes os responsáveis por 75% da poluição sonora e liberação de gases tóxicos à atmosfera.
                        Como podemos diminuir a poluição causada pelos meios de transporte? Tendo em mente a alta procura e o baixo investimento em tecnologia e pesquisa para adaptação do produto.</p>

                        <p>Nada melhor do que ouvir o usuário do produto, não é mesmo?</p>
                    <img src={img4} alt="transporte publico com alta demanda" width="100%"/>
                </section>
        </main>
    </>
  )
}