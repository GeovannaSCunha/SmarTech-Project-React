import '../assets/styles/Cadastro.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Cadastra() {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('As senhas não correspondem.');
      return;
    }

    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, fullName, username, password }),
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.id) {
        alert('Usuário registrado com sucesso!');
        navigate('/Login');
      } else {
        alert('Erro ao registrar usuário.');
      }
    })
    .catch((error) => console.error('Error:', error));
  };

  return (
    <form className="form"onSubmit={handleSubmit}>
      <legend>Cadastro</legend>
      <label>
        E-mail:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <label>
        Nome completo:
        <input className="input"type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
      </label>
      <label>
        Nome de usuário:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
      </label>
      <label>
        Senha:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </label>
      <label>
        Confirmar senha:
        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
      </label>
      <button type="submit">Registrar</button>
    </form>
  );
}