import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const jatek1 = await prisma.jatek.create({
    data: {
      megnevezes: 'monopoly',
      anyag: 'wood',
      suly: 33,
    },
  })

  const jatek2 = await prisma.jatek.create({
    data: {
      megnevezes: 'roulette',
      anyag: 'plastic',
      suly: 2,
    },
  })

  const gyerek1 = await prisma.gyerek.create({
    data: {
      nev: 'Molnár Bence',
      cim: 'Budapest Zsókavár utca 6',
      milyen: true,
    },
  })

  const gyerek2 = await prisma.gyerek.create({
    data: {
      nev: 'Kis Ferenc',
      cim: 'Debrecen',
      milyen: false,
    },
  })

  await prisma.kot.create({
    data: {
      gyerekId: gyerek1.id,
      jatekId: jatek1.id,
    },
  })

  await prisma.kot.create({
    data: {
      gyerekId: gyerek1.id,
      jatekId: jatek2.id,
    },
  })

  await prisma.kot.create({
    data: {
      gyerekId: gyerek2.id,
      jatekId: jatek1.id,
    },
  })

  console.log('Seeding completed.')
}

main()
  .catch((e) => {
    console.error(e)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })