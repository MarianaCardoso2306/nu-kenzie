import "./style.css";

export const TotalValue = ({ listTransactions }) => {
  const total = listTransactions.reduce(
    (accumulator, currentValue) => accumulator + currentValue.value,
    0
  );

  return (
    <div className="total-money">
      <div className="div-text">
        <p>Valor total:</p>
        <span>o valor se refere ao saldo</span>
      </div>
      {total < 0 ? (
        <p>R$ - {Math.abs(total).toFixed(2)}</p>
      ) : (
        <p>R$ {Math.abs(total).toFixed(2)}</p>
      )}
    </div>
  );
};
