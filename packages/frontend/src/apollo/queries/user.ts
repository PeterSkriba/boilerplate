import gql from 'graphql-tag'

export default gql`
  query user($email: String!) {
    user(email: $email) {
      id
      email
      first_name
      last_name
      createdAt
    }
  }
`
