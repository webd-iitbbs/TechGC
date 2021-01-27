import React, {Component} from 'react';
import Card from 'react-bootstrap/Card'

class Team extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id="bodyBg" className="x">
                <div className="container">
                    <div className="row">
                        <div className="offset-md-1 col-md-5">
                        <Card style={{ width: '18rem'}} className="y">
                            <Card.Body>
                                <Card.Title>For Graphic Design</Card.Title>
                                <Card.Text><span className="fa fa-user fa-lg"></span>  C SuryaTeja</Card.Text>
                                <Card.Text><span className="fa fa-phone fa-lg"></span> +91 9492685179</Card.Text>
                                <Card.Text><span className="fa fa-envelope fa-lg"></span> yms10@iitbbs.ac.in</Card.Text>
                            </Card.Body>
                        </Card>
                        </div>
                        <div className="offset-md-1 col-md-5">
                        <Card style={{ width: '18rem'}} className="y">
                            <Card.Body>
                                <Card.Title>For Design Marathon</Card.Title>
                                <Card.Text><span className="fa fa-user fa-lg"></span>  G Kartheek</Card.Text>
                                <Card.Text><span className="fa fa-phone fa-lg"></span> +91 7036987953</Card.Text>
                                <Card.Text><span className="fa fa-envelope fa-lg"></span> gk35@iitbbs.ac.in</Card.Text>
                            </Card.Body>
                        </Card>
                        </div>
                        <div className="offset-md-1 col-md-5">
                        <Card style={{ width: '18rem'}} className="y">
                            <Card.Body>
                                <Card.Title>For Webathon</Card.Title>
                                <Card.Text><span className="fa fa-user fa-lg"></span>  Sudheer Bulusu</Card.Text>
                                <Card.Text><span className="fa fa-phone fa-lg"></span> +91 7675974963</Card.Text>
                                <Card.Text><span className="fa fa-envelope fa-lg"></span> bds15@iitbbs.ac.in</Card.Text>
                            </Card.Body>
                        </Card>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Team;