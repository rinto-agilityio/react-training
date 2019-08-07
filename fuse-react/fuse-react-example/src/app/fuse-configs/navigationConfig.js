const navigationConfig = [
  {
    id: 'applications',
    title: 'Applications',
    type: 'group',
    icon: 'apps',
    children: [
      {
        id: 'example-component',
        title: 'Example',
        type: 'item',
        icon: 'whatshot',
        url: '/example',
      },
      {
        id: 'todo',
        title: 'To-Do',
        type: 'item',
        icon: 'check_box',
        url: '/todos',
      },
      {
        id: 'e-commerce',
        title: 'E-Commerce',
        type: 'collapse',
        icon: 'shopping_cart',
        url: '/e-commerce',
        children: [
          {
            id: 'e-commerce-products',
            title: 'Products',
            type: 'item',
            url: '/e-commerce/products',
            exact: true,
          },
          {
            id: 'e-commerce-product-detail',
            title: 'Product Detail',
            type: 'item',
            url: '/e-commerce/products/1/a-walk-amongst-friends-canvas-print',
            exact: true,
          },
          {
            id: 'e-commerce-new-product',
            title: 'New Product',
            type: 'item',
            url: '/e-commerce/products/new',
            exact: true,
          },
          {
            id: 'e-commerce-orders',
            title: 'Orders',
            type: 'item',
            url: '/e-commerce/orders',
            exact: true,
          },
          {
            id: 'e-commerce-order-detail',
            title: 'Order Detail',
            type: 'item',
            url: '/e-commerce/orders/1',
            exact: true,
          },
        ],
      },
    ],
  },
]

export default navigationConfig
