import * as dotenv from 'dotenv';
dotenv.config();
import * as express from 'express';
import * as cors from 'cors';
import * as mongoose from 'mongoose';




const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
console.log(process.env.MONGODB_URI);
mongoose.connect(process.env.MONGODB_URI as string)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

app.get('/', (req, res) => {
  res.send('D&D Character Creator API');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});