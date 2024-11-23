import "./styles.css";

export const Header = () => {
  return (
    <div className="header__container">
      <img
        src="/logo__unisom_01.png"
        alt="Unisom Aparelhos Auditivos"
        className="logo__img"
      />
      <div className="header__text">
        <h1>Avaliação Audiométrica</h1>
        <p>Serviço Especializado em Audiologia Clínica</p>
      </div>
    </div>
  );
};
