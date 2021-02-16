import gql from 'graphql-tag'

export default gql`
  mutation createUser($data: CreateUserData!) {
    createUser(data: $data) {
      id
      email
      first_name
      last_name
      createdAt
    }
  }
`
