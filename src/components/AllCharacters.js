import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import { createFragmentContainer } from 'react-relay';

const Characters = props => {
  const { characters } = props;

  return (
    <ol>
      {characters.results.map(character => (
        <li>Name: {character.name}</li>
      ))}
      <br />
      <button>Next</button>
    </ol>
  );
};

export default createFragmentContainer(
  Characters,
  graphql`
    fragment AllCharacters_characters on Characters {
      results {
        id
        name
        species
      }
    }
  `,
);
