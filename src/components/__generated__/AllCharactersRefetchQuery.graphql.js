/**
 * @flow
 * @relayHash a7c6fc1a2251fb677bfcdced3bb20e6c
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
query AllCharactersRefetchQuery {
  characters {
    ...AllCharacters_characters_2Pg8Wv
  }
}

fragment AllCharacters_characters_2Pg8Wv on Characters {
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "page",
    "type": "Int",
    "defaultValue": null
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
            "name": "info",
            "storageKey": null,
            "args": null,
            "concreteType": "Info",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "pages",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "next",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "prev",
                "args": null,
                "storageKey": null
              }
            ]
          },
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
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "AllCharactersRefetchQuery",
    "id": null,
    "text": "query AllCharactersRefetchQuery {\n  characters {\n    ...AllCharacters_characters_2Pg8Wv\n  }\n}\n\nfragment AllCharacters_characters_2Pg8Wv on Characters {\n  info {\n    pages\n    next\n    prev\n  }\n  results {\n    id\n    name\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b61cf38df8db884ed825eff861469468';
module.exports = node;
