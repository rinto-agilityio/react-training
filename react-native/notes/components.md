# Components

## ActivityIndicator
## Button
## FlatList
## Image
## KeyboardAvoidingView
## ListView
- A core component designed for efficient display of vertically scrolling lists of changing data. `ListView` component with that data source and a `renderRow` callback which takes a blob from the data array and returns a renderable component

- `ListView` also supports more advanced features, including sections with sticky section headers, header and footer support, callbacks on reaching the end of the available data (`onEndReached`) and on the set of rows that are visible in the device viewport change (`onChangeVisibleRows`), and several performance optimizations

- There are a few performance operations designed to make ListView scroll smoothly

  + Only re-render changed rows - the `rowHasChanged` function provided to the data source tells the ListView if it needs to re-render a row because the source data has changed - see ListViewDataSource for more details.

  + Rate-limited row rendering - By default, only one row is rendered per event-loop (customizable with the pageSize prop). This breaks up the work into smaller chunks to reduce the chance of dropping frames while rendering rows.

## Modal
A simple way to present content above an enclosing view

## NavigatorIOS
- It is only available on iOS
- To set up the navigator, provide the `initialRoute` prop with a route object, optionally pass in a `passProps` property to your `initialRoute`

## Picker
## RefreshControl
This component is used inside a `ScrollView` or `ListView` to add pull to refresh functionality
When the ScrollView is at `scrollY: 0`, swiping down triggers an `onRefresh` event

## ScrollView
ScrollViews must have a bounded height in order to work, since they contain unbounded-height children into a bounded container (via a scroll interaction)

## SectionList
A performant interface for rendering sectioned lists, if you don't need section support and want a simpler interface, use `<FlatList>`

## Slider
## Switch
## TextInput
## TouchableHighlight
- A wrapper for making views respond properly to touches. On press down, the underlay color will show.
- The underlay comes from wrapping the child in a new `View`, which can affect layout
- **Must have one child** (not zero or more than one). If you wish to have several child components, wrap them in a `View`

## TouchableNativeFeedback
- A wrapper for making views respond properly to touches (Android only)
- At the moment it only supports having a single View instance as a child node

## TouchableOpacity
- A wrapper for making views respond properly to touches. On press down, the opacity of the wrapped view is decreased, dimming it
- Opacity is controlled by wrapping the children in an `Animated.View`, which is added to the view hiearchy, this can affect layout

## TouchableWithoutFeedback
Supports only one child. If you wish to have several child components, wrap them in a `View`

## VirtualizedList
- Base implementation for the more convenient `<FlatList>` and `<SectionList>` components
- In general, this should only really be used if you need more flexibility than `FlatList` provides
- Virtualization massively improves memory consumption and performance of large lists by maintaining a finite render window of active items and replacing all items outside of the render window with appropriately sized blank space
- This is a `PureComponent` which means that it will not re-render if props remain shallow-equal

## WebView
Renders web content in a native view
