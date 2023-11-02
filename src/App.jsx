
import Cabecalho from './components/Cabecalho'
import Rodape from './components/Rodape'
import { Outlet } from 'react-router-dom'


function App() {

  return (
    <>
    <Cabecalho/>
    <Outlet/>
    <Rodape/>

    </>
  )
}

export default App
