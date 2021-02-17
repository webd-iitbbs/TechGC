const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
//const leaderboard = require('./routers/leaderboard');
const cors = require('cors');

const bodyParser = require("body-parser");
const { gsrun } = require("./read");
const { gClient } = require("./read");





const app = express();
/*app.use(
  express.urlencoded({
    extended: false,
  })
);*/



app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(cors());






app.use(bodyParser.json());





if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}



//app.use(leaderboard);

app.get("/leaderboard", async (req, res) => {
	console.log("Hello");
  gsrun(gClient).then((data) => {
    console.log(data);
    let branchNames = ["CS", "ECE + MM", "EE", "ME", "CE", "PHD", "M1", "M2"];
    let finalData = [];

    for (let i in data) {
      let tempObj = {
        branch: branchNames[i],
        sportsAbs: data[i][0],
        sports: 0,
        techAbs: data[i][1],
        tech: 0,
        cultAbs: data[i][2],
        cult: 0,
        part: data[i][3],
        totalAbs: data[i][4],
        total: 0,
      };
      finalData.push(tempObj);
    }

    console.log(finalData);
    res.json([finalData]);
  }).catch((err) => {
      console.error(err);
  })
});



app.use(express.static("client/build"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, console.log(`Server running in port ${PORT}`));
