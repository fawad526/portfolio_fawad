import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

async function getUserData(userName: string) {
  // get user data from database
  const user = await prisma.user.findUnique({
    where: {
      userName: userName,
    },
  });
  return user;
}

async function getUserRepos(authorId: number) {
  // get user repos from database
  const repos = await prisma.repository.findMany({
    where: {
      authorId: authorId,
    },
  });
  return repos;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await prisma.$connect();
  const user_name = req.query.user_name as string;
  // get user data from database
  try {
    const user = await getUserData(user_name);
    if (user) {
      // get user repos from database
      const repos = await getUserRepos(user.id);
      res.status(200).json({ user, repos });
    } else {
      throw new Error("User not found");
    }
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }

  await prisma.$disconnect();
}
