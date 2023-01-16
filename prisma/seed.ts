import { db as prisma } from "../src/kernel/db";
import { hash } from "argon2";
import { faker } from "@faker-js/faker";

async function main() {
  await Promise.all([
    prisma.postTag.deleteMany(),
    prisma.tag.deleteMany(),
    prisma.post.deleteMany(),
    prisma.user.deleteMany(),
  ]);
  const usersData = [
    {
      username: "amdin",
    },
    {
      username: "test",
    },
  ];
  const password = await hash("1234");
  const users = await prisma.user
    .createMany({
      data: usersData.map((item) => ({
        username: item.username,
        password,
      })),
    })
    .then(() => prisma.user.findMany());

  const userIds = users.map((user) => user.id);
  for (let i = 0; i < userIds.length; i++) {
    const userId = userIds[i]!;
    async function setSeeds() {
      await prisma.profile.create({
        data: {
          nickname: faker.internet.userName(),
          avatar: faker.internet.avatar(),
          userId: userId,
        },
      });
      const posts = await prisma.post
        .createMany({
          data: Array.from({ length: 10 }).map(() => ({
            title: faker.lorem.sentence(),
            content: faker.lorem.paragraphs(),
            authorId: userId,
          })),
        })
        .then(() =>
          prisma.post.findMany({
            where: { authorId: userId },
          })
        );
      const tags = await prisma.tag
        .createMany({
          data: Array.from({ length: 10 }).map(() => ({
            name: faker.lorem.word(),
            userId: userId,
          })),
        })
        .then(() =>
          prisma.tag.findMany({
            where: { userId: userId },
          })
        );
      await prisma.postTag.createMany({
        data: Array.from({ length: 10 }).map((_, index) => ({
          postId: posts[index]!.id,
          tagId: tags[index]!.id,
        })),
      });
    }
    await setSeeds();
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
