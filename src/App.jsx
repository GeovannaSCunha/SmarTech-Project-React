
import Cabecalho from './components/Cabecalho'
import Rodape from './components/Rodape'

//2 - reaproveitamento de estrutura
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
