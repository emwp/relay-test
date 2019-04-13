import React, { Component } from 'react';

import graphql from 'babel-plugin-relay/macro';
import { QueryRenderer } from 'react-relay';

import environment from '../environment/Environment';
import AllCharacters from '../../components/AllCharacters';

class CharactersList extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query CharacterListQuery {
            characters {
              ...AllCharacters_characters
            }
          }
        `}
        variables={{}}
        render={({ error, props }) => {
          if (error) {
            return <div>{error.message}</div>;
          } else if (props) {
            console.log(props);
            return <AllCharacters characters={props.characters} />;
          }
          return <div>Loading...</div>;
        }}
      />
    );
  }
}

export default CharactersList;
