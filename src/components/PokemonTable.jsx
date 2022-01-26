import React from "react";
import PokemonRow from "./PokemonRow";
import { observer } from "mobx-react";

import store from '../store';

const PokemonTable = () => {
  
  return (
    <table width="100%">
      <tbody>
        {store.filteredPokemon.slice(0, 20).map((pokemon) => (
            <PokemonRow
              key={pokemon.id}
              pokemon={pokemon}
              onClick={(pokemon) => store.setSelectedPokemon(pokemon)}
            />
          ))}
      </tbody>
    </table>
  );
};

export default observer(PokemonTable);