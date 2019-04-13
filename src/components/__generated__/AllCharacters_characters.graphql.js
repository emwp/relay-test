/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type AllCharacters_characters$ref: FragmentReference;
export type AllCharacters_characters = {|
  +results: ?$ReadOnlyArray<?{|
    +id: string,
    +name: ?string,
  |}>,
  +info: ?{|
    +next: ?number
  |},
  +$refType: AllCharacters_characters$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "AllCharacters_characters",
  "type": "Characters",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "page",
      "type": "Int",
      "defaultValue": 1
    }
  ],
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
};
// prettier-ignore
(node/*: any*/).hash = '3aa174ff003fc75675a88969c11c1210';
module.exports = node;
