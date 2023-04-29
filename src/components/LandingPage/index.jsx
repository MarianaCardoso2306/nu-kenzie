import "./style.css";

export const LandingPage = ({ setPage, nuKenzieBlack, illustration }) => {
  return (
    <section className="background">
      <section className="section-container">
        <section>
          <img src={nuKenzieBlack} alt="logo-nu-kenzie" className="logo" />
          <h2>Centralize o controle de suas finanças</h2>
          <span>de forma rápida e segura</span>
          <button type="button" onClick={() => setPage("Dashboard")}>
            Iniciar
          </button>
        </section>
        <img src={illustration} alt="" />
      </section>
    </section>
  );
};
