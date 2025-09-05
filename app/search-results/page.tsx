import { Card } from "../../components/Card/Card";
import { Section } from "../../components/Section/Section";
import {
  getPokemonByName,
  getPokemons,
  transformPokemon,
} from "../../lib/utils";

type SearchResultsProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function SearchResults({
  searchParams,
}: SearchResultsProps) {
  const result = await searchParams;
  const query = result.query;
  const pokemons = await getPokemons();

  const foundPokemons = pokemons.results.filter((pokemon) => {
    return pokemon.name.includes(query);
  });

  const displayedPokemons = await Promise.all(
    foundPokemons.map((pokemon) => getPokemonByName(pokemon.name))
  );

  const transformedPokemons = displayedPokemons.map((pokemon) => {
    return transformPokemon(pokemon);
  });

  return (
    <Section headline={`Search results for "${query}"`}>
      {transformedPokemons.map((pokemon) => (
        <Card key={pokemon.id} pokemon={pokemon} />
      ))}
    </Section>
  );
}
