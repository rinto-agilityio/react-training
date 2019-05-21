# React Native Guides Notes

## Components and APIs
### View
- `View` is designed to be nested inside other views, can have children of any type. As I understand, this look like `div` element on the web.
- `View`s are designed to be used with `StyleSheet` for clarify and performance 

### Text
- Supports nesting, styling and touching handling
- iOS support nested `View` inside `Text`
- Container: The `<Text>` element is special relative to layout: everything inside is no longer using the flexbox layout but using text layout
- Must wrap all the text nodes inside of a `<Text>` component. You cannot have a text node directly under a `<View>`
- The right way to use consistent fonts and sizes across your application is to create a component for text notes with specific styles

### Image
- A React component for displaying different types of images, including network images, static resources, temporary local images, and images from local disk, such as the camera roll.
- Provided two methods: `getSize()`, `prefetch`

### TextInput
- Subscribe to handling change via events: `onChangeText`, `onSubmitEditing` and `onFocus`
- Support two methods for touch events: `.focus()` and `.blur()`
- TextInput has by default a border at the bottom. This border has its padding set by the background image provided by the system, and it cannot be changed

### ScrollView
- Must have a bounded height in order to work
- Not good performance, slow rendering and increased memory usage
- `FlatList` renders items lazily, just when they appear on screen, remove items that scroll way off screen to save memory and processing time

### StyleSheet
A StyleSheet is an abstraction similar to CSS StyleSheets

### Button
- Basic button component will render button the same with native code on any platform
- Build customize button using TouchableOpacity or TouchableNativeFeedback

### Picker
Renders the native picker component on iOS and Android. 

### Slider
A component used to select a single value from a range of values.

### Switch
Update value via `onValueChange` callback

### List Views
Only render elements that are currently showing on the screen. This is a good for display long list of data for performance and memory

### FlatList
A performant interface for rendering simple, flat list with features:
  - Fully cross-platform.
  - Optional horizontal mode.
  - Configurable viewability callbacks.
  - Header support.
  - Footer support.
  - Separator support.
  - Pull to Refresh.
  - Scroll loading.
  - ScrollToIndex support.

For multiple FlatList, if you need section support, use `<SectionList>`

For complex example, use `PureComponent` for performance optimization and avoiding bugs

### SectionList
A performant interface for rendering sectioned lists, supporting the most handy features:
  - Fully cross-platform.
  - Configurable viewability callbacks.
  - List header support.
  - List footer support.
  - Item separator support.
  - Section header support.
  - Section separator support.
  - Heterogeneous data and item rendering support.
  - Pull to Refresh.
  - Scroll loading.

## iOS Components and APIs
  - ActionSheetIOS
  - AlertIOS: Create an iOS alert dialog with a message or create a prompt for user input: `AlertIOS.alert` and `AlertIOS.prompt`
  - DatePickerIOS: Render a date/time picker. Update `date` prop via `onDateChange` callback
  - ImagePickerIOS
  - NavigatorIOS
  - ProgressViewIOS
  - PushNotificationIOS
  - SegmentedControlIOS: The selected index can be changed on the fly by assigning the `selectIndex` prop to a state variable
  - TabBarIOS

## Android Components and APIs
  - BackHandler: Detect hardware button presses for back navigation
  - DatePickerAndroid
  - DrawerLayoutAndroid: Rendered with `renderNavigationView` and direct children are the main view. The navigation view is initially not visible on the screen, but can be pulled in from the side of the window specified by the `drawerPosition` prop and its width can be set by the `drawerWidth` prop
  - PermissionsAndroid
  - ProgressBarAndroid: Used to indicate that the app is loading or there is some activity in the app
  - TimePickerAndroid
  - ToastAndroid:
    + `show()` function to show toast message
    + `SHORT` and `LONG` properties for toast duration
    + `TOP`, `BOTTOM` and `CENTER` properties for toast position
  - ToolbarAndroid: Most use to display a logo, navigation icon (e.g. hamburger menu), a title & subtitle and a list of actions
  - ViewPagerAndroid: Container that allows to flip left and right between child views

