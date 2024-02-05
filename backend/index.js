const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
const client = new MongoClient('mongodb://172.28.0.1:27017/builder')

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
main().catch(err => console.log(err));

async function main() {
  await client.connect()
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

  // Basic Querying logic
  // const database = client.db('builder');
  // const classes = database.collection('classes');
  // const warlock = await classes.findOne({"class.name" : "Warlock"})
  // console.log(warlock);}
}


// Define a test route
app.get('/', (req, res) => {
  res.send('Hello World from Backend!');
})

app.get('/characters', (req, res) => {
  res.send('Characters');
})

app.post('/characters', (req, res) => {
  console.log(req.body);
  res.send('Characters');
})

app.patch('/characters', (req, res) => {
  console.log(req.body);
  res.send('Characters');
})

app.delete('/characters/', (req, res) => {
  console.log(req.body);
  res.send('Characters');
})

app.get('/classes', (req, res) => {
  res.send('Classes');
})

app.get('/races', (req, res) => {
  res.send('Races')
})


app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));


