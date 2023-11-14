import { ADD_FAV, REMOVE_FAV, ORDER, FILTER } from "./actions";
const initialState = {
  myFavorites: [],
  allCharactersFav: [],
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.allCharactersFav, action.payload],
        allCharactersFav: [...state.allCharactersFav, action.payload],
      };
    case REMOVE_FAV: {
      return {
        ...state,
        myFavorites: state.myFavorites.filter((fav) => {
          // eslint-disable-next-line eqeqeq
          return fav.id != action.payload;
        }),
      };
    }
    case FILTER:
      const allCharactersFiltered = state.allCharactersFav.filter(
        (character) => character.gender === action.payload
      );
      return {
        ...state,
        myFavorites:
          action.payload === "All"
            ? [...state.allCharactersFav]
            : allCharactersFiltered,
      };
    case ORDER:
      const allCharactersSort = [...state.allCharactersFav];
      return {
        ...state,
        myFavorites:
          action.payload === "A"
            ? allCharactersSort.sort((a, b) => a.id - b.id)
            : allCharactersSort.sort((a, b) => b.id - a.id),
        // < y - es lo mismo
      };
    default:
      return { ...state };
  }
};
export default rootReducer;
