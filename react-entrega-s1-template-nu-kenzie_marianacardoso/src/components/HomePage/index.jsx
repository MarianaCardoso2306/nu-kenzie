import { Form } from "../Form";
import { List } from "../List";
import "./style.css";
import { useState } from "react";
import { TotalValue } from "../TotalValue";

export const HomePage = ({
  nuKenzieWhite,
  setPage,
  rectangle,
  listTransactions,
  setListTransactions,
}) => {
  return (
    <>
      <header>
        <img src={nuKenzieWhite} alt="logo-nu-kenzie" className="logo" />
        <button type="button" onClick={() => setPage("LandingPage")}>
          Início
        </button>
      </header>
      <main>
        <section className="form">
          <Form
            setListTransactions={setListTransactions}
            listTransactions={listTransactions}
          />
          {listTransactions.length > 0 ? (
            <TotalValue listTransactions={listTransactions} />
          ) : (
            <></>
          )}
        </section>
        <section className="list">
          <h3>Resumo financeiro</h3>
          {listTransactions.length === 0 ? (
            <>
              <p>Você ainda não possui nenhum lançamento</p>
              <img className="rectangle" src={rectangle} alt="" />
              <img className="rectangle" src={rectangle} alt="" />
              <img className="rectangle" src={rectangle} alt="" />
            </>
          ) : (
            <List
              listTransactions={listTransactions}
              setListTransactions={setListTransactions}
            />
          )}
        </section>
      </main>
    </>
  );
};
