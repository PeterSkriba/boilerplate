import gql from 'graphql-tag'

export default gql`
  query users {
    users {
      id
      email
    }
  }
`
