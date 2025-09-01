export interface PokemonTransformed {
  id: number;
  name: string;
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];

  sprites: {
    front_default: string | null;
    front_shiny: string | null;
  };
}
