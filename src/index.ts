import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// insert
async function insertUser(
  username: string,
  password: string,
  firstName: string,
  lastName: string
) {
  const res = await prisma.user.create({
    data: {
      username,
      password,
      firstName,
      lastName,
    },
    select: {
      id: true,
      username: true,
    },
  });
  console.log(res);
}

// update

interface UpdateParams {
  firstName: string;
  lastName: string;
}

async function updateUser(
  username: string,
  { firstName, lastName }: UpdateParams
) {
  const res = await prisma.user.update({
    where: { username },
    data: {
      firstName,
      lastName,
    },
  });
  console.log(res);
}

updateUser("admin1", {
  firstName: "new name",
  lastName: "singh",
});
