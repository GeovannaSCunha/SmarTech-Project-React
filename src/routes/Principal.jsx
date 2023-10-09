import { Link } from "react-router-dom"
import '../styles/Principal.css'

export default function menu(){
    return(
        <>
        <Link to="#">
            <button id="pesquisa">Consulte as rotas disponíveis</button>
        </Link>

        <Link to="/Feedback">
            <button id="feed">Quero dar meu Feedback!</button>
        </Link>
        </>
    )
}