import type { Recipe } from '../recipe'

export type UserInfo = {
  name: string,
  avatar: string,
  id: string,
  email: string,
}

export type User = {
  user: UserInfo,
  ownRecipes: Array<Recipe>,
  favoriteRecipe: Array<Recipe>,
}
