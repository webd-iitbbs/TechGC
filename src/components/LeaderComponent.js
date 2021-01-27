import React,{Component} from 'react';
import Table from 'react-bootstrap/Table'

class Leader extends Component{
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
                    </tbody>
                    </Table>
                    </div>
            </div>
        );
    }
}

export default Leader;