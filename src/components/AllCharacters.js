import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import { createRefetchContainer } from 'react-relay';

const Characters = props => {
  const { characters, relay } = props;

  const _loadMore = () => {
    const refetchVariables = fragmentVariables => ({
      page: fragmentVariables.page + 1,
    });
    relay.refetch(refetchVariables);
    console.log(relay);
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
        info {
          pages
          next
          prev
        }
        results {
          id
          name
        }
      }
    `,
  },
  graphql`
    query AllCharactersRefetchQuery($page: Int) {
      characters {
        ...AllCharacters_characters @arguments(page: $page)
      }
    }
  `,
);
