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
  // const allClasses = await classes.find().toArray()
  // console.log(allClasses)
}

// All databases are variabilized here
const database = client.db('builder')
const classes = database.collection('classes')
const races = database.collection('races')
const backgrounds = database.collection('backgrounds')
const spells = database.collection('spells')
const feats = database.collection('feats')
const optionalFeatures = database.collection('optional-features')
const characters = database.collection('characters')
const senses = database.collection('senses')
const skills = database.collection('skills')
const variantRules = database.collection('variant-rules')
const items = database.collection('items')

// Define a test route
app.get('/', (req, res) => {
  console.log("root get attempted")
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

app.get('/classes/', (req, res) => {
  console.log("class get attempted")
  async function getAllClasses() {
    const classes = database.collection('classes');
    const allClasses = await classes.find().toArray();
    return allClasses;
  }
  
  getAllClasses()
    .then(classes => {
      const classlist = []
      classes.forEach(c => {
        console.log(c.class[0])
      classlist.push(c.class[0])
    })
    res.send(classlist)
  })
    .catch(err => console.error('Error fetching classes from MongoDB', err));
})

app.get('/races', (req, res) => {
  res.send('Races')
})


app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));


