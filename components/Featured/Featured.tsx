import { PokemonTransformed } from "../../lib/types";
import { Card } from "../Card/Card";
import styles from "./Featured.module.css";

type FeaturedProps = {
  pokemons: PokemonTransformed[];
};

export function Featured({ pokemons }: FeaturedProps) {
  return (
    <section className={styles.section}>
      <h2 className={styles.headline}>Featured Pokémon</h2>
      <div className={styles.container}>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </section>
  );
}
