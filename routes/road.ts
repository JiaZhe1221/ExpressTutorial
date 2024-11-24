import { Router, Request, Response } from 'express';
import Road from '../models/Road';  // Import the Road model

const router = Router();

// Example route to get all roads
router.get('/', async (req: Request, res: Response) => {
  try {
    const roads = await Road.findAll(); // Fetch all roads
    res.json(roads); // Respond with the list of roads
  } catch (error) {
    console.error('Error fetching roads:', error);
    res.status(500).send('Error fetching roads');
  }
});

export default router;
