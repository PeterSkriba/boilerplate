import gql from 'graphql-tag'

export default gql`
  query getUser($email: String!) {
    user: getUser(email: $email) {
      id
      email
      first_name
      last_name
    }
  }
`
