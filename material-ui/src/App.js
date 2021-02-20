import "./styles.css";
import PrimaryAppBar from "./PrimaryAppBar.js";
import ImgMediaCard from "./CreateCard.js";
import pokemons from "./data.js";

export default function App() {
  return (
    <div className="App">
      <PrimaryAppBar />
      <h1>Pokémon</h1>
      <section className="animal-cards">
        {pokemons.map(function (pokemon) {
          const { id, name, content, image } = pokemon;
          return (
            <ImgMediaCard
              id={id}
              name={name}
              content={content}
              image={image}
              site={"https://www.pokemon.com/br/pokedex/" + name}
            />
          );
        })}
      </section>
    </div>
  );
}
