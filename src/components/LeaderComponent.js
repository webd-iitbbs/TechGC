import React,{Component} from 'react';
import Table from 'react-bootstrap/Table'
<<<<<<< HEAD

class Leader extends Component{
=======
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
                this.setState({ leaderboard: response.data });
                console.log(this.state.leaderboard);
            })
            .catch(function (error){
                console.log(error);
            })
    }

>>>>>>> 1edc6fd7d768663ee744433f9952a5aff89c1a14
    render(){
        return(
            <div className="x" id="bodyBg">
                <br/><br/><br/>
                <div className="container">
                <Table striped hover borderless className="table">
                    <thead>
                        <tr>
                        <th>Branch</th>
                        <th>Technical</th>
                        <th>Sports & Games</th>
                        <th>Cultural</th>
                        <th>Participants</th>
                        <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
<<<<<<< HEAD
                        <tr>
                        <td>Computer Science</td>
                        </tr>
                        <tr>
                        <td>Electrical</td>
                        </tr>
                        <tr>
                        <td>Electronics & communication</td>
                        </tr>
                        <tr>
                        <td>Mechanical</td>
                        </tr>
                        <tr>
                        <td>Civil</td>
                        </tr>
                        <tr>
                        <td>Metallurgy</td>
                        </tr>
=======
                    
                        <tr>
                            <td>{this.state.leaderboard[0].branch} </td>
                            <td>{this.state.leaderboard[0].tech} </td>
                            <td>{this.state.leaderboard[0].cult} </td>
                            <td>{this.state.leaderboard[0].sports} </td>
                            <td>{this.state.leaderboard[0].part} </td>
                            <td>{this.state.leaderboard[0].total} </td>
                        </tr>

                        <tr>
                            <td>{this.state.leaderboard[1].branch} </td>
                            <td>{this.state.leaderboard[1].tech} </td>
                            <td>{this.state.leaderboard[1].cult} </td>
                            <td>{this.state.leaderboard[1].sports} </td>
                            <td>{this.state.leaderboard[1].part} </td>
                            <td>{this.state.leaderboard[1].total} </td>
                        </tr>

                        <tr>
                            <td>{this.state.leaderboard[2].branch} </td>
                            <td>{this.state.leaderboard[2].tech} </td>
                            <td>{this.state.leaderboard[2].cult} </td>
                            <td>{this.state.leaderboard[2].sports} </td>
                            <td>{this.state.leaderboard[2].part} </td>
                            <td>{this.state.leaderboard[2].total} </td>
                        </tr>

                        <tr>
                            <td>{this.state.leaderboard[3].branch} </td>
                            <td>{this.state.leaderboard[3].tech} </td>
                            <td>{this.state.leaderboard[3].cult} </td>
                            <td>{this.state.leaderboard[3].sports} </td>
                            <td>{this.state.leaderboard[3].part} </td>
                            <td>{this.state.leaderboard[3].total} </td>
                        </tr>

                        <tr>
                            <td>{this.state.leaderboard[4].branch} </td>
                            <td>{this.state.leaderboard[4].tech} </td>
                            <td>{this.state.leaderboard[4].cult} </td>
                            <td>{this.state.leaderboard[4].sports} </td>
                            <td>{this.state.leaderboard[4].part} </td>
                            <td>{this.state.leaderboard[4].total} </td>
                        </tr>

                        <tr>
                            <td>{this.state.leaderboard[5].branch} </td>
                            <td>{this.state.leaderboard[5].tech} </td>
                            <td>{this.state.leaderboard[5].cult} </td>
                            <td>{this.state.leaderboard[5].sports} </td>
                            <td>{this.state.leaderboard[5].part} </td>
                            <td>{this.state.leaderboard[5].total} </td>
                        </tr>
                        
    
                        
>>>>>>> 1edc6fd7d768663ee744433f9952a5aff89c1a14
                    </tbody>
                    </Table>
                    </div>
            </div>
        );
    }
}

export default Leader;