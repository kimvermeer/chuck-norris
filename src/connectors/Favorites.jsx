import React from 'react';
import { connect } from 'react-redux';

import { List } from '../components/List';
import { removeJoke } from '../actions';
import { getFavorites } from '../reducers/chuckReducer';
import { type Joke } from '../types';

type Props = {
  jokes: List<Joke>,
  removeJoke: (id: string) => void,
};

export const Favorites = (props: Props) => (
  <List jokes={props.jokes} removeJoke={props.removeJoke} />
);

export default connect(
  state => ({
    jokes: getFavorites(state),
  }),
  {
    removeJoke,
  },
)(Favorites);
