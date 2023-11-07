import '../assets/styles/Feedback.css'
import { useState } from "react";
import { Link } from "react-router-dom";
 
export default function Avalia() {
  const [formData, setFormData] = useState({
    zona: "",
    transporte: "",
    linha: "",
    obs: "",
  });
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
 
  return (
<form  className="formulario"onSubmit={handleSubmit}>
<h4>Qual a região em que você reside?</h4>
<input type="text" className= "input" placeholder="Central, Sul, Norte, Oeste" name="zona" onChange={handleChange}/>
<h4>Qual o meio de transporte que você mais utiliza?</h4>
<input type="text" className="input" placeholder="Ônibus, Trem, Metrô, Bicicleta" name="transporte" onChange={handleChange}/>
<h4>Qual a linha que você mais utiliza?</h4>
<input type="text" className="input" placeholder="Linha" name="linha" onChange={handleChange}/>

<h5>Registre aqui suas sugestões, elogio e reclamações</h5>
<input type="text" className="input" placeholder="" name="obs" onChange={handleChange}/>
<Link to="/Principal">
<button  className="btn-enviar" type="submit">Enviar</button>
</Link>
<Link to="/Principal">
<button id="v">Voltar</button>
</Link>
</form>
  );
}