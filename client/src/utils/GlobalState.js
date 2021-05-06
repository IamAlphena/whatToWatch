import React, { useReducer } from "react";
import { ADD_FAVORITE, REMOVE_FAVORITE } from "./action";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [action.post, ...state.favorites],
        loading: false,
      };

    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((movie) => {
          return movie._id !== action._id;
        }),
      };

    default:
      return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    favorites: [],
  });
  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
