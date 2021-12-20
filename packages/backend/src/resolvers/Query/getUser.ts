import { Context } from '@/types/global'

import { User } from '.prisma/client'

type Args = {
  email: string
}

export default async (parent: any, args: Args, ctx: Context, info: any) => {
  const user: User | null = await ctx.prisma.user.findUnique({
    where: {
      email: args?.email,
    },
  })

  return user
}
