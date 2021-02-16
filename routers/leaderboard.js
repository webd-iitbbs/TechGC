const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

const { gsrun } = require("../read");
const { gClient } = require("../read");

router.use(bodyParser.json());

router.get("/leaderboard", async (req, res) => {
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

module.exports = router;
