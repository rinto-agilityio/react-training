import React from 'react'
import { Redirect } from 'react-router-dom'
import TodoApp from './containers'

export const TodoAppConfig = {
  settings: {
    layout: {},
  },
  routes: [
    {
      path: '/todo',
      component: TodoApp,
    },
    {
      path: '/todo',
      component: () => <Redirect to="/todo/all" />,
    },
  ],
}
