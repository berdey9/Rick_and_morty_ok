import { ADD_FAV, REMOVE_FAV, ORDER, FILTER } from "./actions";
const initialState = {
  myFavorites: [],
  allCharacters: [],
};
// HACEMOS 2 ARREGLOS YA QUE ALLCHARACTERS SIRVE PARA ORDENAR O HACER LAS FUNCIONES NECESARIAS PARA LUEGO HACER LA COPIA Y LO MUESTRE MYFAVORITES
const rootReducer = (state = initialState, action) => {
  let copyFavorites = state.myFavorites;
  let copyCharacters = state.allCharacters;
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };
    case REMOVE_FAV: {
      return { ...state, myFavorites: action.payload };
    }
    case FILTER:
      const allCharactersFiltered = copyCharacters.filter(
        (character) => character.gender === action.payload
      );
      return {
        ...state,
        myFavorites:
          action.payload === "allCharacters"
            ? [...state.allCharacters]
            : allCharactersFiltered,
      };
    case ORDER:
      const allCharactersSort = [...state.allCharacters];
      return {
        ...state,
        myFavorites:
          action.payload === "A"
            ? allCharactersSort.sort((a, b) => a.id - b.id)
            : allCharactersSort.sort((a, b) => b.id - a.id),
        // el < y el - es lo mismo
      };
    default:
      return { ...state };
  }
};
export default rootReducer;
