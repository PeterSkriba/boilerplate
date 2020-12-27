const { GraphQLServer } = require('graphql-yoga')
const { PrismaClient } = require('@prisma/client')
const { makeExecutableSchema } = require('@graphql-tools/schema')
const { importSchema } = require('graphql-import')

import { Query, Mutation, Subscription } from '@/resolvers'

const schema = makeExecutableSchema({
  typeDefs: importSchema('src/graphql/schema.graphql'),
  resolvers: {
    Query,
    // Mutation,
    // Subscription
  },
})

const server = new GraphQLServer({
  schema,
  context: {
    prisma: new PrismaClient(),
  },
})

const options = {
  port: process.env.SERVER_PORT,
  playground: process.env.NODE_ENV === 'production' ? false : '/',
  cors: {
    credentials: true,
    origin:
      process.env.NODE_ENV === 'production'
        ? process.env.FRONTEND_URL
        : process.env.FRONTEND_LOCALHOST,
  },
}

server.start(options, () =>
  console.log(`GraphQL server is running on port ${process.env.SERVER_PORT}`)
)
