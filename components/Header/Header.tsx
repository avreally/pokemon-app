import { RandomPokemon } from "../RandomPokemon/RandomPokemon";
import styles from "./Header.module.css";

export default async function Header() {
  const data = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=2000");
  const pokemons = await data.json();

  return (
    <section className={styles.section}>
      <h1 className={styles.heading}>Gotta catch &apos;em all!</h1>
      <p className={styles.text}>
        Discover, search and explore the amazing world of Pokémon. Find
        <br /> your favourite and learn about their stats.
      </p>
      <RandomPokemon total={pokemons.results.length} />
    </section>
  );
}
