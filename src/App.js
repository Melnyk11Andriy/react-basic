import React from 'react';
import './App.css';
import pokemon from './pokemon.json';

function App() {
  return (
    <div
      style={{
        width: 800,
        paddingTop: '1rem',
        margin: '0 auto',
      }}
    >
      <h1 className='title'>Pokemon Search</h1>
      <table width='100%'>
        <thead>
          <tr>
          <th>Name</th>
          <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {pokemon.map(pokemon => (
            <tr key={pokemon.id}>
              <td>{pokemon.name.english}</td>
              <td>{pokemon.type.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
