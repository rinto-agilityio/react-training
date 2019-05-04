# Personal Chef

This is app supports for both web and mobile (both iOS and Android). Every user is a Chef, they can post recipes everyday and other users can check it either comment/love it.

Not support video yet.


## Tech Stacks:

- [react](https://reactjs.org/) v16.8.3
- [react-native](https://facebook.github.io/react-native/) v0.59.5
- [react-native-web](https://github.com/necolas/react-native-web) v0.11.2

- Refer:
    - [Tutorial: How to share code between iOS, Android & Web using React Native, react-native-web and monorepo](https://dev.to/brunolemos/tutorial-100-code-sharing-between-ios-android--web-using-react-native-web-andmonorepo-4pej)

## Guide

Make sure you're staying in root and use `yarn` (not `npm`) to run scripts, reasons is `yarn` is supporting [workspaces config](https://yarnpkg.com/lang/en/docs/workspaces/).

1. Install dependencies: `yarn`
2. Run web: `yarn workspace web start`
3. Run mobile: `yarn workspace mobile start`

Open project in `Xcode` or `Android Studio` to run mobile app on simulator.
