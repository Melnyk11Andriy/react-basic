import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './App.css';
import pokemon from './pokemon.json';

const PokemonRow = ({ pokemon, onSelect }) => {
  return (
    <tr>
      <td>{pokemon.name.english}</td>
      <td>{pokemon.type.join(', ')}</td>
      <td>
        <button onClick={() => onSelect(pokemon)}>Select</button>
      </td>
    </tr>
  );
};

const PokemonInfo = ({ name, base }) => {
  return (
    <div>
      <h3>{name.english}</h3>
      <table>
        <tbody>
        {
          Object.keys(base).map(key => (
            <tr key={key}>
              <td>{key}</td>  
              <td>{base[key]}</td>  
            </tr>
          ))
        }
        </tbody>
      </table>
    </div>
  );
};

PokemonRow.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.shape({
      english: PropTypes.string.isRequired,
    }),
    type: PropTypes.arrayOf(PropTypes.string.isRequired),
  }),
  onSelect: PropTypes.func.isRequired,
};

PokemonInfo.propTypes = {
  name: PropTypes.shape({
    english: PropTypes.string.isRequired
  }),
    base: PropTypes.shape({
      HP: PropTypes.number.isRequired,
      Attack: PropTypes.number.isRequired,
      Defense: PropTypes.number.isRequired,
      'Sp. Attack': PropTypes.number.isRequired,
      'Sp. Defense': PropTypes.number.isRequired,
      Speed: PropTypes.number.isRequired

    }),
};

function App() {
  const [filter, setFilter] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div
      style={{
        width: 800,
        paddingTop: '1rem',
        margin: '0 auto',
      }}
    >
      <h1 className='title'>Pokemon Search</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '70% 30%',
          gridColumnGap: '1rem',
        }}
      >
        <div>
          <input
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
          />
          <table width='100%'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {pokemon
                .filter((value) =>
                  value.name.english
                    .toLowerCase()
                    .includes(filter.toLowerCase())
                )
                .slice(0, 20)
                .map((pokemon) => (
                  <PokemonRow
                    key={pokemon.id}
                    pokemon={pokemon}
                    onSelect={(pokemon) => setSelectedItem(pokemon)}
                  />
                ))}
            </tbody>
          </table>
        </div>
        <div>{selectedItem && <PokemonInfo {...selectedItem} />}</div>
      </div>
    </div>
  );
}

export default App;
