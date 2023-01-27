import "./style.css";
import { useState } from "react";
import { v4 as uuid } from "uuid";

export const Form = ({ setListTransactions, listTransactions }) => {
  const [description, setDescription] = useState("");
  let [type, setType] = useState("");
  let [value, setValue] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();

    {
      type == "saída" ? (value = value * -1) : (value = Number(value));
    }

    const newListItem = {
      id: uuid(),
      description,
      type,
      value,
    };
    setListTransactions((listTransactions) => [
      ...listTransactions,
      newListItem,
    ]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="description">Descrição</label>
      <input
        type="text"
        name="description"
        id="description"
        placeholder="Digite aqui sua descrição"
        onChange={(event) => setDescription(event.target.value)}
        required
      />
      <span>Ex: Compra de roupas</span>
      <div className="price-value">
        <div className="div-price">
          <label htmlFor="price">Valor</label>

          <input
            type="number"
            id="price"
            name="price"
            onChange={(event) => setValue(event.target.value)}
            required
          />
        </div>
        <div className="div-type-value">
          <label htmlFor="type-value">Tipo de valor</label>
          <select
            name="type-value"
            id="type-value"
            onChange={(event) => setType(event.target.value)}
          >
            <option></option>
            <option value="entrada">Entrada</option>
            <option value="saída">Saída</option>
          </select>
        </div>
      </div>
      <button type="submit">Inserir valor</button>
    </form>
  );
};
