import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Erro404 from './routes/Error404.jsx'


// 1- Configurando o Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import NC from './routes/NossosClientes.jsx';
import Problema from './routes/Problema.jsx';
import QS from './routes/QuemSomos.jsx';
import Solucoes from './routes/Solucoes.jsx';
import Sus from './routes/Sustentabilidade.jsx';
import Tech from './routes/Tecnologia.jsx';
import Home from './components/Home.jsx';
import Login from './routes/Login.jsx';

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
    {path: "/login", element: <Login/>}
  ]},
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
