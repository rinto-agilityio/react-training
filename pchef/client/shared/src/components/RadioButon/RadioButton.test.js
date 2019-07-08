// Components
import RadioButton from '.'

describe('Button', () => {
  let props = {
    value: 'first',
    status: false,
  }
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
})
