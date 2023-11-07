import logo from './logo.svg';
import './App.css';
const {pokedex} = require("./Pokedex");
const {pokeCard} = require("./Pokecard");

function App() {
  const pokeCards = pokedex.map((poke) => pokeCard(poke));
  return (
    <div className="App">
      <header className="App-header">
        <h1> Pokedex </h1>
        <div>{pokeCards}</div>
      </header>
    </div>
  );
}

export default App;
