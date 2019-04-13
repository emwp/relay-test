/**
 * @flow
 * @relayHash 7c36849df3609c347e699254dd996b67
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type AllCharacters_characters$ref = any;
export type AllCharactersRefetchQueryVariables = {|
  page?: ?number
|};
export type AllCharactersRefetchQueryResponse = {|
  +characters: ?{|
    +$fragmentRefs: AllCharacters_characters$ref
  |}
|};
export type AllCharactersRefetchQuery = {|
  variables: AllCharactersRefetchQueryVariables,
  response: AllCharactersRefetchQueryResponse,
|};
*/


/*
query AllCharactersRefetchQuery(
  $page: Int
) {
  characters: characters(page: $page) {
    ...AllCharacters_characters_2Pg8Wv
  }
}

fragment AllCharacters_characters_2Pg8Wv on Characters {
  results {
    id
    name
  }
  info {
    next
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "page",
    "type": "Int",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "page",
    "variableName": "page",
    "type": "Int"
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AllCharactersRefetchQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "characters",
        "name": "characters",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Characters",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "AllCharacters_characters",
            "args": [
              {
                "kind": "Variable",
                "name": "page",
                "variableName": "page",
                "type": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AllCharactersRefetchQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "characters",
        "name": "characters",
        "storageKey": null,
        "args": (v1/*: any*/),
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
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "info",
            "storageKey": null,
            "args": null,
            "concreteType": "Info",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "next",
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
    "name": "AllCharactersRefetchQuery",
    "id": null,
    "text": "query AllCharactersRefetchQuery(\n  $page: Int\n) {\n  characters: characters(page: $page) {\n    ...AllCharacters_characters_2Pg8Wv\n  }\n}\n\nfragment AllCharacters_characters_2Pg8Wv on Characters {\n  results {\n    id\n    name\n  }\n  info {\n    next\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5eaf88b48633f7561a3acdbf1b1ad941';
module.exports = node;
