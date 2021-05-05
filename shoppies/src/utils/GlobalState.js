import React, { createContext, useReducer, useContext } from "react";
import {
    SET_CURRENT_MOVIE,
    UPDATE_MOVIES,
    ADD_NOMINATION,
    UPDATE_NOMINATION,
    REMOVE_NOMINATION,
    LOADING
  } from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
  case SET_CURRENT_MOVIE:
    return {
      ...state,
      currentPost: action.movie,
      loading: false
    };

  case UPDATE_MOVIES:
    return {
      ...state,
      movies: action.movies,
      loading: false
    };

  case ADD_NOMINATION:
    return {
      ...state,
      nominated: [action.movie, ...state.nominated],
      loading: false
    };

  case UPDATE_NOMINATION:
    return {
      ...state,
      nominated: [...action.nominated],
      loading: false
    };

  case REMOVE_NOMINATION:
    return {
      ...state,
      nominated: state.nominated.filter((movie) => {
        return movie._id !== action._id; 
      })
    };

  case LOADING:
    return {
      ...state,
      loading: true
    };

  default:
    return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    movies: [],
    movie: {
      _id: 0,
      title: "",
      year: ""
    },
    nominated: [],
    loading: false
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };