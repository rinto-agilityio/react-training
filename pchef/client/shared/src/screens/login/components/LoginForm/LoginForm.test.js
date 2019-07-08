// Components
import LoginForm from '.'
import Button from '../../../../components/Button'

it('LoginForm snapshots', () => {
  // mock props
  const props = {
    onSubmit: jest.fn(),
    setError: jest.fn(),
    error: false,
    isSubmit: false,
  }

  const primaryComponent = renderer.create(
    <LoginForm {...props} type="primary" customStyle={{ flex: 1 }} />
  )
  const secondaryComponent = renderer.create(
    <LoginForm {...props} error isSubmit type="secondary" />
  )

  expect(primaryComponent).toMatchSnapshot()
  expect(secondaryComponent).toMatchSnapshot()
})

it('LoginForm actions', () => {
  // mock props
  const props = {
    onSubmit: jest.fn(),
    setError: jest.fn(),
  }

  const component = shallow(<LoginForm {...props} />)

  component
    .find(Button)
    .at(0)
    .props()
    .onPress()
  expect(props.setError).toHaveBeenCalled()
})
