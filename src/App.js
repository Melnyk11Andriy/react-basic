import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Button } from '@material-ui/core';

import './App.css';

const PokemonRow = ({ pokemon, onSelect }) => {
  return (
    <tr>
      <td>{pokemon.name.english}</td>
      <td>{pokemon.type.join(', ')}</td>
      <td>
        <Button 
          variant="outlined"
          color="primary" 
          onClick={() => onSelect(pokemon)}
        >
          Select
        </Button>
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
          {Object.keys(base).map((key) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{base[key]}</td>
            </tr>
          ))}
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
    english: PropTypes.string.isRequired,
  }),
  base: PropTypes.shape({
    HP: PropTypes.number.isRequired,
    Attack: PropTypes.number.isRequired,
    Defense: PropTypes.number.isRequired,
    'Sp. Attack': PropTypes.number.isRequired,
    'Sp. Defense': PropTypes.number.isRequired,
    Speed: PropTypes.number.isRequired,
  }),
};

const Title = styled.h1`
  text-align: center;
`;
const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-column-gap: 1rem;
`;
const Container = styled.div`
width: 800px;
padding-top: 1rem;
margin: 0 auto;
`;

const Input = styled.input`
width: 100%;
font-size: x-large;
padding: 0.2rem;
border: 2px ridge rgb(77, 61, 61);
`;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
      pokemon: [],
      selectedItem: null
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/react-basic/pokemon.json')
    .then((response) => response.json())
    .then((data) => this.setState({
      ...this.state, pokemon: data
    }));
  }

  render() {
    return (
      <Container>
        <Title>Pokemon Search</Title>
        <TwoColumnLayout>
          <div>
            <Input
              value={this.state.filter}
              onChange={(event) => this.setState({
                ...this.state, filter: event.target.value
              })}
            />
            <table width='100%'>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                {this.state.pokemon
                  .filter((value) =>
                    value.name.english
                      .toLowerCase()
                      .includes(this.state.filter.toLowerCase())
                  )
                  .slice(0, 20)
                  .map((pokemon) => (
                    <PokemonRow
                      key={pokemon.id}
                      pokemon={pokemon}
                      onSelect={(pokemon) => this.setState({
                        ...this.state, selectedItem: pokemon
                      })}
                    />
                  ))}
              </tbody>
            </table>
          </div>
          <div>{this.state.selectedItem && <PokemonInfo {...this.state.selectedItem} />}</div>
        </TwoColumnLayout>
      </Container>
    );
  }
}

// useEffect(() => {
//   fetch('http://localhost:3000/react-basic/pokemon.json')
//     .then((response) => response.json())
//     .then((data) => setPokemon(data));
// }, []);

export default App;
