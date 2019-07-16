import type { Recipe } from '../recipe'

export type Category = {
  id: string,
  imgUrl: string,
  name: string,
  recipes: Array<Recipe>,
}
