
import Cabecalho from './components/Cabecalho'
import Login from './routes/Login'
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
