import create from 'zustand';

const useStore = create(set => ({
    pokemon: [],
    filter: '',
    setSelectesPokemon: null,
    setPokemon: pokemon => set(state => ({ ...state, pokemon })),
    setFilter: filter => set(state => ({ ...state, filter })),
    setSelectedPokemon: selectedPokemon => set(state => ({ ...state, selectedPokemon })),
}));

export default useStore;