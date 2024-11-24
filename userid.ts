import express from 'express';

const app = express();

// Route with route parameter 'userID'
app.get('/users/:userID', (req, res) => {
  // Accessing the userID parameter from the URL
  const userID = req.params.userID;

  // Sending a response with the captured userID
  res.send(`User ID: ${userID}`);
});

const PORT = 8181;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
