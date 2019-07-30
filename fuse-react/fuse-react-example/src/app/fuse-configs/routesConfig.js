import React from 'react'
import { Redirect } from 'react-router-dom'
import { FuseUtils } from '@fuse/index'
import { appsConfigs } from 'app/main/appsConfig'

const routeConfigs = [...appsConfigs]

const routes = [
  ...FuseUtils.generateRoutesFromConfigs(routeConfigs),
  {
    path: '/',
    component: () => <Redirect to="/todo" />,
  },
]

export default routes
