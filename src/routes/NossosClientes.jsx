import img3 from '../assets/img/ibm.png'
import { StyledNC } from '../components/Styles'
export default function NC() {
  return (
    <>
        <StyledNC>
        <h1>Parcerias </h1>
        <section>
          <div id="ibm"><img src={img3} alt="IBM" width="100%"/></div>
            
            <div id="content">
              <p>IBM Brasil - International Business Machines</p>
              <p>Projeto de Mapeamento em São paulo</p>  
            </div>
        </section>
        </StyledNC>
    </>
  )
}