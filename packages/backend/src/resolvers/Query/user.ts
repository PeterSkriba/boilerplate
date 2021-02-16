export default async (parent: any, args: any, ctx: any, info: any) => {
  const user = await ctx.prisma.user.findUnique({
    where: {
      email: args?.email,
    },
  })

  return user
}
