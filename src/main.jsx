import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


//BLOCO DE ROTAS
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import NC from './routes/NossosClientes.jsx';
import Problema from './routes/Problema.jsx';
import QS from './routes/QuemSomos.jsx';
import Error404 from './routes/Error404.jsx';
import Solucoes from './routes/Solucoes.jsx';
import Sus from './routes/Sustentabilidade.jsx';
import Tech from './routes/Tecnologia.jsx';

const router = createBrowserRouter([ 
  {path: "/", element: <App/> , errorElement: <Error404/>, 
    children:[
      {path: "/clientes", element: <NC/>},
      {path: "/produtos", element: <Problema/>},
      {path: "/sobre-nos", element: <QS/>},
      {path: "/solucoes", element: <Solucoes/>},
      {path: "/sustentabilidade", element: <Sus/>},
      {path: "/tecnologia", element: <Tech/>},
    ]
  }
]);

//BLOCO DE ROTAS

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
