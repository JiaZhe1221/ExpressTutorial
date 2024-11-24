import express from "express";
import { json } from "express";
import router from "./routes/prophecy";
import Person from './models/Person'; 
import Road from './models/Road'; 
import PersonHasRoad from './models/PersonHasRoad'; 

const app = express();
const PORT = 8181;

app.use(json());
app.use("/api/prophecy", router);


Person.belongsToMany(Road, {
  through: PersonHasRoad, 
  foreignKey: 'person_id', 
  otherKey: 'road_id', 
});

Road.belongsToMany(Person, {
  through: PersonHasRoad, 
  foreignKey: 'road_id',  
  otherKey: 'person_id',  
});

// person
app.get('/person', async (req, res) => {
  try {
    const persons = await Person.findAll({
      include: {
        model: Road,
        through: { attributes: [] }, 
      },
    });
    res.json(persons);
  } catch (error) {
    console.error('Error fetching persons:', error);
    res.status(500).send('Error fetching persons');
  }
});

// road
app.get('/road', async (req, res) => {
  try {
    const roads = await Road.findAll({
      include: {
        model: Person,
        through: { attributes: [] }, 
      },
    });
    res.json(roads);
  } catch (error) {
    console.error('Error fetching roads:', error);
    res.status(500).send('Error fetching roads');
  }
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export {};
