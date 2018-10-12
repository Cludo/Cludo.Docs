# Cludo API Documentation

This is the GitHub repository of the public documentation for the Cludo API. The documentation is written in markdown and is powered by a Node.js port of Slate.

(It started out as a fork of [sdelements/node-slate][1])

## Prerequisites

* Node.js

## Building

Run the following commands from the commandline of your choice:

```shell
$ npm install
$ npm run build
```

Which will compile everything into a static site and place it in `./build`.

To easily view it locally you can now run the following command:

```shell
$ npm start
```

Which will start a live-reloading server listening on `127.0.0.1:4567`.

[1]: https://github.com/sdelements/node-slate