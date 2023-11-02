import { Link } from "react-router-dom"
import '../assets/styles/Principal.css'
import imgrota from '../assets/img/rota.png'


export default function menu(){
    return(
        <>
        <Link to="/Feedback">
            <button id="feed">Quero dar meu Feedback!</button>
        </Link>
        <h1 className="titulo">Consulte as rotas disponíveis</h1>
        
        <img className="imgdarota"src={imgrota} alt="rotas de onibus" width="40%"/>
        </>
    )
}