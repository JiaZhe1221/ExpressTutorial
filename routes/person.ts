import { Router, Request, Response } from 'express';
import Person from '../models/Person';  // Import the Person model

const router = Router();

// Example route to get all persons
router.get('/', async (req: Request, res: Response) => {
  try {
    const persons = await Person.findAll(); // Fetch all persons
    res.json(persons); // Respond with the list of persons
  } catch (error) {
    console.error('Error fetching persons:', error);
    res.status(500).send('Error fetching persons');
  }
});

export default router;
