import {
  getAllCookingTypes,
  getAllCategories,
  getRecipes,
  recipeDetail,
  getAllRecipes,
} from './query.graphql'
import {
  createRecipe,
  createRecipeStep,
  userToggleRecipe,
  publishRecipe,
  userToggleVote,
} from './mutation.graphql'

export {
  getAllCookingTypes,
  getAllCategories,
  createRecipe,
  createRecipeStep,
  getRecipes,
  recipeDetail,
  userToggleRecipe,
  publishRecipe,
  userToggleVote,
  getAllRecipes,
}
