
import "./App.css";
import CadastroReceitas from "./components/CadastroReceitas/index";
import { Filter } from "./components/Filter";
import { ReceitasCadastradas } from "./components/ReceitasCadastradas";

function App() {
  return (
    <div>
      <img
        src="src/assets/foodTable.jpg"
        alt=""
        style={{
          opacity: "0.1",
          position: "absolute",
          left: "0px",
          top: "0px",
          zIndex: "-1",
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "100vw",
          height: "100vh",
        }}
      />
      <h1>Livro de Receitas Online</h1>
      <div style={{display: "flex",width:"70vw", justifyContent: "space-evenly" }}>
        <Filter />
        <div style={{ display: "flex",}} >
        <ReceitasCadastradas />
        <CadastroReceitas />
        </div>
      </div>
    </div>
  );
}

export default App;
