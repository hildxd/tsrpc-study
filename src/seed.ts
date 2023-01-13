import * as argon2 from "argon2";
import db from "./kernel/db";
import { getUserId } from "./utils/nanoid";

const postsData = [...Array(50)].map((_, i) => ({
  title: `文章 ${i}`,
  content: `内容 ${i}`,
}));

const userData = [
  {
    username: "admin",
    roles: ["admin"],
  },
  {
    username: "lixudong",
    roles: ["user"],
  },
  ...Array(30)
    .fill(null)
    .map((_, i) => ({
      username: `user${i}`,
      roles: ["user"],
    })),
];

const tagData = [
  {
    name: "JS",
  },
  { name: "HTML" },
  { name: "CSS" },
  { name: "Vue" },
  { name: "React" },
  { name: "Angular" },
];

async function main() {
  await Promise.all([
    db.post.deleteMany(),
    db.user.deleteMany(),
    db.tag.deleteMany(),
    db.post_Tag.deleteMany(),
  ]);

  const hash = await argon2.hash("123");

  const users = await db.user
    .createMany({
      data: userData.map((u) => {
        let userId = getUserId();
        return {
          password: hash,
          uid: userId,
          username: u.username,
          nickName: `用户${userId}`,
          roles: u.roles,
        };
      }),
      skipDuplicates: true,
    })
    .then(() => db.user.findMany());

  const tags = await db.tag
    .createMany({
      data: tagData.map((tag) => ({
        name: tag.name,
        userId: users[0].uid,
      })),
    })
    .then(() => db.tag.findMany());
  postsData.forEach(async (post) => {
    const date = new Date();
    date.setDate(date.getDate() - Math.floor(Math.random() * 100));
    await db.post.create({
      data: {
        ...post,
        authorId: users[0].uid,
        tags: {
          createMany: {
            data: tags
              .flatMap((item) => (Math.random() > 0.5 ? [item] : []))
              .map((tag) => ({
                tagId: tag.id,
              })),
          },
        },
      },
    });
  });
}

main()
  .catch(console.error)
  .finally(async () => {
    await db.$disconnect();
  });
