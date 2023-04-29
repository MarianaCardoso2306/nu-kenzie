import { Card } from "../Card";
import "./style.css";

export const List = ({ listTransactions, setListTransactions }) => {
  const removeItem = (event) => {
    const i = listTransactions.findIndex((x) => x.id === event.target.id);

    const itensCopy = Array.from(listTransactions);
    itensCopy.splice(i, 1);

    return setListTransactions(itensCopy);
  };

  return listTransactions.map((transaction, index) => (
    <Card
      transaction={transaction}
      key={index}
      id={transaction.id}
      description={transaction.description}
      value={transaction.value}
      type={transaction.type}
      onDelete={(event) => removeItem(event)}
    />
  ));
};
