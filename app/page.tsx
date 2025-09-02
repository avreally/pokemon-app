import styles from "./page.module.css";
import { Search } from "../components/Search/Search";
import { Featured } from "../components/Featured/Featured";
import { RandomPokemon } from "../components/RandomPokemon/RandomPokemon";
import { getPokemonByName, transformPokemon } from "./utils/utils";

export default async function Home() {
  const data = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=2000");
  const pokemons = await data.json();

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
      <section className={styles.section}>
        <h1 className={styles.heading}>Gotta catch &apos;em all!</h1>
        <p className={styles.text}>
          Discover, search and explore the amazing world of Pokémon. Find
          <br /> your favourite and learn about their stats.
        </p>
        <RandomPokemon total={pokemons.results.length} />
      </section>
      <Search />
      <Featured pokemons={transformedPokemons} />
    </main>
  );
}
