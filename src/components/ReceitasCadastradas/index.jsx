import { useEffect, useState } from "react";
import { PiCookingPotFill } from "react-icons/pi";
import { RiInformationFill } from "react-icons/ri";

export const ReceitasCadastradas = () => {
  const receitasSalvas = JSON.parse(localStorage.getItem("recipes")) || [];

  /* const receitas = [
    {
      nome: "Strogonoff",
      ingredientes: "carne molho, especial, batata frita",
      modoPreparo: "Mistura tudo e está pronto"
    },
    {
      nome: "Carne de Panela",
    },
    {
      nome: "Carne de Panela",
    },
  ]; */

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        background: "gray",
        borderRadius: "8px",
        padding: "15px",
      }}
    >
      <div>
        <h2>Receitas Cadastradas</h2>
      </div>
      {receitasSalvas.map((nome, index) => (
        <div key={index} style={{ display: "flex", marginLeft: "20px " }}>
          <PiCookingPotFill />
          <h4
            style={{
              paddingLeft: "5px",
              paddingRight: "5px",
              margin: "0px",
              minWidth: "180px",
            }}
          >
            {nome.recipeName}
          </h4>
          <RiInformationFill
            onClick={() => {
              <AlterarReceitas />;
            }}
          />
        </div>
      ))}
    </div>
  );
};
