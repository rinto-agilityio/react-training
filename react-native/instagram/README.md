# Instagram app

Clone instagram app without authentication:

* User can post new photo
* Default screen (Home screen): Show all photos in system with full-width
* Accoun screen: Show list 3 photos each row, the number items in a row is flexible
* User can like / remove like, comment for any photos

## Support Devices

* App support Android 5+ and iOS 8.1+, tested on Nexus 5X, Pixel, iPhone 5/6/6+/8

## Usage

### 1. Install packages
Please follow [react-native doucments](https://facebook.github.io/react-native/docs/getting-started.html) to install:

  * react-native-cli
  * Xcode
  * Android Studio or Genymotion

### 2. Config environments

Please check `.env.example` keys in app. Copy content into `.env` then replace by real environment keys

### 3. Run app

Run command below to install dependencies: `npm install` or `yarn`

Run app on iOS simulator: `react-native run-ios`

Run app on Android emulator: `react-native run-android`

### 4. Run unit test

```
yarn test
```

### 5. Run storybook

```
yarn storybook
```

## Notes

* [Unit testing notes and configurations (for developer only)](notes/unit-testing.md)