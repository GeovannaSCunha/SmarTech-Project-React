import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GlobalStyle from './assets/styles/EstiloGlobal.js'
import Erro404 from './routes/Error404.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'


// 1- Configurando o Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import NC from './routes/NossosClientes.jsx';
import Problema from './routes/Problema.jsx';
import QS from './routes/QuemSomos.jsx';
import Solucoes from './routes/Solucoes.jsx';
import Sus from './routes/Sustentabilidade.jsx';
import Tech from './routes/Tecnologia.jsx';
import Home from './components/Home.jsx';
import FormsOne from './routes/Login.jsx';
import Avalia from './routes/Feedback.jsx';
import Cadastra from './routes/Cadastro.jsx'
import Menu from './routes/Principal.jsx'


const router = createBrowserRouter([
  {path: "/", element: <App />, errorElement: <Erro404/>,
  children: [
    {path: "/", element: <Home/>},
    {path: "/clientes", element: <NC/>},
    {path: "/problema", element: <Problema/>},
    {path: "/sobre-nos", element: <QS/>},
    {path: "/solucoes", element: <Solucoes/>},
    {path: "/sustentabilidade", element: <Sus/>},
    {path: "/tecnologia", element: <Tech/>},
    {path: "/login", element: <FormsOne/>},
    {path: "/feedback", element: <Avalia/>},
    {path: "/Cadastro", element: <Cadastra/>},
    {path: "/Principal", element: <Menu/>}




  ]},
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
