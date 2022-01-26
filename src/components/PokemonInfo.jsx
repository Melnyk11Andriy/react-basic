import React from "react";
import styled from '@emotion/styled';
import { observer } from "mobx-react";

// import PokemonType from "../PokemonType";
import store from "../store";

const PokemonInfo = () => {
  
  const Info = styled.div`border-top: 4px solid #002984`;

  return store.selectedPokemon ? (
    <Info>
    <h2>{store.selectedPokemon.name.english}</h2>
    <table>
      <tbody>
        {Object.keys(store.selectedPokemon.base).map((key) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{store.selectedPokemon.base[key]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </Info>
  ) : null;
}; 

// PokemonInfo.propTypes = PokemonType;

export default observer(PokemonInfo);