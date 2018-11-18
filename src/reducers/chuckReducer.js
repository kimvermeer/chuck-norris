import { type Joke } from '../types';
import { addJoke } from '../actions';
import { JOKE } from '../constants';
import { fromJS, toJS } from 'immutable';

const localFavorites =
  localStorage && localStorage.getItem('favoriteJokes')
    ? JSON.parse(localStorage.getItem('favoriteJokes'))
    : [];

export const initialState = fromJS({
  favorites: localFavorites,
});

export const getFavorites = state => state.chuck.get('favorites');

export default (state = initialState, action: any) => {
  switch (action.type) {
    case JOKE.ADD:
      if (
        state
          .get('favorites')
          .some(fave => fave.get('id') === action.payload.joke.get('id'))
      ) {
        return state;
      }

      const localState = state.get('favorites').toJS();
      localState.push(action.payload.joke);
      localStorage.setItem('favoriteJokes', JSON.stringify(localState));

      return state.updateIn(['favorites'], arr =>
        arr.push(action.payload.joke),
      );
    case JOKE.REMOVE:
      const newState = state
        .get('favorites')
        .filter(favorite => favorite.get('id') !== action.payload.id);
      localStorage.setItem('favoriteJokes', JSON.stringify(newState.toJS()));
      return state.set('favorites', newState);
    default:
      return state;
  }
};
