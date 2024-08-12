const express = require('express');
const Database = require('better-sqlite3');
const path = require('path');

const app = express();
const port = 3000;

// Connect to the database
const db = new Database(path.join(__dirname, 'nearby.db'), { readonly: true });

// Set a permissive CSP for testing
app.use((req, res, next) => {
  res.setHeader(
    'Content-Security-Policy',
    "default-src * 'unsafe-inline' 'unsafe-eval'; script-src * 'unsafe-inline' 'unsafe-eval'; connect-src * 'unsafe-inline'; img-src * data: blob: 'unsafe-inline'; frame-src *; style-src * 'unsafe-inline';"
  );
  next();
});

// Enable CORS for all routes
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Serve static files from a 'public' directory
app.use(express.static('public'));

// API endpoint to get all backgrounds
app.get('/api/backgrounds', (req, res) => {
  const backgrounds = db.prepare('SELECT * FROM backgrounds').all();
  res.json(backgrounds);
});

// API endpoint to get a specific background with its skill proficiencies
app.get('/api/backgrounds/:name', (req, res) => {
  const background = db.prepare('SELECT * FROM backgrounds WHERE name = ?').get(req.params.name);
  
  if (background) {
    const skillProficiencies = db.prepare('SELECT skill FROM skill_proficiencies WHERE background_id = ?').all(background.id);
    background.skillProficiencies = skillProficiencies.map(sp => sp.skill);
    res.json(background);
  } else {
    res.status(404).json({ error: 'Background not found' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});