import { Context } from '@/types/global'

import { User } from '.prisma/client'

type Args = {
  data: {
    email: string
    password: string
    first_name: string
    last_name: string
  }
}

export default async (parent: any, args: Args, ctx: Context, info: any) => {
  const createUser: User = await ctx.prisma.user.create({
    data: args.data,
  })

  return createUser
}
