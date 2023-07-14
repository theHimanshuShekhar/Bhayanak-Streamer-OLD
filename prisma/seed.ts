import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const room = await prisma.room.upsert({
    where: {
      id: "TestRoomID",
      name: "BhayanakTestRoom",
      description: "TestDescription",
      streamer: "199167307241488384",
      thumbNail:
        "https://www.themoviedb.org/t/p/w235_and_h235_face/a7LjjoGOhUXXXLsVZlSjjAx8BoW.jpg",
    },
    update: {},
    create: {
      id: "TestRoomID",
      name: "BhayanakTestRoom",
      streamer: "199167307241488384",
    },
  });

  console.log({ room });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit();
  });
