import React from 'react';
import styled from 'styled-components';

import RandomJokes from '../connectors/RandomJokes';
import Favorites from '../connectors/Favorites';
import { Section } from '../styles/elements';
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

export const Overview = () => (
  <React.Fragment>
    <GlobalStyle />
    <Header>
      <h1>Chuck Norris Jokes</h1>
    </Header>
    <main>
      <Section>
        <header>
          <h1>Random Jokes</h1>
        </header>
        <RandomJokes />
      </Section>
      <Section>
        <header>
          <h1>My favorites</h1>
        </header>
        <Favorites />
      </Section>
    </main>
  </React.Fragment>
);
