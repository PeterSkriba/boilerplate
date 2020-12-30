const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const main = async () => {
  console.log('Seeding started...')

  const user = await prisma.user.create({
    data: {
      email: 'johndoe@example.app',
      password: 'pass',
      first_name: 'John',
      last_name: 'Doe',
    },
  })

  console.log('Created user:', user)
}

main()
  .catch((e) => console.error('Error:', e))
  .finally(async () => {
    console.log('Done.')
    await prisma.$disconnect()
  })
