// Components
import wait from 'waait'
import Login from '.'

it('Login snapshots', () => {
  // define props
  const props = {
    handlingLoginSuccess: () => {},
    signInUser: () => {},
  }

  const primaryComponent = shallow(
    <Login {...props} type="primary" customStyle={{ flex: 1 }} />,
  )
  const secondaryComponent = shallow(<Login {...props} type="secondary" />)

  expect(primaryComponent).toMatchSnapshot()
  expect(secondaryComponent).toMatchSnapshot()
})

it('Login actions', async () => {
  // define props
  const props = {
    signInUser: () => new Promise((rs, err) => {
      err()
    }),
    handlingLoginSuccess: jest.fn(),
  }

  const component = shallow(<Login {...props} />)

  // login failed
  component
    .find('LoginForm')
    .at(0)
    .props()
    .onSubmit()

  await wait(0)

  expect(component.find('Text').length).toBe(2)

  // login success
  component.setProps({
    signInUser: () => new Promise(resolve => {
      resolve({ data: { signInUser: { token: 'test' } } })
    }),
  })

  component
    .find('LoginForm')
    .at(0)
    .props()
    .onSubmit()

  await wait(0)

  expect(props.handlingLoginSuccess).toHaveBeenCalled()
})
