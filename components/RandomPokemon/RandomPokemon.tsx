"use client";

import { useState } from "react";
import { Button } from "../Button/Button";
import type { Pokemon } from "../../app/types/Pokemon";
import type { PokemonTransformed } from "../../app/types/PokemonTransformed";
import { Card } from "../Card/Card";
import { getPokemonByName, transformPokemon } from "../../app/utils/utils";

export function RandomPokemon({ total }: { total: number }) {
  const [transformedPokemon, setTransformedPokemon] =
    useState<PokemonTransformed | null>(null);

  function getRandomIndex() {
    return Math.floor(Math.random() * total - 1);
  }

  async function getRandomPokemon(): Promise<Pokemon> {
    const randomIndex = getRandomIndex();
    const data = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?limit=1&offset=${randomIndex}`
    );
    const pokemons = await data.json();

    return pokemons.results[0];
  }

  async function handleClick() {
    const pokemon = await getRandomPokemon();
    if (!pokemon) {
      return;
    }

    const result = await getPokemonByName(pokemon.name);
    if (!result) {
      return;
    }

    setTransformedPokemon(transformPokemon(result));
  }

  return (
    <>
      <Button onClick={handleClick}>Random Pokémon</Button>
      {transformedPokemon ? <Card pokemon={transformedPokemon} /> : null}
    </>
  );
}
