// Components
import LoginForm from '.'

it('LoginForm snapshots', () => {
  // define props
  const props = {
    onSubmit: () => {},
    setError: () => {},
    error: false,
    isSubmit: false,
  }

  const primaryComponent = shallow(
    <LoginForm {...props} type="primary" customStyle={{ flex: 1 }} />,
  )
  const secondaryComponent = shallow(
    <LoginForm {...props} error isSubmit type="secondary" />,
  )

  expect(primaryComponent).toMatchSnapshot()
  expect(secondaryComponent).toMatchSnapshot()
})

it('LoginForm actions', () => {
  // define props
  const props = {
    onSubmit: jest.fn(),
    setError: jest.fn(),
  }

  const component = shallow(<LoginForm {...props} />)

  component
    .find('Button')
    .at(0)
    .props()
    .onPress()
  expect(props.setError).toHaveBeenCalled()
})
