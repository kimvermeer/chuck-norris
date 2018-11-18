import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { getIsFavoritesLimitReached } from '../reducers/chuckReducer';
import { Button } from '../styles/elements';
import { type Joke } from '../types';

type Props = {
  jokes: List<Joke>,
  addToFavorites?: (joke: Joke) => void,
  removeJoke?: (id: string) => void,
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

export class List extends React.Component<Props> {
  render() {
    const { jokes } = this.props;
    return (
      <Ul>
        {jokes.map((joke: Joke, index: number) => (
          <React.Fragment key={index}>
            <Li>
              {this.props.addToFavorites ? (
                <CTA
                  disabled={this.props.isLimitReached}
                  onClick={() => this.props.addToFavorites(joke)}
                >
                  Fave!
                </CTA>
              ) : (
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
}))(List);
