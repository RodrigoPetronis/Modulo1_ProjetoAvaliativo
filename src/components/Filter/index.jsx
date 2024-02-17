import { useState } from "react";

export const Filter = ({ onFilterChange }) => {
  const [isCheckedTodas, setIsCheckedTodas] = useState(true);
  const [isGlutenFree, setIsGlutenFree] = useState(true);
  const [isLactoseFree, setIsLactoseFree] = useState(true);

  const handleFilterChange = () => {
    onFilterChange({
      isCheckedTodas,
      isGlutenFree,
      isLactoseFree,
    });
  };

  return (
    <div style={{ textAlign: "end", marginRight: "20px" }}>
      <h3>Filtrar</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "5px",
          justifyContent: "center",
          alignItems: "end",
        }}
      >
        <div>
          <label style={{ marginRight: "5px" }} htmlFor="">
            Todas
          </label>
          <input
            type="checkbox"
            defaultChecked={isCheckedTodas}
            onChange={(e) => setIsCheckedTodas(e.target.checked)}
            style={{ width: "20px", height: "25px", verticalAlign: "middle" }}
          />
        </div>
        <div>
          <label style={{ marginRight: "5px" }} htmlFor="">
            Sem Glúten
          </label>
          <input
            type="checkbox"
            defaultChecked={isGlutenFree}
            onChange={(e) => setIsGlutenFree(e.target.checked)}
            style={{ width: "20px", height: "25px", verticalAlign: "middle" }}
          />
        </div>
        <div>
          <label style={{ marginRight: "5px" }} htmlFor="">
            Sem derivados de leite
          </label>
          <input
            type="checkbox"
            defaultChecked={isLactoseFree}
            onChange={(e) => setIsLactoseFree(e.target.checked)}
            style={{ width: "20px", height: "25px", verticalAlign: "middle" }}
          />
        </div>
      </div>
      <button
        onClick={handleFilterChange}
        style={{ maxWidth: "100px", marginTop: "15px" }}
      >
        Filtrar
      </button>
    </div>
  );
};
