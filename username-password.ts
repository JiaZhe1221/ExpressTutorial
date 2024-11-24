import express, { Request, Response, NextFunction } from "express";

const router = express.Router();

// Middleware to parse JSON request bodies
router.use(express.json());  // Optionally, you can use this globally for all routes

// POST request handler
router.post("/path", (req: Request, res: Response, next: NextFunction) => {
  // req.body should now contain the parsed JSON data
  const { username, password }: { username: string; password: string } = req.body;

  // You can now use username and password
  console.log(`Username: ${username}, Password: ${password}`);

  // Respond with a success message
  res.status(200).json({ message: "Data received successfully!" });
});

export default router;
