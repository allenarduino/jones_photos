export const favouritesReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_FAVOURITES':
      return {
        ...state,
        favourites: action.payload,
      };
    case 'ADD_TO_FAVOURITES':
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
      };

    case 'REMOVE_FROM_FAVOURITES':
      return {
        ...state,
        favourites: state.favourites.filter((favourite) => favourite.id !== action.payload),
      };

    default:
      return state;
  }
};
