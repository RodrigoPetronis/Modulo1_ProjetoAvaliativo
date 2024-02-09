import { PiCookingPotFill } from "react-icons/pi";
import { RiInformationFill } from "react-icons/ri";

export const ReceitasCadastradas = () => {
  const receitas = [
    {
      nome: "Strogonoff",
    },
    {
      nome: "Carne de Panela",
    },
    {
      nome: "Carne de Panela",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        background: "gray" ,
        borderRadius: "8px",
      }}
    >
      <div>
        <h2>Receitas Cadastradas</h2>
      </div>
      {receitas.map((e, index) => (
        <div style={{ display: "flex", marginLeft: "20px " }}>
          <PiCookingPotFill />
          <h4
            style={{ paddingLeft: "15px", paddingRight: "15px", margin: "0px" }}
          >
            {e.nome}
          </h4>
          <RiInformationFill />
        </div>
      ))}
    </div>
  );
};
