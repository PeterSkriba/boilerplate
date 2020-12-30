import ApolloClient from 'apollo-boost'
import { InMemoryCache } from 'apollo-cache-inmemory'

import { AUTH_TOKEN } from 'constants/global'

const client = new ApolloClient({
  uri:
    process.env.NODE_ENV === 'production'
      ? process.env.API_URL
      : process.env.GRAPHQL_ENDPOINT,

  cache: new InMemoryCache(),

  request: (operation) => {
    const token = localStorage.getItem(AUTH_TOKEN)

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    })
  },
})

export default client
