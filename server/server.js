const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 5000;

// Define a route
app.get('/api/hello', (req, res) => {
  res.send('Hello from the backend!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// connect to the db
const dbURI = 'mongodb+srv://yasith:Q4EMtZzs2RGFcfIb@t4me.op3cnnn.mongodb.net/'; // Replace with your MongoDB connection URI

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to the database');
    // Add your server startup code here
  })
  .catch((err) => {
    console.error('Error connecting to the database', err);
  });



