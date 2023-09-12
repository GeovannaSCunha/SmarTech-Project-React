import {StyledLogin} from '../components/Styles';
import { Link } from 'react-router-dom';

export default function formsone() {
  return (
    <StyledLogin>
      <form class="form">
      Acesse a plataforma
      
      <input type="text" class="input" placeholder="Usuário"></input>
      <input type="text" class="input" placeholder="Senha"></input> 
      
      <Link to="/Feedback">
        <button>Login</button>
      </Link>

      
      </form>
    </StyledLogin>


  )
}
