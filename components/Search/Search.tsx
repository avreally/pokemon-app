import Image from "next/image";
import Form from "next/form";
import styles from "./Search.module.css";

export function Search() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Form action="/search-results/" className={styles.form}>
          <label htmlFor="search" className={styles.hidden}>
            Search
          </label>
          <input
            className={styles.input}
            type="text"
            name="query"
            id="search"
            placeholder="Search for a Pokémon..."
          />
          <button className={styles.button} type="submit">
            <Image src="/Search.svg" width={20} height={20} alt="Search" />
          </button>
        </Form>
      </div>
    </section>
  );
}
