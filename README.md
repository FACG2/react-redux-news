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
