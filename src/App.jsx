import Cabecalho from './components/Cabecalho'
import Home from './components/Home'
import Rodape from './components/Rodape'
import { Outlet } from "react-router-dom";

function App() {

  return (
    <>
    <Cabecalho/>
    <Home/>
    <Rodape/>

    <Outlet/>
    </>
  )
}

export default App
