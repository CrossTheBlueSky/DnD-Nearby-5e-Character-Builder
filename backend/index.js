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

const database = client.db('builder')
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
  async function getAllClasses() {
    const classes = database.collection('classes');
    const allClasses = await classes.find().toArray();
    return allClasses;
  }
  
  getAllClasses()
    .then(classes => {
      const classlist = []
      classes.forEach(c => {
      classlist.push(c.class[0])
    })
    res.send(classlist)
  })
    .catch(err => console.error('Error fetching classes from MongoDB', err));
})

app.get('/races', (req, res) => {
  async function getAllRaces(){
    const races = database.collection('races')
    const allRaces = await races.find().toArray()
    return allRaces
  }

  getAllRaces()
  .then(races =>{
    const raceList = []
    races.forEach(r => {
      raceList.push(r.race)
  })
  res.send(raceList)
})})

app.get('/backgrounds', (req, res) => {
  async function getAllBackgrounds(){
    const backgrounds = database.collection('backgrounds')
    const allBackgrounds = await backgrounds.find().toArray()
    return allBackgrounds
  }

  getAllBackgrounds()
  .then(backgrounds =>{
    const backgroundList = []
    backgrounds.forEach(b => {
      backgroundList.push(b.background)
  })
  res.send(backgroundList)
})})

app.get('/skills', (req, res) => {
  async function getAllSkills(){
    const skills = database.collection('skills')
    const allSkills = await skills.find().toArray()
    return allSkills
  }

  getAllSkills()
  .then(skills =>{
    const skillList = []
    skills.forEach(s => {
      skillList.push(s.skill)
  })
  res.send(skillList)
})})

app.get('/feats', (req, res) => {
  async function getAllFeats(){
    const feats = database.collection('feats')
    const allFeats = await feats.find().toArray()
    return allFeats
  }

  getAllFeats()
  .then(feats =>{
    const featList = []
    res.send(feats)
})})

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));


