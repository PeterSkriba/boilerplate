export default async (parent: any, args: any, ctx: any) => {
  return ctx.prisma.user.users()
}
