import {StyledLogin} from '../components/Styles';
import { Link } from 'react-router-dom';

export default function formsone() {
  return (
    <StyledLogin>
      <form className="form">
     <h1>Acesse a plataforma</h1>
      
      <input type="text" className="input" placeholder="Usuário"></input>
      <input type="text" className="input" placeholder="Senha"></input> 
      
      <Link to="/Feedback">
        <button>Login</button>
      </Link>

      <Link to="/cadastro">

      <button>Não tem login? Cadastre-se!</button>

      </Link>

      
      </form>
    </StyledLogin>


  )
}
