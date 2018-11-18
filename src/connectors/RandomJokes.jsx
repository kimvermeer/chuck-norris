import React from 'react';
import { connect } from 'react-redux';
import { fromJS } from 'immutable';

import List from '../components/List';
import { Button } from '../styles/elements';
import type { State, Joke } from '../types';
import { addJoke } from '../actions';

export class RandomJokes extends React.Component<{}, State> {
  constructor() {
    super();

    this.state = {
      isLoading: false,
      jokes: [],
    };

    this.fetchJokes = this.fetchJokes.bind(this);
    this.addToFavorites = this.addToFavorites.bind(this);
  }

  async fetchJokes() {
    this.setState({ isLoading: true });

    const resp = await fetch('http://api.icndb.com/jokes/random/10');
    const data = await resp.json();

    this.setState({ jokes: data.value, isLoading: false });
  }

  addToFavorites(index: number) {
    this.props.addJoke(fromJS(this.state.jokes[index]));
  }

  render() {
    if (!this.state.isLoading && !this.state.jokes.length) {
      return <Button onClick={this.fetchJokes}>Joke me!</Button>;
    }

    if (this.state.isLoading) {
      return null;
    }

    return (
      <React.Fragment>
        <Button onClick={this.fetchJokes}>Refresh!</Button>
        <List
          jokes={fromJS(this.state.jokes)}
          addToFavorites={this.addToFavorites}
        />
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  {
    addJoke,
  },
)(RandomJokes);
