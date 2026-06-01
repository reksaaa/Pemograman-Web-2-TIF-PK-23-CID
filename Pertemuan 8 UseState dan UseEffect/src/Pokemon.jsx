import { useEffect, useState } from "react";
import "./Pokemon.css";

export default function Pokemon() {
  const [pokemon, setPokemon] = useState("");

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  }, []);
  return (
    <div className="pokemon-container">
      <h1 className="pokemon-title">Pokédex</h1>
      <p className="pokemon-subtitle">Explore 100 classic Pokémon</p>

      <ul className="pokemon-grid">
        {pokemon?.results?.map((pokemonItem, index) => (
          <div key={index} className="pokemon-card">
            <div className="pokemon-image-container">
              <img
                src={`https://img.pokemondb.net/sprites/home/normal/${pokemonItem.name}.png`}
                alt={pokemonItem.name}
                className="pokemon-image"
                loading="lazy"
              />
            </div>
            <h2 className="pokemon-name">{pokemonItem.name}</h2>
          </div>
        ))}
      </ul>
    </div>
  );
}
