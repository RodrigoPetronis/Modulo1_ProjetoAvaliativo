import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CadastroReceitas from "./components/CadastroReceitas/CadastroReceitas";
import { Filter } from "./components/Filter/Filter";

function App() {
  return (
    <div>
      <h1>Livro de Receitas Online</h1>
      <Filter/>
    </div>
  );
}

export default App;
