const { GraphQLServer } = require('graphql-yoga')
const { PrismaClient } = require('@prisma/client')
const { makeExecutableSchema } = require('@graphql-tools/schema')
const { importSchema } = require('graphql-import')

import { Query, Mutation, Subscription } from '@/resolvers'

const schema = makeExecutableSchema({
  typeDefs: importSchema('src/graphql/schema.graphql'),
  resolvers: {
    Query,
    Mutation,
    Subscription,
  },
})

const prisma = new PrismaClient()

const server = new GraphQLServer({
  schema,
  context: (req: any) => ({
    req,
    prisma,
  }),
})

const options = {
  playground: process.env.NODE_ENV === 'production' ? false : '/',
  cors: {
    credentials: true,
    origin:
      process.env.NODE_ENV === 'production'
        ? process.env.FRONTEND_URL
        : process.env.FRONTEND_LOCALHOST,
  },
}

server.start(options, ({ port }: { port: number }) =>
  console.log(`🚀 GraphQL server is running on port ${port}.`)
)
