export const favouritesReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_FAVOURITES':
      return {
        ...state,
        favourites: action.payload,
      };

    case 'ADD_FAVOURITE':
      return {
        ...state,
        favourites: [action.payload, ...state.favourites],
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
