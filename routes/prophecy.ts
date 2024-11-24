import express, { Router, Request, Response, NextFunction } from "express";
import { Prophecy, Prophet } from "../models";
import pug from "pug"; // Ensure pug is installed and imported if used for rendering
import { Next } from "mysql2/typings/mysql/lib/parsers/typeCast";

const router = Router();

// Create a new prophecy
router.post("/create", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { title, description } = req.body;
    const prophecy = await Prophecy.create({ title, description });
    res.status(201).send(`Create successful! ID: ${prophecy.id}`);
    
  } catch (error) {
    console.error("Error creating prophecy: ", error);
    res.status(500).send("Error creating prophecy");
  }
});



// list (read) API
router.get("/list", async (req: Request, res: Response, next: NextFunction) => {
  const prophecies = await Prophecy.findAll();
  const html = pug.renderFile("./templates/list.pug", { prophecies });
  res.send(html)
});

router.get("/list-query", async (req: Request, res: Response, next: NextFunction) => {
  const prophecies = await Prophecy.findAll({
    attributes: [
      "id",
      ["title", "label"],
    ],
  });
  const html = pug.renderFile("./templates/list.pug", { prophecies });
  res.send(html)
});

// detail (read) API
router.get("/:prophecy_id/detail", async (req: Request, res: Response, next: NextFunction) => {
  const id: number = parseInt(req.params.prophecy_id);
  // const prophecy = await Prophecy.findByPk(id);
  const prophecy = await Prophecy.findByPk(id, {
		include: [Prophet],
	});
  res.send(prophecy); 
});

// update API
router.post("/:prophecy_id/update", express.json(), async (req: Request, res: Response, next: NextFunction) => {
  const id: number = parseInt(req.params.prophecy_id);
  const prophecy = await Prophecy.findByPk(id);
  await prophecy?.update({
    title: req.body.title as string,
    description: req.body.description as string,
  });

  res.send(prophecy);
});

// delete API
router.delete("/:prophecy_id/delete", async (req: Request, res: Response, next: NextFunction) => {
  const id: number = parseInt(req.params.prophecy_id);
  const prophecy = await Prophecy.findByPk(id);
  await prophecy?.destroy();
  res.send(`delete successful ID: ${id}`);
});



export default router;
