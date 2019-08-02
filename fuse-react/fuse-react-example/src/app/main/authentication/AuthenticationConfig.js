import Login from './containers/login'

export const AuthenticationConfig = {
  settings: {
    layout: {},
  },
  routes: [
    {
      path: '/login',
      component: Login,
    },
  ],
}
