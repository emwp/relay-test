import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import { createRefetchContainer } from 'react-relay';

const Characters = props => {
  const { query, relay } = props;
  const { characters } = query;

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
    query: graphql`
      fragment AllCharacters_query on Query
        @argumentDefinitions(page: { type: "Int", defaultValue: 1 }) {
        characters(page: $page) {
          results {
            id
            name
          }
          info {
            next
          }  
        }
      }
    `,
  },
  graphql`
    query AllCharactersRefetchQuery($page: Int) {
      ...AllCharacters_query @arguments(page: $page)
    }
  `,
);
