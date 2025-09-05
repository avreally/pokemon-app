import { Section } from "../../components/Section/Section";
import styles from "./page.module.css";

export default async function PokemonTypes({}) {
  const data = await fetch(`https://pokeapi.co/api/v2/type`);
  const result = await data.json();

  const types = result.results;

  return (
    <Section headline="Pokemon types">
      <div>
        <div className={styles.types}>
          {types.map((type, index) => {
            return (
              <button
                key={`key-${index}`}
                className={`${styles.type} ${styles[type.name]}`}
              >
                {type.name}
              </button>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
