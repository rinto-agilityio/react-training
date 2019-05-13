## Demo ApolloGraphQL with React

Simple Blog, show list Post and Author to demo ApolloGraphQL, React hook and material-ui

*Read [Training Logs](GraphQL.md)*

### Technical Stacks

[x] [GraphQL](https://graphql.org/)

[x] React version 16.8.1 with react hook

[x] [Material-ui](https://material-ui.com/)

[x] [Storybook](https://storybook.js.org/)

[x] Unit testing with Enzyme - Coverage: 81.82%

### Usage

#### Run app

1. Install dependencies packages: `yarn install`

2. Run server: `yarn server`

3. Run app: `yarn start`

#### Run storybook

Run command: `yarn storybook`

#### Unit testing

Run unit test:

```
yarn test
```

Check coverage:
```
yarn test -- --coverage
```

### Issues

[ ] Unit testing for [Suspense + React.lazy](https://github.com/airbnb/enzyme/issues/1917)

[ ] Unit testing for [React router with React.lazy](https://github.com/airbnb/enzyme/issues/1460#issuecomment-442893257)

## TODO:

[x] Code spliting

[x] Update Jest configs out of package.json

[x] Unit test for props

[x] Unit test with snapshot

[x] Answer question: When to use `mount` or `shallow` with Enzyme

[x] Review naming convention