import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel'
import graphic from '../images/Graphic.jpg';
import marathon from '../images/Marathon.jpg';
import webathon from '../images/Webathon.jpg';
import coding from '../images/CompetitiveCoding.png';
import hackathon from '../images/Hackathon.png';
import problem from '../images/ProblemSolving.jpg';

class Technical extends Component{
    render(){
        return(
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-8 offset-md-2">
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <a href="https://iitbbs-forms.herokuapp.com/">
                        <img className="d-block w-100 image" src={graphic} alt="First slide" /></a>
                        <Carousel.Caption>
                        <h3 className="carouseltext">Graphic Design</h3><br/><br/>
                        <p className="carouseltext">00/00/00 | Webd | 00:00</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <a href="https://iitbbs-forms.herokuapp.com/">
                        <img className="d-block w-100 image" src={marathon} alt="Third slide" /></a>
                        <Carousel.Caption>
                        <h3 className="carouseltext">Design Marathon</h3><br/><br/>
                        <p className="carouseltext">00/00/00 | Webd | 00:00</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <a href="https://iitbbs-forms.herokuapp.com/">
                        <img className="d-block w-100 image" src={webathon} alt="Third slide"/></a>
                        <Carousel.Caption>
                        <h3 className="carouseltext">Webathon</h3><br/><br/>
                        <p className="carouseltext">13/02/21 | Webd | 09:00</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <a href="https://iitbbs-forms.herokuapp.com/">
                        <img className="d-block w-100 image" src={coding} alt="First slide" /></a>
                        <Carousel.Caption>
                        <h3 className="carouseltext">Competitive Coding</h3><br/><br/>
                        <p className="carouseltext">00/00/00 | Neuromancers | 00:00</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <a href="https://iitbbs-forms.herokuapp.com/">
                        <img className="d-block w-100 image" src={hackathon} alt="Third slide" /></a>
                        <Carousel.Caption>
                        <h3 className="carouseltext">Hackathon</h3><br/><br/>
                        <p className="carouseltext">00/00/00 | Neuromancers | 00:00</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <a href="https://iitbbs-forms.herokuapp.com/">
                        <img className="d-block w-100 image" src={problem} alt="Third slide"/></a>
                        <Carousel.Caption>
                        <h3 className="carouseltext">Semester Long Problem Solving</h3><br/><br/>
                        <p className="carouseltext">00/00/00 | Neuromancers | 00:00</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                </div>
            </div>
        </div>
    );
}}

export default Technical;