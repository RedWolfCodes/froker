const express = require('express');
const app = express();
const routes = require('./routes/routes');
const dbConnect = require('./db');
const cors = require("cors")

require('dotenv').config();

const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
        origin: "*",
        credentials: true,
    })
)
// Connect to the database
dbConnect();

// Routes
app.use('/api/v1', routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
