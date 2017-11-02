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
