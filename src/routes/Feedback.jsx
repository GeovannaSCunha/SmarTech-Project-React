import { StyledFeed } from "../components/Styles";
import { useState } from "react";

export default function Avalia() {
  //Rastreio os valores do formulário
  const [formData, setFormData] = useState({
    zona: "",
    transporte: [],
    linha: "",
    obs: "",
  });

  //Função para lidar com a alteração dos campos do formulário
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      if (checked) {
        setFormData({
          ...formData,
          transporte: [...formData.transporte, value],
        });
      } else {
        setFormData({
          ...formData,
          transporte: formData.transporte.filter((item) => item !== value),
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    // Faça algo com os dados do formulário, por exemplo, envie-os para um servidor
    console.log(formData);
  };

  return (
    <StyledFeed>
      <form onSubmit={handleSubmit}>
        <label htmlFor="c-zona">De onde você é?</label>
        <input
          type="radio"
          required
          name="zona"
          id="c-centro"
          value="Centro"
          onChange={handleChange}
        />
        <label htmlFor="c-centro">Centro</label>
        <input
          type="radio"
          required
          name="zona"
          id="c-sul"
          value="Sul"
          onChange={handleChange}
        />
        <label htmlFor="c-sul">Zona Sul</label>
        <input
          type="radio"
          required
          name="zona"
          id="c-norte"
          value="Norte"
          onChange={handleChange}
        />
        <label htmlFor="c-norte">Zona Norte</label>
        <input
          type="radio"
          required
          name="zona"
          id="c-oeste"
          value="Oeste"
          onChange={handleChange}
        />
        <label htmlFor="c-oeste">Zona Oeste</label>
        <input
          type="radio"
          required
          name="zona"
          id="c-leste"
          value="Leste"
          onChange={handleChange}
        />
        <label htmlFor="c-leste">Zona Leste</label>
        <label htmlFor="c-transporte">Quais os transportes utilizados?</label>
        <input
          type="checkbox"
          name="transporte"
          id="c-trem"
          value="Trem"
          onChange={handleChange}
        />
        <label htmlFor="c-trem">Trem</label>
        <input
          type="checkbox"
          name="transporte"
          id="c-metro"
          value="Metrô"
          onChange={handleChange}
        />
        <label htmlFor="c-metro">Metrô</label>
        <input
          type="checkbox"
          name="transporte"
          id="c-onibus"
          value="Ônibus"
          onChange={handleChange}
        />
        <label htmlFor="c-onibus">Ônibus</label>
        <input
          type="checkbox"
          name="transporte"
          id="c-bicicleta"
          value="Bicicleta"
          onChange={handleChange}
        />
        <label htmlFor="c-bicicleta">Bicicleta Compartilhada</label>
        <label htmlFor="c-linha">Qual linha você mais utiliza?</label>
        <input
          type="text"
          required
          name="linha"
          id="c-linha"
          value={formData.linha}
          onChange={handleChange}
        />
        <label htmlFor="c-feedback">
          Digite sua opinião ou experiência ao utilizar nosso aplicativo.
        </label>
        <textarea
          name="obs"
          required
          id="c-obs"
          cols="60"
          rows="10"
          value={formData.obs}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Enviar</button>
      </form>
    </StyledFeed>
  );
}
