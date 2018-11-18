import React from 'react';
import { connect } from 'react-redux';

import { List } from '../components/List';
import { removeJoke } from '../actions';
import { getFavorites } from '../reducers/chuckReducer';

type State = {
  isLoading: boolean,
  jokes: Joke[],
};

type Joke = {
  id: number,
  joke: string,
  categories: string[],
};

export class Favorites extends React.Component<Props, State> {
  render() {
    console.log(this.props.jokes);
    return <List jokes={this.props.jokes} removeJoke={this.props.removeJoke} />;
  }
}

export default connect(
  state => ({
    jokes: getFavorites(state),
  }),
  {
    removeJoke,
  },
)(Favorites);
