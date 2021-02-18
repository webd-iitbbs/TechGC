import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel'
import graphic from '../images/Graphic.jpg';
import marathon from '../images/Marathon.jpg';
import webathon from '../images/Webathon.jpg';
import coding from '../images/CompetitiveCoding.png';
import hackathon from '../images/Hackathon.png';
import problem from '../images/ProblemSolving.jpg';
import decode from '../images/Decode.jpg';

class Technical extends Component{
    render(){
        return(
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-8 offset-md-2">
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <a href="http://register.gciitbbs.live/">
                        <img className="d-block w-100 image" src={graphic} alt="First slide" /></a>
                        <Carousel.Caption>
                        <h3 className="carouseltext">Graphic Design</h3><br/><br/>
                        <p className="carouseltext">22/03/21 - 25/03/21 | Webd</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <a href="http://register.gciitbbs.live/">
                        <img className="d-block w-100 image" src={marathon} alt="Third slide" /></a>
                        <Carousel.Caption>
                        <h3 className="carouseltext">Design Marathon</h3><br/><br/>
                        <p className="carouseltext">17/03/21 - 20/03/21 | Webd</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <a href="http://register.gciitbbs.live/">
                        <img className="d-block w-100 image" src={webathon} alt="Third slide"/></a>
                        <Carousel.Caption>
                        <h3 className="carouseltext">Webathon</h3><br/><br/>
                        <p className="carouseltext">20/03/21 - 22/03/21 | Webd</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <a href="http://register.gciitbbs.live/">
                        <img className="d-block w-100 image" src={coding} alt="First slide" /></a>
                        <Carousel.Caption>
                        <h3 className="carouseltext">Competitive Coding</h3><br/><br/>
                        <p className="carouseltext">21/02/21 | Neuromancers | 19:00 - 21:00</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                </div>
            </div>
        </div>
    );
}}

export default Technical;