## Other Components and APIs
  - ActivityIndicator: Displays a circular loading indicator
  - Alert: Launches an alert dialog with the specified title and message
  - Animated: The `Animated` library is designed to make animations fluid, powerful, and easy to build and maintain
  - CameraRoll: `CameraRoll` provides access to the local camera roll / gallery. Before using this you must link the `RCTCameraRoll` library
  - Clipboard: Clipboard gives you an interface for setting and getting content from Clipboard
  - Dimensions
  - KeyboardAvoidingView: Solve the common problem of views that need to move out of the way of the virtual keyboard
  - Linking: Give a general interface to interact with both incoming and outgoing app links
  - Modal: A simple way to present content above an enclosing view
  - PixelRatio: PixelRatio class gives access to the device pixel density
  - RefreshControl: This component is used inside a ScrollView or ListView to add pull to refresh functionality
  - StatusBar: Control the app status bar
    + Usage with `Navigator` to have multiple `StatusBar`
  - WebView: Renders web content in a native view

## Platform Specific Code
React Native provides two ways to easily organize your code and separate it by platform:
  - Using the `Platform` module.
  - Using platform-specific file extensions.

### Platform module
  - `Platform.OS`: Detect device platform
  - `Platform.Version`: Detect platform version

### Platform-specific extensions
React Native will detect when a file has a `.ios.` or `.android.` extension and load the relevant platform file when required from other components. React Native will automatically pick up the right file based on the running platform

## Navigating Between Screens
Navigator is managing the presentation of, and transition between, multiple screens

### React Navigation
This is standalone lib that allows to set up the screens of an app similar to the router on web app

## Images
### Static Image Resources
- The image name is resolved the same way JS modules are resolved. The packager will pick the correct file for the platform with platform-specific file extensions with `.ios.` and `.android.`

- If you need to scale the image dynamically (i.e. via flex), you may need to manually set `{ width: undefined, height: undefined }` on the style attribute

### Static Non-Image Resources
Most common file types are supported including `.mp3`, `.wav`, `.mp4`, `.mov`, `.html` and `.pdf`

### Images From Hybrid App's Resources
You can still use images that are already bundled into the app

### Network Images
### Uri Data Images
### Cache Control (iOS Only)
Add `cache: 'only-if-cached'` property to `<Image>`

### Local Filesystem Images
### Why Not Automatically Size Everything?
Static images loaded from the app bundle via the `require('./my-icon.png')` syntax can be automatically sized because their dimensions are available immediately at the time of mounting

### Source as an object
In React Native, the `src` attribute is named `source` and doesn't take a string but an object with a `uri` attribute
Eg: `<Image source={{uri: 'something.jpg'}} />`

### Background Image via Nesting
Use the `<ImageBackground>` component, which has the same props as `<Image>`, and add whatever children to it you would like to layer on top of it

### iOS Border Radius Style
  - `borderTopLeftRadius`
  - `borderTopRightRadius`
  - `borderBottomLeftRadius`
  - `borderBottomRightRadius`

## Debugging
### Enabling Keyboard Shortcuts
To enable them, from xCode, open the `Hardware > Keyboard` and make sure that "Connect Hardware Keyboard" is checked

### Accessing the In-App Developer Menu
### Reloading JavaScript
#### Automatic reloading
Enable `Live Reload` or `Hot Reload` from Developer Menu

### In-app Errors and Warnings
#### Errors
  - Default display in full screen alert with red background
  - Use `console.error()` to manually trigger one

#### Warnings
  - Default display on screen with yellow background at the bottom of iOS simulator (knowns as YellowBoxes). Click on the alerts to show more information or to dismiss them
  - Use `console.warn()` to trigger a YellowBox
  - Disable YellowBoxes by using `console.disableYellowBox = true`
  - Specific ignore warnings by `console.ignoredYellowBox = ['Warning: ...'];`

### Chrome Developer Tools
To debug the JavaScript code in Chrome, select "Debug JS Remotely" from the Developer Menu, access the debug tools on browser at http://localhost:8081/debugger-ui

#### Debugging using a custom JavaScript debugger
To use a custom JavaScript debugger in place of Chrome Developer Tools, set the `REACT_DEBUGGER` environment variable to a command that will start your custom debugger

### React Developer Tools
Install `react-devtools` package globally, then run `react-devtools` from terminal to launch standalone DevTools

#### Integration with React Native Inspector
#### Inspecting Component Instances
Inspect the props and state of the React components in the browser console
#### Performance Monitor

## JavaScript Environment
### JavaScript Runtime
  - On iOS simulators and devices, Android emulators and devices: Uses JavaScriptCore which is the JavaScript engine that powers Safari
  - When using Chrome debugging, it runs all the JavaScript code within Chrome itself and communicates with native code via WebSocket using V8

### JavaScript Syntax Transformers
As of version 0.5.0, React Native ships with the Babel JavaScript compiler

### Polyfills

## Running On Device
Not done yet.