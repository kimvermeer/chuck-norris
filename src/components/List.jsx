import React from 'react';
import styled from 'styled-components';

import { Button } from '../styles/elements';
import { type Joke } from '../types';

type Props = {
  jokes: Joke[],
  addToFavorites?: (id: string) => void,
  removeJoke?: (id: string) => void,
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
                <CTA onClick={() => this.props.addToFavorites(index)}>
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
