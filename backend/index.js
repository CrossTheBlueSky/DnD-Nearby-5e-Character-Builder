const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://172.28.0.1:27017/builder', {family: 4})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));}

// Define a test route
app.get('/', (req, res) => {
  res.send('Hello World from Backend!');
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
