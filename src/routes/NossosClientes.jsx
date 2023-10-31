import { StyledNC } from '../assets/Styles/Styles'
import img3 from '../assets/img/ibm.png'

export default function NC() {
  return (
    <>
        <StyledNC>
        <h1>Parcerias </h1>
        <section>
          <div id="ibm"><img src={img3} alt="IBM"/></div>
            
            <div id="content">
              <p>IBM Brasil - International Business Machines</p>
              <p>Projeto de Mapeamento em São Paulo</p>  
            </div>
        </section>
        </StyledNC>
    </>
  )
}