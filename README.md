# bitauth-cljs

A ClojureScript wrapper around BitPay's [BitAuth](https://github.com/bitpay/bitauth) JavaScript library

## Installation

To use this in your git project, first set up [jitpack.io](https://jitpack.io/) as a repository.  You can do this by adding to your `project.clj`:

```
:repositories [["jitpack" "https://jitpack.io"]]
```

Then add to your dependencies:

```
:dependencies [[com.github.xcthulhu/bitauth-cljs "0.3.2"]]
```

## Usage

To use this in your project, add to your ClojureScript namespace:

```
(ns my-cool-namespace 
  (:require [com.bitpay.bitauth]))
```

You can then access the object via an object `js/bitauth`.  The API for `js/bitauth` is described in the [bitauth closure extern](https://github.com/xcthulhu/bitauth-cljs/blob/master/src/bitauth/externs/bitauth.js) file included in this repository.

## Notes

The JavaScript included in this project comes from a custom build of BitAuth; it is unfortunate that Browserify does not create CommonJS libraries by default.  

## License

Copyright © 2016 Matthew Wampler-Doty

Distributed under the MIT License.
