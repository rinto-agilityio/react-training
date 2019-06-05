import { categories } from './categories'
import { recipes } from './recipes'

const favoriteRecipeId: Array<string> = recipes.map(item => item.id)
export const user = {
  id: '1',
  name: 'Alex',
  email: 'alex@gmail.com',
  avatar:
    'https://cdn4.iconfinder.com/data/icons/avatars-21/512/avatar-circle-human-female-black-7-512.png',
  favoriteRecipe: favoriteRecipeId,
  followCategory: categories,
}
