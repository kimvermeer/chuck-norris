import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { type List } from 'immutable';

import { getIsFavoritesLimitReached } from '../reducers/chuckReducer';
import { Button } from '../styles/elements';
import type { JokeMap } from '../types';

type Props = {
  jokes: List<JokeMap>,
  addToFavorites: (joke: JokeMap) => void,
  removeJoke: (id: string) => void,
  isLimitReached: boolean,
};

const Ul = styled.ul`
  list-style: none;
  padding-inline-start: 0;
`;

const Li = styled.li`
  margin: 10px 0;
  display: block;
`;

const CTA = styled(Button)`
  margin-right: 10px;
`;

export class JokesList extends React.Component<Props> {
  render() {
    const { jokes } = this.props;
    return (
      <Ul>
        {jokes.map((joke: JokeMap, index: number) => (
          <React.Fragment key={index}>
            <Li>
              {!!this.props.addToFavorites && (
                <CTA
                  disabled={this.props.isLimitReached}
                  onClick={() => this.props.addToFavorites(joke)}
                >
                  Fave!
                </CTA>
              )}
              {!!this.props.removeJoke && (
                <CTA onClick={() => this.props.removeJoke(joke.get('id'))}>
                  Remove
                </CTA>
              )}
              {joke.get('joke')}
            </Li>
          </React.Fragment>
        ))}
      </Ul>
    );
  }
}

export default connect(state => ({
  isLimitReached: getIsFavoritesLimitReached(state),
}))(JokesList);
