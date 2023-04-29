import { BsFillTrashFill } from "react-icons/bs";
import cardEntrada from "../../assets/cardEntrada.svg";
import cardSaida from "../../assets/cardSaida.svg";
import "./style.css";

export const Card = ({ description, type, value, id, onDelete }) => {
  return (
    <div className="card-list">
      {value > 0 ? (
        <img src={cardEntrada} alt="" />
      ) : (
        <img src={cardSaida} alt="" />
      )}
      <div className="card-infos">
        <div className="desc-type">
          <p>{description}</p>
          <span>{type}</span>
        </div>
        <div className="value-text">
          <p>R$ {Math.abs(value).toFixed(2)}</p>
          <BsFillTrashFill className="trash" id={id} onClick={onDelete} />
        </div>
      </div>
    </div>
  );
};
