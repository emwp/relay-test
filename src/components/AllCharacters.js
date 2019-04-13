import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import { createRefetchContainer } from 'react-relay';

const Characters = props => {
  const { characters, relay } = props;

  const _loadMore = () => {
    const refetchVariables = fragmentVariables => ({
      ...fragmentVariables,
      page: characters.info.next,
    });
    relay.refetch(refetchVariables, null);
  };

  return (
    <ol>
      {characters.results.map(character => (
        <li key={character.id}>Name: {character.name}</li>
      ))}
      <br />
      <button onClick={_loadMore}>More!</button>
    </ol>
  );
};

export default createRefetchContainer(
  Characters,
  {
    characters: graphql`
      fragment AllCharacters_characters on Characters
        @argumentDefinitions(page: { type: "Int", defaultValue: 1 }) {
        results {
          id
          name
        }
        info {
          next
        }
      }
    `,
  },
  graphql`
    query AllCharactersRefetchQuery($page: Int) {
      characters: characters(page: $page) {
        ...AllCharacters_characters @arguments(page: $page)
      }
    }
  `,
);
