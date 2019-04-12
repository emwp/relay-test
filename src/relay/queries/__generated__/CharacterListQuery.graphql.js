/**
 * @flow
 * @relayHash 25ec9c11fcde7a16c70d11fa6002022c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type AllCharacters_characters$ref = any;
export type CharacterListQueryVariables = {||};
export type CharacterListQueryResponse = {|
  +characters: ?{|
    +$fragmentRefs: AllCharacters_characters$ref
  |}
|};
export type CharacterListQuery = {|
  variables: CharacterListQueryVariables,
  response: CharacterListQueryResponse,
|};
*/


/*
query CharacterListQuery {
  characters {
    ...AllCharacters_characters
  }
}

fragment AllCharacters_characters on Characters {
  results {
    id
    name
    species
  }
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CharacterListQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "characters",
        "storageKey": null,
        "args": null,
        "concreteType": "Characters",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "AllCharacters_characters",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CharacterListQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "characters",
        "storageKey": null,
        "args": null,
        "concreteType": "Characters",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "results",
            "storageKey": null,
            "args": null,
            "concreteType": "Character",
            "plural": true,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "name",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "species",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "CharacterListQuery",
    "id": null,
    "text": "query CharacterListQuery {\n  characters {\n    ...AllCharacters_characters\n  }\n}\n\nfragment AllCharacters_characters on Characters {\n  results {\n    id\n    name\n    species\n  }\n}\n",
    "metadata": {}
  }
};
// prettier-ignore
(node/*: any*/).hash = '68763680495ba67cb537320c71b79c86';
module.exports = node;
