import { StyledLogin } from "../components/Styles";
import { Link } from 'react-router-dom';


export default function cadastro(){
    return(

        <StyledLogin>
            <form className="form">
                <h2>Cadastro</h2>
            <input type="text" className="input" placeholder="E-mail"></input>
            <input type="text" className="input" placeholder="Nome completo"></input>
            <input type="text" className="input" placeholder="Usuário"></input>
            <input type="text" className="input" placeholder="Senha"></input> 
            <input type="text" className="input" placeholder="Confirme a senha"></input>

            <Link to="/Feedback">
                <button>Login</button>
            </Link>


            </form>
        </StyledLogin>

    )
}