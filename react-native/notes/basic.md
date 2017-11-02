# React Native Basic Notes

## Overview
- React Native uses the same fundamental UI building blocks as regular iOS and Android apps
- React Native combines smoothly with components written in Objective-C, Java or Swift

## Height and Width
### Fixed Dimensions
Height and width determinte its size on the screen with the value of width and height of style component

### Flex Dimensions
- Use `flex` attribute in component style, normally we use `flex: 1`, it will style component fill all available space.
- If we have some component the same level, `flex` attribute will calculate with the ratio formula for those components

## Layout with Flexbox
`flex` parameter only supporting a single number

### Flex Direction
- Style attribute: `flexDirection`
- Default value is `column` instead of `row` as a web

### Justify Content
- Style attribute: `justifyContent`
- Available options are `flex-start`, `center`, `flex-end`, `space-around` and `space-between`.
- Determines the distribution of children along the **primary axis**.

### Align Items
- Style attribute: `alignItems`
- Determines the alignment of children along the **secondary axis**. If the **primary axis** is `row`, then the **secondary** is `column`, and vice versa.
- Available options are `flex-start`, `center`, `flex-end` and `stretch`.

### ScrollView
- Generic scrolling container on phone screen
- Can config to allow paging through views using swiping by using `pagingEnabled` props
- Allow to zoom in/out content with `maximumZoomScale` and `minimumZoomScale` props

### List Views
1. `FlatList`:
  - Display a scrolling list  of changing
  - Unlike the more generic `ScrollView`, the `FlatList` **only renders elements that are currently showing on the screen**, not all the elements at once.
  - Requires two props: `data` and `renderItem`. `data` is the source of information for the list. `renderItem` takes one item from the source and returns a formatted component to render
2. `SectionList`
  - Render a set of data broken into logical sections, maybe with section headers
  - Requires two props: `sections` and `renderItem`. `renderSectionHeader` is option props to render header for the section of the list
  - List item in sections have to put in key `data` to render on UI inside `renderItem` props

### Networking
By default, iOS will block any request that's not encrypted using SSL.
