import express, { Request, Response } from "express";
import { menu_item, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getMenu(req: Request, res: Response): Promise<void> {
  try {
    const menu = await prisma.menu_item_types.findMany({
      select: {
        name: true,
        menu_item: {
          select: {
            name: true,
            description: true,
            price_in_oere: true,
          },
        },
      },
    });

    res.json(menu);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}

export default getMenu;
