import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel'
import vrittant from '../images/Vrittant.png';
import akshar from '../images/Akshar.jpg';
import art from '../images/ArtCompetition.png';
import drams from '../images/Dramatics.png';
import photo from '../images/Photography.jpg';
import wiki from '../images/WikiTraking.jpg';
import devil from '../images/Devil.jpg';
import sportsquiz from '../images/SportsQuiz.jpg';
import generalquiz from '../images/GeneralQuiz.jpg';
import question from '../images/QuestionMaking.jpg';
import solosinging from '../images/SoloSinging.jpg';
import instrumental from '../images/instrumental.jpg';
import trailer from '../images/Trailer.jpg';
import Dancing from '../images/Dancing.jpg';

class Cultural extends Component{
    render(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-8 offset-md-2">
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <a href="http://register.gciitbbs.live/">
                        <img className="d-block w-100 image" src={vrittant} alt="First slide" /></a>
                        <Carousel.Caption>
                        <h3 className="carouseltext">Hindi Story Writing: Vrittant</h3><br/><br/>
                        <p className="carouseltext">00/00/00 | Hindi Literary | 00:00</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <a href="http://register.gciitbbs.live/">
                        <img className="d-block w-100 image" src={akshar} alt="Third slide" /></a>
                        <Carousel.Caption>
                        <h3 className="carouseltext">Hindi Poetry Slam: Akshar</h3><br/><br/>
                        <p className="carouseltext">00/00/00 | Hindi Literary | 00:00</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <a href="http://register.gciitbbs.live/">
                        <img className="d-block w-100 image" src={art} alt="Third slide"/></a>
                        <Carousel.Caption>
                        <h3 className="carouseltext">Art competition</h3><br/><br/>
                        <p className="carouseltext">00/00/00 | Kalakriti | 00:00</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <a href="http://register.gciitbbs.live/">
                        <img className="d-block w-100 image" src={drams} alt="First slide" /></a>
                        <Carousel.Caption>
                        <h3 className="carouseltext">Curtains Up</h3><br/><br/>
                        <p className="carouseltext">00/00/00 | Dramatics | 00:00</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <a href="http://register.gciitbbs.live/">
                        <img className="d-block w-100 image" src={photo} alt="Third slide" /></a>
                        <Carousel.Caption>
                        <h3 className="carouseltext">Online Photography</h3><br/><br/>
                        <p className="carouseltext">00/00/00 | Clix | 00:00</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <a href="http://register.gciitbbs.live/">
                        <img className="d-block w-100 image" src={wiki} alt="Third slide"/></a>
                        <Carousel.Caption>
                        <h3 className="carouseltext">The Wikipedia Game: Wiki-tracing</h3><br/><br/>
                        <p className="carouseltext">00/00/00 | English Literary | 00:00</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <a href="http://register.gciitbbs.live/">
                        <img className="d-block w-100 image" src={devil} alt="First slide" /></a>
                        <Carousel.Caption>
                        <h3 className="carouseltext">Devil's Advocate: Accusio Salvare</h3><br/><br/>
                        <p className="carouseltext">00/00/00 | English Literary | 00:00</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <a href="http://register.gciitbbs.live/">
                        <img className="d-block w-100 image" src={sportsquiz} alt="Third slide" /></a>
                        <Carousel.Caption>
                        <h3 className="carouseltext">Sports and Entertainment Quiz</h3><br/><br/>
                        <p className="carouseltext">00/00/00 | QuizClub | 00:00</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <a href="http://register.gciitbbs.live/">
                        <img className="d-block w-100 image" src={generalquiz} alt="Third slide"/></a>
                        <Carousel.Caption>
                        <h3 className="carouseltext">General Quiz</h3><br/><br/>
                        <p className="carouseltext">00/00/00 | QuizClub | 00:00</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <a href="http://register.gciitbbs.live/">
                        <img className="d-block w-100 image" src={question} alt="First slide" /></a>
                        <Carousel.Caption>
                        <h3 className="carouseltext">Question making</h3><br/><br/>
                        <p className="carouseltext">00/00/00 | QuizClub | 00:00</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <a href="http://register.gciitbbs.live/">
                        <img className="d-block w-100 image" src={solosinging} alt="Third slide" /></a>
                        <Carousel.Caption>
                        <h3 className="carouseltext">Solo Singing Competition</h3><br/><br/>
                        <p className="carouseltext">00/00/00 | Aaroh | 00:00</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <a href="http://register.gciitbbs.live/">
                        <img className="d-block w-100 image" src={instrumental} alt="Third slide"/></a>
                        <Carousel.Caption>
                        <h3 className="carouseltext">Solo Instrumental Competition</h3><br/><br/>
                        <p className="carouseltext">00/00/00 | Aaroh | 00:00</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <a href="http://register.gciitbbs.live/">
                        <img className="d-block w-100 image" src={trailer} alt="Third slide"/></a>
                        <Carousel.Caption>
                        <h3 className="carouseltext">Trailer Making Competition: Re-Cut</h3><br/><br/>
                        <p className="carouseltext">00/00/00 | Cinewave | 00:00</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <a href="http://register.gciitbbs.live/">
                        <img className="d-block w-100 image" src={Dancing} alt="Third slide"/></a>
                        <Carousel.Caption>
                        <h3 className="carouseltext">Solo Dance</h3><br/><br/>
                        <p className="carouseltext">00/00/00 | D-gang | 00:00</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                </div>
            </div>
        </div>
    );
}}

export default Cultural;