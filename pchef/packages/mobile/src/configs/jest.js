import { configure, shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'

// Setup adapter to work with enzyme
configure({ adapter: new Adapter() })

jest.mock('react-native-fs', () => ({
  PicturesDirectoryPath: jest.fn(),
}))

// Make Enzyme functions available in all test files without importing
global.shallow = shallow
global.render = render
global.mount = mount
global.renderer = renderer
