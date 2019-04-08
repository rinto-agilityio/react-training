import { API, ROUTES } from '../api/Api'

export function getProduct() {
  console.log('API', API);

  const response = API.get(ROUTES.PRODUCTS)

  console.log('resonse', response);

}
