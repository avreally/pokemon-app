import Image from "next/image";
import styles from "./Card.module.css";
import { PokemonTransformed } from "../../app/types/PokemonTransformed";

type CardProps = {
  pokemon: PokemonTransformed;
};

export function Card({ pokemon }: CardProps) {
  const displayedStats = ["hp", "attack", "defense"];

  const selectedStats = pokemon.stats.map((stat) => {
    if (displayedStats.includes(stat.stat.name)) {
      return stat;
    }
  });

  return (
    <div className={styles.container}>
      <Image
        className={styles.image}
        src={pokemon.sprites.front_shiny ?? ""}
        width={100}
        height={100}
        alt="globe"
      />
      <div className={styles.id}>#{pokemon.id}</div>
      <h3 className={styles.name}>{pokemon.name}</h3>
      <ul className={styles.types}>
        {pokemon.types.map((type, index) => {
          return <li key={index}>{type.type.name}</li>;
        })}
      </ul>
      <ul className={styles.stats}>
        {selectedStats
          ? selectedStats.map((stat, index) => {
              return (
                <li key={index} className={styles.stat}>
                  <div>{stat?.stat.name}</div>
                  <div>{stat?.base_stat}</div>
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
}
