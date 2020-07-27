//bring express library
const express = require("express");
const app = express();
// connect to database
const db = require('./database/database')


const PORT = process.env.PORT || 8000;




app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}/`);
  });