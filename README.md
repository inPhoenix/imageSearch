# imageSearch

Live:
[https://inphoenix.github.io/imageSearch/](https://inphoenix.github.io/imageSearch/)

## The stack
- [x] React
- [x] Redux
- [x] SASS
- [x] Axios

## How to Run the App:

```console
yarn/npm install
yarn/npm start
The App will open on Localhost:3000
```

## How to run The tests:
```console
yarn/npm test
```

### Implementation Details/Decisions

- Using [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) for testing.
- As the search should be on each keystroke a debounce function was added to keep dependencies as minimal. Similar solutions would include adding Redux Observables or Redux-Saga.  
- Using https://gitmoji.carloscuesta.me/ to style the commit messages.
