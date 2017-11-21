# Instagram app

## Testing notes
I'm using `Jest` for snapshot testing

### Configuration
Update `package.json` for Jest config
1. `transformIgnorePatterns` config, [detail](https://gitlab.asoft-python.com/g-huynguyenvan/react-training/issues/4)
```json
"transformIgnorePatterns": [
  "node_modules/(?!react-native|react-navigation)/"
]
```

2. `testMatch` config, check [official document](https://facebook.github.io/jest/docs/en/configuration.html#testmatch-array-string)
```json
"testMatch": ["**/src/**/*.test.js"]
```

3. `setupFiles` config to load mocks libs/variables, [detail](https://gitlab.asoft-python.com/g-huynguyenvan/react-training/issues/5)
```json
"setupFiles": ["./src/test/setup.js"]
```

4. `globals` config, [detail](https://gitlab.asoft-python.com/g-huynguyenvan/react-training/issues/6)
```json
"globals": {
  "window": {}
}
```

The `setup.js` file will mocking some 3rd libs
