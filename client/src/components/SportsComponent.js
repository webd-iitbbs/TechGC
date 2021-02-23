import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import chess from '../images/Chess.png';
import challenge from '../images/FitnessChallenge.gif';
import csgo from '../images/CSGO.jpg';
import valorant from '../images/Valorant.jpg';

class Sports extends Component{
    render(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-8 offset-md-2">
                <Carousel>
                <Carousel.Item interval={1000}>
                        <a href="http://register.gciitbbs.live/" target="_blank">
                        <img className="d-block w-100 image" src={chess} alt="First slide" /></a>
                        <Carousel.Caption>
                        <h3 className="carouseltext">Chess</h3><br/><br/>
                        <p className="carouseltext">26/03/21 - 28/03/21 | Board Games</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <a href="http://register.gciitbbs.live/" target="_blank">
                        <img className="d-block w-100 image" src={challenge} alt="Third slide" /></a>
                        <Carousel.Caption>
                        <h3 className="carouseltext">Fitness Challenge</h3><br/><br/>
                        <p className="carouseltext">Date - Refer Rulebook | Sports | 18:00</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <a href="http://register.gciitbbs.live/" target="_blank">
                        <img className="d-block w-100 image" src={csgo} alt="Third slide"/></a>
                        <Carousel.Caption>
                        <h3 className="carouseltext">Counter Strike:GO</h3><br/><br/>
                        <p className="carouseltext">29/03/21 - 04/04/21 | Sports</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <a href="http://register.gciitbbs.live/" target="_blank">
                        <img className="d-block w-100 image" src={valorant} alt="First slide" /></a>
                        <Carousel.Caption>
                        <h3 className="carouseltext">Valorant</h3><br/><br/>
                        <p className="carouseltext">05/04/21 - 11/04/21 | Sports1</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                </div>
            </div>
        </div>
    );
}}

export default Sports;