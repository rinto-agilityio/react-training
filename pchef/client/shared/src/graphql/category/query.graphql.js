import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const GET_CATEGORY = gql`
  query getCategory($id: String!) {
    getCategory(id: $id) {
      id
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
  options: props => ({
    variables: { id: props.id },
  }),
  props: ({ data }) => {
    const { loading, error, getCategory = {} } = data
    const { recipes } = getCategory
    const category = {
      imgUrl: getCategory.imgUrl,
      name: getCategory.name,
    }

    return { loading, error, category, recipes }
  },
})
