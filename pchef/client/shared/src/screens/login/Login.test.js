// Components
import wait from 'waait'
import Login from '.'
import LoginForm from './components/LoginForm'

it('Login snapshots', () => {
  // mock props
  const props = {
    handlingLoginSuccess: jest.fn(),
    signInUser: jest.fn(),
  }

  const primaryComponent = renderer.create(
    <Login {...props} type="primary" customStyle={{ flex: 1 }} />
  )
  const secondaryComponent = renderer.create(
    <Login {...props} type="secondary" />
  )

  expect(primaryComponent).toMatchSnapshot()
  expect(secondaryComponent).toMatchSnapshot()
})

it('Login actions', async () => {
  // mock props
  const props = {
    signInUser: () =>
      new Promise((rs, err) => {
        err()
      }),
    handlingLoginSuccess: jest.fn(),
  }

  const component = shallow(<Login {...props} />)

  // login failed
  component
    .find(LoginForm)
    .at(0)
    .props()
    .onSubmit()

  // wait for component update
  await wait(0)

  expect(component.find('Text').length).toBe(1)

  // login success
  component.setProps({
    signInUser: () =>
      new Promise(resolve => {
        resolve({ data: { signInUser: { token: 'test' } } })
      }),
  })

  component
    .find(LoginForm)
    .at(0)
    .props()
    .onSubmit()

  // wait for component update
  await wait(0)

  expect(props.handlingLoginSuccess).toHaveBeenCalled()
})
