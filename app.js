const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const leaderboard = require('./routers/leaderboard');
const cors = require('cors');

const app = express();
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(cors());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(leaderboard);

const PORT = process.env.PORT || 3001;
app.listen(PORT, console.log(`Server running in port ${PORT}`));
