import Logo2 from "../assets/img/logo.png"
import '../assets/Styles/rodape.css'

export default function Rodape() {
  return (
  <>
  <footer>
    <img src={Logo2} alt="logo" width="50px"/>
    <div className="textos">
      <p>Av. Paulista, 1106 - 4º andar</p>
      <p>Bela Vista, São Paulo - SP, 01311-000</p>
      <p>Sprint - Engenharia de Software</p>
      <p id="negrito">FIAP</p>
    </div>
  </footer>
  </>
  
  )
}