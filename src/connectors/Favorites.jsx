import React from 'react';
import { connect } from 'react-redux';
import type { List } from 'immutable';

import DisplayJokes from '../components/List';
import { removeJoke } from '../actions';
import { getFavorites } from '../reducers/chuckReducer';
import type { JokeMap } from '../types';

type Props = {
  jokes: List<JokeMap>,
  removeJoke: (id: string) => void,
};

export const Favorites = (props: Props) => (
  <DisplayJokes jokes={props.jokes} removeJoke={props.removeJoke} />
);

export default connect(
  state => ({
    jokes: getFavorites(state),
  }),
  {
    removeJoke,
  },
)(Favorites);
