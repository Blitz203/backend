import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { idSchema } from "../../zodSchemas/schemas";

const prisma = new PrismaClient();

export async function getMenuItem(
  req: Request,
  res: Response
): Promise<void | any> {
  const { id: name } = req.params;

  const validatedId = idSchema.safeParse(name);
  if (!validatedId.success) {
    return res
      .status(400)
      .json({ message: validatedId.error.flatten().formErrors });
  }

  try {
    const menuItems = await prisma.menu_item.findUnique({
      where: { id: validatedId.data },
    }); 
    res.json(menuItems);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}

export default getMenuItem;
