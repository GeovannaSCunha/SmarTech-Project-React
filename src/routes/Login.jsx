import { StyledLogin } from '../components/Styles';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function FormsOne() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const usuarioPadrao = JSON.parse(localStorage.getItem('usuarioPadrao'));

    if (usuario === usuarioPadrao.usuario && senha === usuarioPadrao.senha) {
      navigate('/Feedback');
    } else {
      alert('Credenciais incorretas');
    }
  };

  return (
    <StyledLogin>
      <form className="form">
        <h1>Acesse a plataforma</h1>
        <input
          type="text"
          className="input"
          placeholder="Usuário"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <input
          type="password"
          className="input"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button type="submit" onClick={handleLogin}>
          Login
        </button>
        <Link to="/cadastro">
          <button>Não tem login? Cadastre-se!</button>
        </Link>
      </form>
    </StyledLogin>
  );
}
