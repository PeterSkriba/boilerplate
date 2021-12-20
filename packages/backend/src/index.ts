import { ApolloServer } from 'apollo-server'
import { PrismaClient } from '@prisma/client'

import { makeExecutableSchema } from '@graphql-tools/schema'
import { importSchema } from 'graphql-import'

import { Query, Mutation, Subscription } from '@/resolvers'

const {
  NODE_ENV,
  FRONTEND_URL = '',
  FRONTEND_LOCALHOST = '',
  PLAYGROUND_URL = '',
} = process.env

const origin = NODE_ENV === 'production' ? FRONTEND_URL : FRONTEND_LOCALHOST

const schema = makeExecutableSchema({
  typeDefs: importSchema('src/graphql/schema.graphql'),
  resolvers: {
    Query,
    Mutation,
    Subscription,
  },
})

const prisma = new PrismaClient()

const server = new ApolloServer({
  schema,
  cors: {
    credentials: true,
    origin: [PLAYGROUND_URL, origin],
  },
  context: ({ req }) => ({
    ...req,
    prisma,
  }),
})

server.listen().then(({ url }) => console.log(`🚀 Server listening at ${url}`))
