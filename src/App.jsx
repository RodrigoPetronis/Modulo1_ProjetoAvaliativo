import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CadastroReceitas from "./components/CadastroReceitas/CadastroReceitas";
import { Filter } from "./components/Filter";
import { ReceitasCadastradas } from "./components/ReceitasCadastradas";

function App() {
  return (
    <div>
      <h1>Livro de Receitas Online</h1>
      <div style={{display:"flex",justifyContent:"space-between"}}>
        <Filter />
        <ReceitasCadastradas />
      </div>
    </div>
  );
}

export default App;
