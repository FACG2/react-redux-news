# Redux Introduction

## Pre

- _Client Side Rendering_ vs _Server Sider Rendering_
- `import` syntax
- babel
- webpack
- _single source of truth_

## What is React?

- client side **view** framework
- uses virtual DOM

## What is Redux?

- single source of truth
- used for managing state

**Action**
- an event, of the form `{ type, payload }`
- actions are _dispatched_ by actionCreators

**Reducer**
- a pure function, listens for actions

`reducer :: (previousState, action) -> newState`

## How to run this app
### Dev
1. Clone this repo
1. run `npm install`
1. run `npm run dev:build`
  - this bundles and watches the react app
1. in another terminal tab, run `npm run dev:start`
  - this runs and watches the server
