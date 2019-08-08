import React from 'react'
import { Redirect } from 'react-router-dom'
import { authRoles } from 'app/auth'
import FuseLoadable from '@fuse/components/FuseLoadable/FuseLoadable'

export const TodoAppConfig = {
  settings: {
    layout: {},
  },
  auth: authRoles.admin,
  routes: [
    {
      path: '/todos',
      component: FuseLoadable({
        loader: () => import('./containers'),
      }),
    },
    {
      path: '/todos',
      component: () => <Redirect to="/todo/all" />,
    },
  ],
}
