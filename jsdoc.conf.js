/* eslint-disable no-useless-escape */

module.exports = {
  "plugins": [],
  "recurseDepth": 10,
  "source": {
    "includePattern": ".+\\.js(doc|x)?$",
    "excludePattern": "(^|\\/|\\\\)_",
  },
  "sourceType": "module",
  "tags": {
    "allowUnknownTags": true,
    "dictionaries": [ "jsdoc", "closure" ],
  },
  "templates": {
    "cleverLinks": false,
    "monospaceLinks": false,
  },
  "opts": {
    "destination": "_docs",
    "readme": "readme.md",
  },
}