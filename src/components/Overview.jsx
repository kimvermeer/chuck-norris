import React from 'react';
import styled from 'styled-components';

import { GlobalStyle } from '../styles/globals.js';

const Header = styled.header`
  font-family: 'Arial';
  height: 100px;
  background-color: orange;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export class Overview extends React.Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <Header>
          <h1>Chuck Norris Jokes</h1>
        </Header>
        <main />
      </React.Fragment>
    );
  }
}
