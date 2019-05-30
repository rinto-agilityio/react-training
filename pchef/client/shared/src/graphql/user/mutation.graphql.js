// Libs
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

// GraphQL
import { GET_USER } from '../recipe-step/query.graphql'

// Helpers
import { formatUserToggleSaveRes } from '../../helpers/utils'

const USER_SIGNIN = gql`
  mutation signInUser($email: String!, $password: String!) {
    signInUser(email: $email, password: $password) {
      token
    }
  }
`

const USER_TOGGLE_CATEGORY = gql`
  mutation userToggleCategory($categoryId: String!) {
    userToggleCategory(categoryId: $categoryId) {
      results
    }
  }
`

const signInUser = graphql(USER_SIGNIN, {
  props: ({ mutate }) => ({
    signInUser: (email, password) => mutate({
      variables: {
        email,
        password,
      },
    }),
  }),
  /**
   * This is sample config updater
   * Use this option to read/write cache
   */
  options: {
    update: (proxy, { data }) => {
      try {
        console.log('proxy: ', proxy)
        console.log('data: ', data)
      } catch (err) {
        console.error(err)
      }
    },
  },
})

const userToggleCategory = graphql(USER_TOGGLE_CATEGORY, {
  props: ({ mutate }) => ({
    userToggleCategory: categoryId => mutate({
      variables: { categoryId },
    }),
  }),
  /**
   * This is sample config updater
   * Use this option to read/write cache
   */
  options: {
    update: (proxy, { data }) => {
      try {
        const {
          userToggleCategory: { results },
        } = data
        const dataQuery = proxy.readQuery({ query: GET_USER })
        const dataUpdated = {
          ...dataQuery,
          getUser: {
            ...dataQuery.getUser,
            followCategory: formatUserToggleSaveRes(results, 'Category'),
            __typename: 'UserFullInfos',
          },
        }
        proxy.writeQuery({ query: GET_USER, data: dataUpdated })
      } catch (err) {
        console.error(err)
      }
    },
  },
})

export {
  signInUser,
  userToggleCategory,
}
