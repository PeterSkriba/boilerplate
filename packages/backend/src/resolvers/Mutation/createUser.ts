export default async (parent: any, args: any, ctx: any, info: any) => {
  const createUser = await ctx.prisma.user.create({
    data: args.data,
  })

  return createUser
}
