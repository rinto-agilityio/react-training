# Guide iOS
### Linking Libraries
#### Automatic linking
Step 1. Install a library with native dependencies:
```
$ npm install <library-with-native-dependencies> --save
```
Step 2. Link your native dependencies:
```
$ react-native link
```

After that, all libraries with native dependencies should be successfully linked to your iOS/Android project

#### Manual linking
- Step 1: For lib has native code, find `.xcodeproj` file then drag this into your project on Xcode under `Libraries`
- Step 2: Click on main project file `.xcodeproj`, then select `Build Phases`, and drag the static lib from `Products` folder inside the Library you are importing to `Link Binary With Libraries`

### Running On Simulator
