import React from 'react'
import { FuseLoadable } from '@fuse'
import { Redirect } from 'react-router-dom'
import { authRoles } from 'app/auth'

export const ECommerceAppConfig = {
  settings: {
    layout: {},
  },
  auth: authRoles.admin,
  routes: [
    {
      path: '/e-commerce/products/:productId',
      component: FuseLoadable({
        loader: () => import('../containers/product/ProductDetail'),
      }),
    },
    {
      path: '/e-commerce/products',
      component: FuseLoadable({
        loader: () => import('../containers/product/Products'),
      }),
    },
    // {
    //   path: "/apps/e-commerce/orders/:orderId",
    //   component: FuseLoadable({
    //     loader: () => import("./order/Order")
    //   })
    // },
    // {
    //   path: "/apps/e-commerce/orders",
    //   component: FuseLoadable({
    //     loader: () => import("./orders/Orders")
    //   })
    // },
    {
      path: '/apps/e-commerce',
      component: () => <Redirect to="/apps/e-commerce/products" />,
    },
  ],
}
