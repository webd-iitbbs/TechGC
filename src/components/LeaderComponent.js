import React,{Component} from 'react';
import Table from 'react-bootstrap/Table'
import axios from 'axios';

class Leader extends Component{
    constructor(props) {
        super(props);
        this.state = {leaderboard: [{tech: 'loading...', cult: 'loading...', sports: 'loading...', part: 'loading...', total: 'loading...', branch : 'loading...'}
            ,{tech: 'loading...', cult: 'loading...', sports: 'loading...', part: 'loading...', total: 'loading...', branch : 'loading...'}
            ,{tech: 'loading...', cult: 'loading...', sports: 'loading...', part: 'loading...', total: 'loading...', branch : 'loading...'}
            ,{tech: 'loading...', cult: 'loading...', sports: 'loading...', part: 'loading...', total: 'loading...', branch : 'loading...'}
            ,{tech: 'loading...', cult: 'loading...', sports: 'loading...', part: 'loading...', total: 'loading...', branch : 'loading...'}
            ,{tech: 'loading...', cult: 'loading...', sports: 'loading...', part: 'loading...', total: 'loading...', branch : 'loading...'}
        ]};
    }

    componentDidMount() {
        console.log('hi')
        axios.get('https://cors-anywhere.herokuapp.com/https://gc2021iitbbs.herokuapp.com/leaderboard')
            .then(response => {
                console.log('hi')
                this.setState({ leaderboard: response.data[0] });
                console.log(this.state.leaderboard);
                var originalScore = response.data[1];
                var techscore = {"Computer Science": 0, "Electrical" : 0, "Electronics & Communication Engineering" : 0, "Mechanical" : 0, "Civil" : 0, "Metallurgy": 0};
                for (int i = 0; i<originalScore.length ; i++){
                    if(originalScore[i].council == "tech") {
                        techscore.(Computer Science) += originalScore[i].csscore;
                        techscore.Electrical += originalScore[i].eescore;
                        techscore.(Electronics & Communication Engineering) += originalScore[i].ecscore;
                        techscore.Mechanical += originalScore[i].mescore;
                        techscore.Civil += originalScore[i].cescore; 
                        techscore.Metallurgy += originalScore[i].mmscore;
                    }
                }
                
                var cultscore = {"Computer Science": 0, "Electrical" : 0, "Electronics & Communication Engineering" : 0, "Mechanical" : 0, "Civil" : 0, "Metallurgy": 0};
                for (int i = 0; i<originalScore.length ; i++){
                    if(originalScore[i].council == "cult") {
                        cultscore.(Computer Science) += originalScore[i].csscore;
                        cultscore.Electrical += originalScore[i].eescore;
                        cultscore.(Electronics & Communication Engineering) += originalScore[i].ecscore;
                        cultscore.Mechanical += originalScore[i].mescore;
                        cultscore.Civil += originalScore[i].cescore; 
                        cultscore.Metallurgy += originalScore[i].mmscore;
                    }
                }
                
         
            })
            .catch(function (error){
                console.log(error);
            })
    }

    render(){
        return(
            <div className="x" id="bodyBg">
                <br/><br/><br/>
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
                            <td className="hidden">{this.state.leaderboard[0].tech} (techScore.leaderboard[0].branch) </td>
                            <td className="hidden">{this.state.leaderboard[0].cult} (cultScore.leaderboard[0].branch)</td>
                            <td className="hidden">{this.state.leaderboard[0].sports} </td>
                            <td className="hidden">{this.state.leaderboard[0].part} </td>
                            <td>{this.state.leaderboard[0].total} </td>
                        </tr>

                        <tr>
                            <td>{this.state.leaderboard[1].branch} </td>
                            <td className="hidden">{this.state.leaderboard[1].tech} </td>
                            <td className="hidden">{this.state.leaderboard[1].cult} </td>
                            <td className="hidden">{this.state.leaderboard[1].sports} </td>
                            <td className="hidden">{this.state.leaderboard[1].part} </td>
                            <td>{this.state.leaderboard[1].total} </td>
                        </tr>

                        <tr>
                            <td>{this.state.leaderboard[2].branch} </td>
                            <td className="hidden">{this.state.leaderboard[2].tech} </td>
                            <td className="hidden">{this.state.leaderboard[2].cult} </td>
                            <td className="hidden">{this.state.leaderboard[2].sports} </td>
                            <td className="hidden">{this.state.leaderboard[2].part} </td>
                            <td>{this.state.leaderboard[2].total} </td>
                        </tr>

                        <tr>
                            <td>{this.state.leaderboard[3].branch} </td>
                            <td className="hidden">{this.state.leaderboard[3].tech} </td>
                            <td className="hidden">{this.state.leaderboard[3].cult} </td>
                            <td className="hidden">{this.state.leaderboard[3].sports} </td>
                            <td className="hidden">{this.state.leaderboard[3].part} </td>
                            <td>{this.state.leaderboard[3].total} </td>
                        </tr>

                        <tr>
                            <td>{this.state.leaderboard[4].branch} </td>
                            <td className="hidden">{this.state.leaderboard[4].tech} </td>
                            <td className="hidden">{this.state.leaderboard[4].cult} </td>
                            <td className="hidden">{this.state.leaderboard[4].sports} </td>
                            <td className="hidden">{this.state.leaderboard[4].part} </td>
                            <td>{this.state.leaderboard[4].total} </td>
                        </tr>

                        <tr>
                            <td>{this.state.leaderboard[5].branch} </td>
                            <td className="hidden">{this.state.leaderboard[5].tech} </td>
                            <td className="hidden">{this.state.leaderboard[5].cult} </td>
                            <td className="hidden">{this.state.leaderboard[5].sports} </td>
                            <td className="hidden">{this.state.leaderboard[5].part} </td>
                            <td>{this.state.leaderboard[5].total} </td>
                        </tr>
                    </tbody>
                    </Table>
                    <div className="note">**Tilt your device to Landscape Mode to see full table</div>
                    </div>
            </div>
        );
    }
}

export default Leader;
