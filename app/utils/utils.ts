import { Pokemon } from "../types/Pokemon";
import { PokemonTransformed } from "../types/PokemonTransformed";

export async function getPokemons() {
  const data = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=2000");

  return await data.json();
}

export async function getPokemonByName(name: string): Promise<Pokemon> {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

  return await data.json();
}

export function transformPokemon({ id, name, types, stats, sprites }: Pokemon) {
  const result: PokemonTransformed = {
    id,
    name,
    types,
    stats,
    sprites,
  };

  return result;
}
