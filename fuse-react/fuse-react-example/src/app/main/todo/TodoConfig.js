import React from 'react'
import { Redirect } from 'react-router-dom'
import TodoApp from './containers'

export const TodoAppConfig = {
  settings: {
    layout: {},
  },
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
