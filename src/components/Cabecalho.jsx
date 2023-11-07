import Logo from "../assets/img/logotipo.png";
import { Link, useLocation } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../assets/Styles/cabecalho.scss';

export default function Cabecalho() {
  const rotaAtual = useLocation();

  return (
    <Navbar collapseOnSelect expand="lg">
      <div className="container-navbar">
        <Link className="navbar-brand" to="/">
          <img className='logo' src={Logo} alt="Logo" />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Link to="/sobre-nos" className={`nav-link ${rotaAtual.pathname === "/sobre-nos" ? "active" : "nav-link-pagee"}`}>Quem Somos</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/sustentabilidade" className={`nav-link ${rotaAtual.pathname === "/sustentabilidade" ? "active" : "nav-link-pagee"}`}>Sustentabilidade</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/tecnologia" className={`nav-link ${rotaAtual.pathname === "/tecnologia" ? "active" : "nav-link-pagee"}`}>Tecnologia</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/problema" className={`nav-link ${rotaAtual.pathname === "/problema" ? "active" : "nav-link-pagee"}`}>Problema</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/solucoes" className={`nav-link ${rotaAtual.pathname === "/solucoes" ? "active" : "nav-link-pagee"}`}>Soluções</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/clientes" className={`nav-link ${rotaAtual.pathname === "/clientes" ? "active" : "nav-link-pagee"}`}>Nossos Clientes</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/login" className={`nav-link ${rotaAtual.pathname === "/login" ? "active" : "nav-link-pagee"}`}>Login</Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}