import React from "react";
import styled from '@emotion/styled';

import PokemonType from "../PokemonType";
import useStore from "../store";

const PokemonInfo = () => {
  
  const Info = styled.div`border-top: 4px solid #002984`;

  const selectedPokemon = useStore(state => state.selectedPokemon);

  return selectedPokemon ? (
    <Info>
    <h2>{selectedPokemon.name.english}</h2>
    <table>
      <tbody>
        {Object.keys(selectedPokemon.base).map((key) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{selectedPokemon.base[key]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </Info>
  ) : null;
}; 

PokemonInfo.propTypes = PokemonType;

export default PokemonInfo;