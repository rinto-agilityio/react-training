// @flow
export type RecipeType = {
  id: string,
  title: string,
  description: string,
  imgUrl: string,
  votes: Array<string>,
  thumbnail: string,
}

export type FollowCategoryType = {
  id: string,
  imgUrl: string,
  name: string,
  recipes: Array<RecipeType>,
}

export type UserInfoType = {
  user: {
    name: string,
    avatar: string,
    id: string,
    email: string,
  },
  ownRecipes: Array<RecipeType>,
  favoriteRecipe: Array<RecipeType>,
}

export type RecipeStepType = {
  step: number,
  title: string,
  id: string,
}

export type CategoryType = {
  id: string,
  name: string,
  imgUrl: string,
}

export type CookingType = {
  id: string,
  name: string,
  imgUrl: string,
}

export type WishListType = {
  id: string,
  categoryId: string,
  cookingTypeId: string,
  date: string,
}
