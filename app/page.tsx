import Image from "next/image";
import styles from "./page.module.css";
import { PokemonTransformed } from "./types/PokemonTransformed";
import { Pokemon } from "./types/Pokemon";
import { Search } from "../components/Search/Search";
import { Featured } from "../components/Featured/Featured";

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

  async function getPokemonByName(name: string): Promise<Pokemon> {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

    return await data.json();
  }

  const featuredPokemons = await Promise.all(
    selectedPokemons.map((pokemon) => getPokemonByName(pokemon.name))
  );

  function transformPokemon() {
    return featuredPokemons.map(({ id, name, types, stats, sprites }) => {
      const result: PokemonTransformed = {
        id,
        name,
        types,
        stats,
        sprites,
      };

      return result;
    });
  }

  const transformedPokemons = transformPokemon();

  return (
    <main>
      <section className={styles.section}>
        <h1 className={styles.heading}>Gotta catch &apos;em all!</h1>
        <p className={styles.text}>
          Discover, search and explore the amazing world of Pokémon. Find
          <br /> your favourite and learn about their stats.
        </p>
        <button className={styles.btnPrimary}>
          <Image src="/Dice.svg" width={25} height={25} alt="Dice" />
          Random Pokémon
        </button>
      </section>
      <Search />
      <Featured pokemons={transformedPokemons} />
    </main>
  );
}
