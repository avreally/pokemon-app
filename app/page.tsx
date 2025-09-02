import { Featured } from "../components/Featured/Featured";
import { getPokemonByName, getPokemons, transformPokemon } from "./utils/utils";

export default async function Home() {
  const pokemons = await getPokemons();

  const maxIndex = pokemons.results.length - 1;

  function getRandomIndex() {
    return Math.floor(Math.random() * maxIndex);
  }

  const featured = new Set<number>();
  while (featured.size < 4) {
    featured.add(getRandomIndex());
  }
  const featuredArray: number[] = Array.from(featured);

  const selectedPokemons = featuredArray.map(
    (element: number) => pokemons.results[element]
  );

  const featuredPokemons = await Promise.all(
    selectedPokemons.map((pokemon) => getPokemonByName(pokemon.name))
  );

  const transformedPokemons = featuredPokemons.map((pokemon) => {
    return transformPokemon(pokemon);
  });

  return (
    <main>
      <Featured pokemons={transformedPokemons} />
    </main>
  );
}
