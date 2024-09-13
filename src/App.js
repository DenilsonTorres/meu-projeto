import "./App.css";
import Frase from "./components/Frase";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";

function App() {
  const nome = "Maria";
  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <Frase />
      <Frase />

      <SayMyName className="" nome="Denilson" />
      <SayMyName nome="João" />
      <SayMyName nome={nome} />

      <Pessoa
        nome="Denilson"
        idade="24"
        profissao="Programador"
        foto="https://via.placeholder.com/150"
      />
    </div>
  );
}

export default App;
