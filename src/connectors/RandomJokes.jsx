import React from 'react';
import { connect } from 'react-redux';
import { fromJS } from 'immutable';

import List from '../components/List';
import { Button, ButtonSecondary } from '../styles/elements';
import type { Joke, JokeMap } from '../types';
import { addJoke } from '../actions';
import { getIsFavoritesLimitReached } from '../reducers/chuckReducer';

type Props = {
  isLimitReached: boolean,
  addJoke: (joke: JokeMap) => void,
};

export type State = {
  isLoading: boolean,
  jokes: Joke[],
  isTimerRunning: boolean,
};

export class RandomJokes extends React.Component<Props, State> {
  favoritesInterval: number;
  fetchJokes: () => void;
  addToFavorites: (joke: Joke) => void;
  useTimer: () => void;

  constructor() {
    super();

    this.state = {
      isLoading: false,
      jokes: [],
      isTimerRunning: false,
    };

    this.fetchJokes = this.fetchJokes.bind(this);
    this.addToFavorites = this.addToFavorites.bind(this);
    this.useTimer = this.useTimer.bind(this);
  }

  async fetchJokes() {
    const resp = await fetch('http://api.icndb.com/jokes/random/10');
    const data = await resp.json();

    this.setState({
      jokes: data.value,
      isLoading: false,
      isTimerRunning: false,
    });
  }

  addToFavorites(joke: Joke) {
    this.props.addJoke(fromJS(joke));
  }

  useTimer() {
    if (!this.state.isTimerRunning) {
      this.favoritesInterval = setInterval(async () => {
        if (this.props.isLimitReached) {
          this.setState({
            isTimerRunning: false,
          });
          clearInterval(this.favoritesInterval);
          return;
        }

        const resp = await fetch('http://api.icndb.com/jokes/random/1');
        const data: { value: Joke[] } = await resp.json();

        this.addToFavorites(data.value[0]);
      }, 5000);
    } else {
      clearInterval(this.favoritesInterval);
    }
    this.setState({ isTimerRunning: !this.state.isTimerRunning });
  }

  render() {
    if (this.state.isLoading) {
      return null;
    }

    return (
      <React.Fragment>
        <Button onClick={this.fetchJokes}>
          {this.state.jokes.length ? 'Refresh!' : 'Load jokes!'}
        </Button>
        <ButtonSecondary onClick={this.useTimer}>
          {this.state.isTimerRunning ? 'Cancel timer' : 'Start timer'}
        </ButtonSecondary>
        <List
          jokes={fromJS(this.state.jokes)}
          addToFavorites={this.addToFavorites}
        />
      </React.Fragment>
    );
  }
}

export default connect(
  state => ({
    isLimitReached: getIsFavoritesLimitReached(state),
  }),
  {
    addJoke,
  },
)(RandomJokes);
