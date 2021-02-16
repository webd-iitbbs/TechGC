import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";

class Leader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leaderboard: [
        {
          tech: "loading...",
          techAbs: "",
          cult: "loading...",
          cultAbs: "",
          sports: "loading...",
          sportsAbs: "",
          part: "loading...",
          total: "loading...",
          totalAbs: "",
          branch: "loading...",
        },
        {
          tech: "loading...",
          techAbs: "",
          cult: "loading...",
          cultAbs: "",
          sports: "loading...",
          sportsAbs: "",
          part: "loading...",
          total: "loading...",
          totalAbs: "",
          branch: "loading...",
        },
        {
          tech: "loading...",
          techAbs: "",
          cult: "loading...",
          cultAbs: "",
          sports: "loading...",
          sportsAbs: "",
          part: "loading...",
          total: "loading...",
          totalAbs: "",
          branch: "loading...",
        },
        {
          tech: "loading...",
          techAbs: "",
          cult: "loading...",
          cultAbs: "",
          sports: "loading...",
          sportsAbs: "",
          part: "loading...",
          total: "loading...",
          totalAbs: "",
          branch: "loading...",
        },
        {
          tech: "loading...",
          techAbs: "",
          cult: "loading...",
          cultAbs: "",
          sports: "loading...",
          sportsAbs: "",
          part: "loading...",
          total: "loading...",
          totalAbs: "",
          branch: "loading...",
        },
        {
          tech: "loading...",
          techAbs: "",
          cult: "loading...",
          cultAbs: "",
          sports: "loading...",
          sportsAbs: "",
          part: "loading...",
          total: "loading...",
          totalAbs: "",
          branch: "loading...",
        },
        {
          tech: "loading...",
          techAbs: "",
          cult: "loading...",
          cultAbs: "",
          sports: "loading...",
          sportsAbs: "",
          part: "loading...",
          total: "loading...",
          totalAbs: "",
          branch: "loading...",
        },
        {
          tech: "loading...",
          techAbs: "",
          cult: "loading...",
          cultAbs: "",
          sports: "loading...",
          sportsAbs: "",
          part: "loading...",
          total: "loading...",
          totalAbs: "",
          branch: "loading...",
        },
      ],
      //   techScores: {
      //     "Computer Science": 0,
      //     Electrical: 0,
      //     "Electronics & Communication Engineering": 0,
      //     Mechanical: 0,
      //     Civil: 0,
      //     Metallurgy: 0,
      //   },
      //   cultScores: {
      //     "Computer Science": 0,
      //     Electrical: 0,
      //     "Electronics & Communication Engineering": 0,
      //     Mechanical: 0,
      //     Civil: 0,
      //     Metallurgy: 0,
      //   },
    };
  }

  componentDidMount() {
    console.log("hi");
    axios
      .get("/leaderboard")
      .then((response) => {
        console.log("hi");
        let receivedData = response.data[0];
        let techAbsScores = [],
          cultAbsScores = [],
          sportsAbsScores = [],
          partAbsScores = [];
        for (let item of receivedData) {
          techAbsScores.push(parseInt(item.techAbs));
          cultAbsScores.push(parseInt(item.cultAbs));
          sportsAbsScores.push(parseInt(item.sportsAbs));
          partAbsScores.push(parseInt(item.part));
        }
        let techMax = Math.max(...techAbsScores),
          cultMax = Math.max(...cultAbsScores),
          sportsMax = Math.max(...sportsAbsScores),
          partMax = Math.max(...partAbsScores);
        console.log(techMax);
        let techNormalizedScores = techAbsScores.map((value) => {
          return Math.ceil((value / techMax) * 100);
        });
        let cultNormalizedScores = cultAbsScores.map((value) => {
          return Math.ceil((value / cultMax) * 100);
        });
        let sportsNormalizedScores = sportsAbsScores.map((value) => {
          return Math.ceil((value / sportsMax) * 100);
        });
        let partNormalizedScores = partAbsScores.map((value) => {
          return Math.ceil((value / partMax) * 100);
        });
        for (let i in receivedData) {
          receivedData[i].tech = techNormalizedScores[i];
          receivedData[i].cult = cultNormalizedScores[i];
          receivedData[i].sports = sportsNormalizedScores[i];
          receivedData[i].part = partNormalizedScores[i];
          receivedData[i].total =
            techNormalizedScores[i] +
            cultNormalizedScores[i] +
            sportsNormalizedScores[i] +
            partNormalizedScores[i];
        }
        receivedData.sort((a, b) => {
          return b.total - a.total;
        });
        this.setState({ leaderboard: receivedData });
        console.log(this.state.leaderboard);
        // var originalScore = response.data[1];
        // var techscore = {
        //   "Computer Science": 0,
        //   Electrical: 0,
        //   "Electronics & Communication Engineering": 0,
        //   Mechanical: 0,
        //   Civil: 0,
        //   Metallurgy: 0,
        // };
        // var cultscore = {
        //   "Computer Science": 0,
        //   Electrical: 0,
        //   "Electronics & Communication Engineering": 0,
        //   Mechanical: 0,
        //   Civil: 0,
        //   Metallurgy: 0,
        // };

        // originalScore.forEach(function (obj) {
        //   if (obj.council == "tech") {
        //     techscore["Computer Science"] += obj.csscore;
        //     techscore.Electrical += obj.eescore;
        //     techscore["Electronics & Communication Engineering"] += obj.ecscore;
        //     techscore.Mechanical += obj.mescore;
        //     techscore.Civil += obj.cescore;
        //     techscore.Metallurgy += obj.mmscore;
        //   }
        //   if (obj.council == "cult") {
        //     cultscore["Computer Science"] += obj.csscore;
        //     cultscore.Electrical += obj.eescore;
        //     cultscore["Electronics & Communication Engineering"] += obj.ecscore;
        //     cultscore.Mechanical += obj.mescore;
        //     cultscore.Civil += obj.cescore;
        //     cultscore.Metallurgy += obj.mmscore;
        //   }
        // });

        // this.setState({ techScores: techscore });
        // this.setState({ cultScores: cultscore });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="x" id="bodyBg">
        <br />
        <br />
        <br />
        <div className="container">
          <Table striped hover borderless className="table">
            <thead>
              <tr>
                <th>Branch</th>
                <th className="hidden">Technical</th>
                <th className="hidden">Cultural</th>
                <th className="hidden">Sports & Games</th>
                <th className="hidden">Participants</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.state.leaderboard[0].branch} </td>
                <td className="hidden">
                  {this.state.leaderboard[0].tech} (
                  {this.state.leaderboard[0].techAbs})
                </td>
                <td className="hidden">
                  {this.state.leaderboard[0].cult} (
                  {this.state.leaderboard[0].cultAbs})
                </td>
                <td className="hidden">
                  {this.state.leaderboard[0].sports} (
                  {this.state.leaderboard[0].sportsAbs})
                </td>
                <td className="hidden">{this.state.leaderboard[0].part} </td>
                <td>{this.state.leaderboard[0].total} </td>
              </tr>

              <tr>
                <td>{this.state.leaderboard[1].branch} </td>
                <td className="hidden">
                  {this.state.leaderboard[1].tech} (
                  {this.state.leaderboard[1].techAbs})
                </td>
                <td className="hidden">
                  {this.state.leaderboard[1].cult} (
                  {this.state.leaderboard[1].cultAbs})
                </td>
                <td className="hidden">
                  {this.state.leaderboard[1].sports} (
                  {this.state.leaderboard[1].sportsAbs})
                </td>
                <td className="hidden">{this.state.leaderboard[1].part} </td>
                <td>{this.state.leaderboard[1].total} </td>
              </tr>

              <tr>
                <td>{this.state.leaderboard[2].branch} </td>
                <td className="hidden">
                  {this.state.leaderboard[2].tech} (
                  {this.state.leaderboard[2].techAbs})
                </td>
                <td className="hidden">
                  {this.state.leaderboard[2].cult} (
                  {this.state.leaderboard[2].cultAbs})
                </td>
                <td className="hidden">
                  {this.state.leaderboard[2].sports} (
                  {this.state.leaderboard[2].sportsAbs})
                </td>
                <td className="hidden">{this.state.leaderboard[2].part} </td>
                <td>{this.state.leaderboard[2].total} </td>
              </tr>

              <tr>
                <td>{this.state.leaderboard[3].branch} </td>
                <td className="hidden">
                  {this.state.leaderboard[3].tech} (
                  {this.state.leaderboard[3].techAbs})
                </td>
                <td className="hidden">
                  {this.state.leaderboard[3].cult} (
                  {this.state.leaderboard[3].cultAbs})
                </td>
                <td className="hidden">
                  {this.state.leaderboard[3].sports}(
                  {this.state.leaderboard[3].sportsAbs})
                </td>
                <td className="hidden">{this.state.leaderboard[3].part} </td>
                <td>{this.state.leaderboard[3].total} </td>
              </tr>

              <tr>
                <td>{this.state.leaderboard[4].branch} </td>
                <td className="hidden">
                  {this.state.leaderboard[4].tech} (
                  {this.state.leaderboard[4].techAbs})
                </td>
                <td className="hidden">
                  {this.state.leaderboard[4].cult} (
                  {this.state.leaderboard[4].cultAbs})
                </td>
                <td className="hidden">
                  {this.state.leaderboard[4].sports}(
                  {this.state.leaderboard[4].sportsAbs})
                </td>
                <td className="hidden">{this.state.leaderboard[4].part} </td>
                <td>{this.state.leaderboard[4].total} </td>
              </tr>

              <tr>
                <td>{this.state.leaderboard[5].branch} </td>
                <td className="hidden">
                  {this.state.leaderboard[5].tech} (
                  {this.state.leaderboard[5].techAbs})
                </td>
                <td className="hidden">
                  {this.state.leaderboard[5].cult} (
                  {this.state.leaderboard[5].cultAbs})
                </td>
                <td className="hidden">
                  {this.state.leaderboard[5].sports}(
                  {this.state.leaderboard[5].sportsAbs})
                </td>
                <td className="hidden">{this.state.leaderboard[5].part} </td>
                <td>{this.state.leaderboard[5].total} </td>
              </tr>
              <tr>
                <td>{this.state.leaderboard[6].branch} </td>
                <td className="hidden">
                  {this.state.leaderboard[6].tech} (
                  {this.state.leaderboard[6].techAbs})
                </td>
                <td className="hidden">
                  {this.state.leaderboard[6].cult} (
                  {this.state.leaderboard[6].cultAbs})
                </td>
                <td className="hidden">
                  {this.state.leaderboard[6].sports}(
                  {this.state.leaderboard[6].sportsAbs})
                </td>
                <td className="hidden">{this.state.leaderboard[6].part} </td>
                <td>{this.state.leaderboard[6].total} </td>
              </tr>
              <tr>
                <td>{this.state.leaderboard[7].branch} </td>
                <td className="hidden">
                  {this.state.leaderboard[7].tech} (
                  {this.state.leaderboard[7].techAbs})
                </td>
                <td className="hidden">
                  {this.state.leaderboard[7].cult} (
                  {this.state.leaderboard[7].cultAbs})
                </td>
                <td className="hidden">
                  {this.state.leaderboard[7].sports}(
                  {this.state.leaderboard[7].sportsAbs})
                </td>
                <td className="hidden">{this.state.leaderboard[7].part} </td>
                <td>{this.state.leaderboard[7].total} </td>
              </tr>
            </tbody>
          </Table>
          <div className="note">
            **Tilt your device to Landscape Mode to see full table
          </div>
        </div>
      </div>
    );
  }
}

export default Leader;
