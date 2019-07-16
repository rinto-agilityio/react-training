# Shared Components
## Target
> With the our aim to build the package that is used for both web and mobile. This package include some technologies are Apollo Graphql, react, react native and react native web. With this advantage, this package is build once time and might be used for other platforms in the future.

## Requirement
- User can see the Login page
- User can see the Welcome page
- User can see the Home page
- User can see the Category page
- User can see the Recipe page
- User can see the Recipe form page
- User can see the Profile page
- User can see the Wishlist page
- User can see the Wishlist form page

## Environment
- MacOS 10.13.3
- VS code
- Git

## Technology
- HTML5
- CSS3
- JavaScript
- GraphQL

## Page
- LogIn
- Welcome
- Home
- Category
- Recipe 
- Recipe form
- Wishlist
- Wishlist form
- Profile

## Tools and libs
- **React latest version( hooks )** - [https://reactjs.org/docs/getting-started.html] - A JavaScript library for building user interface.
- **React native** - [https://facebook.github.io/react-native/docs/getting-started] - A JavaScript library for building your React Native app
- **React native web** - [https://github.com/necolas/react-native-web/blob/master/docs/guides/getting-started.md] - A JavaScript library for help you render components and applications with React Native for Web
- **Storybook** - [https://github.com/storybooks/storybook]: Interactive development & testing environment for React, React-Native, Vue UI components
- **Enzyme** - [https://airbnb.io/enzyme/] - Enzyme is a JavaScript Testing utility for React that makes it easier to test your React Components' output. You can also manipulate, traverse, and in some ways simulate runtime given the output.
- **Jest** - [https://jestjs.io/en/] - Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
- **GraphQL** - [https://graphql.org]: A query language for APIs and a runtime for fulfilling those queries with your existing data
- **Apollo** - [https://www.apollographql.com/]: An implementation of GraphQL that helps you manage data from the cloud to your UI. It's incrementally adoptable and can be layered over your existing services, including REST APIs and databases

## Structure
/
|- shared/
|  |- .storybook/
|  |- coverage/
|  |- flow-typed/
|  |- public/
|  |- src
|  |  |- assets
|  |  |- components
|  |  |- config
|  |  |- constants
|  |  |- containers
|  |  |- graphql
|  |  |- helpers
|  |  |- layout
|  |  |- mocks
|  |  |- screens
|  |  |- themes
|  |  |- App.js
|  |  |- App.test.js
|  |  |- AppStyle.js
|  |  |- index.js
|  |- type-def-lib/
|  |- .env
|  |- .eslintrc
|  |- .flowconfig
|  |- .gitignore
|  |- jest.config.js
|  |- babel.config.js
|  |- config-overrides.js
|  |- index.js
|  |- package.json
|  |- README.md
|  |- yarn.lock
\

## Installation
1. Set up client
  ```
  - cd shared/
  - yarn install
  ```
2. Set up server
  ```
  - cd server/
  - yarn install
  ```

## Usage
### How to run practice
1. Run server: 
  ```
  - cd server/
  - yarn server
  ```
2. Run app on web to view component:
  ```
  - cd shared/
  - yarn start
  ```
3. Run coverage test: `yarn test:coverage`

4. Run storybook: `yarn storybook`
