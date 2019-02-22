import React from 'react'
import { shallow } from 'enzyme'
import { Route, MemoryRouter } from 'react-router-dom'

// Components
import Routers from './routers'
const Homepage = React.lazy(() => import('./pages/Homepage'))

/**
 * Can not unit test router yet
 * Didn't support for Supense and Reac.lazy, more details: https://github.com/airbnb/enzyme/issues/1917
 */
describe('Routers', () => {
  it.skip('Render correct routers', () => {
    const wrapper = shallow(<Routers />)

    const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
      const routeProps = route.props()

      pathMap[routeProps.path] = routeProps.component

      return pathMap
    }, {})


    expect(pathMap['/']).toBe(Homepage)
  })
})
