import React from 'react'
import { Redirect } from 'react-router-dom'
import { FuseUtils } from '@fuse/index'
import { ExampleConfig } from 'app/main/example/ExampleConfig'

const routeConfigs = [ExampleConfig]

const routes = [
  ...FuseUtils.generateRoutesFromConfigs(routeConfigs),
  {
    path: '/',
    component: () => <Redirect to="/example" />,
  },
]
console.log('routes', routes);

export default routes
