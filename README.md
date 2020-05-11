# s3-demomodules
A demo plugin package for Septima Search Server  

An example of how to package and document external Septima Search Server types

## This package  

This package installs _ItemsForAddressProvider_ as a details provider for Dawa Adresses

### Install

`npm install --production C:\Users\kpc\git\s3-demomodules`

### Usage

Include as detailshandler for a Dawa Searcher:

```
  dawasearcher:
    _type: Septima.Search.DawaSearcher
    detailhandlers:
      - _type: s3-demomodules/ItemsForAddressProvider
        _options:
          header: "Demo details provider"
```  

All options are optional. Please see [the API](api.md)