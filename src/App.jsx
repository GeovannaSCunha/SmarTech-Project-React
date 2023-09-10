
import Cabecalho from './components/Cabecalho'
import Login from './routes/Login'
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
