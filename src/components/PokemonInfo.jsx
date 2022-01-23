import React, { useContext } from "react";
import styled from '@emotion/styled';

import PokemonContext from "../PokemonContext";
import PokemonType from "../PokemonType";

const PokemonInfo = () => {
  
  const { state: { selectedPokemon }} = useContext(PokemonContext);
  const Info = styled.div`color: #18414e; border-top: 4px solid #002984`

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