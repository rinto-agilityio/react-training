import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const GET_CATEGORY = gql`
  query getCategory($id: String!) {
    getCategory(id: $id) {
      id
      name
      imgUrl
      recipes {
        id
        categoryId
        cookingTypeId
        title
        isDraft
        subTitle
        imgUrl
        description
        views
        votes
        modifyDate
        publishedDate
      }
    }
  }
`

export const getCategory = graphql(GET_CATEGORY, {
  options: ({ id }) => ({
    variables: { id },
  }),
  props: ({ data }) => {
    const { loading, error, getCategory = {} } = data
    const { recipes, imgUrl, name } = getCategory
    const category = {
      imgUrl,
      name,
    }

    return { loading, error, category, recipes }
  },
})
