import '../assets/styles/Cadastro.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Cadastro() {
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'nome':
        setNome(value);
        break;
      case 'usuario':
        setUsuario(value);
        break;
      case 'senha':
        setSenha(value);
        break;
      case 'confirmSenha':
        setConfirmSenha(value);
        break;
      default:
        break;
    }
  };

  const handleCadastro = () => {
    const usuarioPadrao = {
      
      usuario,
      senha,
    };

    localStorage.setItem('usuarioPadrao', JSON.stringify(usuarioPadrao));
  };

  return (
    <>
      <form className="form">
        <h2>Cadastro</h2>
        <input
          type="text"
          className="input"
          placeholder="E-mail"
          name="email"
          value={email}
          onChange={handleInputChange}
        ></input>
        <input
          type="text"
          className="input"
          placeholder="Nome completo"
          name="nome"
          value={nome}
          onChange={handleInputChange}
        ></input>
        <input
          type="text"
          className="usuario"
          placeholder="Usuário"
          name="usuario"
          value={usuario}
          onChange={handleInputChange}
        ></input>
        <input
          type="password"
          className="senha"
          placeholder="Senha"
          name="senha"
          value={senha}
          onChange={handleInputChange}
        ></input>
        <input
          type="password"
          className="input"
          placeholder="Confirme a senha"
          name="confirmSenha"
          value={confirmSenha}
          onChange={handleInputChange}
        ></input>

        <Link to="/Login">
          <button onClick={handleCadastro}>Cadastrar</button>
        </Link>
        <Link to="/Login">
          <button>Voltar</button>
        </Link>
      </form>
    </>
  );
}
