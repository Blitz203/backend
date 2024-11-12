import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getAllMenuItems(
  req: Request,
  res: Response
): Promise<void | any> {
  try {
    const menuItems = await prisma.menu_item.findMany({
      where: { is_active: true },
    });
    res.json(menuItems);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}

export default getAllMenuItems;
