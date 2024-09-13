import './App.css';
import HelloWorld from './components/HelloWorld';


function App() {
  const name = "Denilson";
  const newName = name.toUpperCase();

  function sum(a, b) {
    return a + b;
  }

  const url = "https://via.placeholder.com/150";

  return (
    <div className="App">
      <h1> Alterando JSX</h1>
      <p>Olá, {newName}</p>
      <p>Soma: {sum(5, 3)}</p>
      <img src={url} alt="Minha Imagem" />
      <HelloWorld/>
    </div>
  );
}

export default App;
