import React from 'react'
import { Redirect } from 'react-router-dom'
import TodoApp from './containers'
import { authRoles } from 'app/auth'

export const TodoAppConfig = {
  settings: {
    layout: {},
  },
  auth: authRoles.staff,
  routes: [
    {
      path: '/todos',
      component: TodoApp,
    },
    {
      path: '/todos',
      component: () => <Redirect to="/todo/all" />,
    },
  ],
}
