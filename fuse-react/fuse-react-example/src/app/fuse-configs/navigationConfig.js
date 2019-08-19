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
            url: '/e-commerce/products/1',
            exact: true,
          },
          {
            id: 'e-commerce-new-product',
            title: 'New Product',
            type: 'item',
            url: '/e-commerce/products/new',
            exact: true,
          },
        ],
      },
    ],
  },
]

export default navigationConfig
