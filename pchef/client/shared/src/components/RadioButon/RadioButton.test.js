// Components
import { RadioButton as RadioButtonComponent } from 'react-native-paper'
import RadioButton from '.'

// Mocks
import { categories } from '../../mocks'

let props = {
  value: 'first',
  status: false,
  group: categories,
  onPress: jest.fn(),
}

const component = shallow(<RadioButton {...props} />)

describe('Button', () => {
  it('Renders correctly', () => {
    const radioBtn = renderer.create(<RadioButton {...props} />).toJSON()

    expect(radioBtn).toMatchSnapshot()
  })

  it('Renders correctly radio button component with label', () => {
    props = {
      ...props,
      label: 'First',
    }
    const radioBtn = renderer.create(<RadioButton {...props} />).toJSON()

    expect(radioBtn).toMatchSnapshot()
  })

  it('Renders correctly radio button component with status true', () => {
    props = {
      ...props,
      status: true,
    }
    const radioBtn = renderer.create(<RadioButton {...props} />).toJSON()

    expect(radioBtn).toMatchSnapshot()
  })

  it('should call onPress props when press on radio button', () => {
    const radioButton = component.find(RadioButtonComponent.Group)
    radioButton.props().onValueChange()

    expect(props.onPress).toHaveBeenCalled()
  })
})
