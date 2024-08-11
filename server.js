const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Ejemplo de modelo de datos
const exampleSchema = new mongoose.Schema({
  name: String,
  value: Number,
});

const Example = mongoose.model('Example', exampleSchema);

// Rutas
app.get('/', (req, res) => {
  res.send('API is running');
});

// Ruta para obtener todos los documentos
app.get('/data', async (req, res) => {
  try {
    const data = await Example.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data' });
  }
});

// Ruta para agregar un nuevo documento
app.post('/data', async (req, res) => {
  const { name, value } = req.body;

  const newData = new Example({ name, value });

  try {
    await newData.save();
    res.json(newData);
  } catch (error) {
    res.status(500).json({ error: 'Error saving data' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
