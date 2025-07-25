const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Get Routes
const aiRoutes = require('./routes/ai');
const buildRoutes = require('./routes/build');

// Set up Express and CORS
const app = express();

app.use(cors());
app.use(express.json());

//Set up Database Connection


//Use Routes
app.use('/api/ai', aiRoutes);
app.use('/api/build', buildRoutes);


// Start server
const PORT = process.env.PORT || 30581;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));